/*
npm install express
npm install mysql
npm install body-parser
npm install ejs
*/

var http=require("http");
var express=require("express");
var fs=require("fs");
var mysql=require("mysql");
var bodyParser=require("body-parser");
var ejs=require("ejs");


//express 모듈로 부터 application 객체를 생성한다.
//application = 웹서버 역할을 담당(요청에 대해 응답을 처리)
var app=express();
app.use(bodyParser.json());  //json 지원
app.use(bodyParser.urlencoded({ extended:true }));  //form태그로 전송될 경우 이속성 지정
app.use(express.static(__dirname));


var client=mysql.createConnection({
	"url":"localhost",
	"user":"root",
	"password":""
});

client.query("use iot");

//http://localhost:8286/memo
app.route("/memo").get(function(request, response){
	response.redirect("/memo/1");
});
app.route("/memo/:page").get(function(request, response){
	var rows;
	var page=request.params.page;
	var pageSize=5;
	var num=(page-1)*pageSize;
	client.query("select count(*) as rows from memo", function(error, record){
		rows=record;
	});
	var sql ="select no, name, password, contents, date_format(regdate, '%m월 %d일 %k시 %i분') as regdate from memo";
	sql = sql + " order by no desc limit "+num+","+pageSize;
	client.query(sql, function(error, records){
		if(!error){
			//console.log(records);
			var data=fs.readFileSync("./html/memo.html", "utf8");
			response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
			response.end(ejs.render(data, {dataList:records,rowCount:rows}));
		}else{
			console.log("fail");
		}
	});
});

app.route("/regist").post(function(request, response){
	var data=request.body;
	
	var name=data.name;  
	var pwd=data.pwd;
	var ta=data.ta;

	client.query("insert into memo(name,password,contents) values('"+name+"','"+pwd+"','"+ta+"')", function(error, records, field){
		if(error){
			console.log("등록 실패입니다");
		}else{
			console.log("등록 성공입니다");
			response.redirect("/memo/1");
		}
	});
});

app.route("/delete/:no").get(function(request, response){
	client.query("delete from memo where no="+request.params.no, function(error, records, field){
		if(error){
			console.log("삭제 실패입니다");
		}else{
			console.log("삭제 성공입니다");
			response.redirect("/memo");
		}
	});
});

var server=http.createServer(app);
 
server.listen(8286, function(){
	console.log("Server is running at 8286...");
}); 