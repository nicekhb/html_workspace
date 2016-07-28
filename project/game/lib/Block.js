var Block=function(stage,width,height,x,y,type){
	this.stage=stage;
	this.div;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.type=type;  //0:길 1:골인 2:벽 3:빈공간   7:주인공의 초기위치 8:상자의 초기위치
	this.pass=false;


	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.float="left";

		this.img=document.createElement("img");
		if(this.type=="0" || this.type=="7" || this.type=="8"){
			this.div.style.background="#33cc00";
			//this.div.style.backgroundImage="url(\"./images/floor.png\")";
			this.img.src="./images/trans.png";
			this.pass=true;
		}else if(this.type=="1"){
			this.div.style.background="#33cc00";
			//this.div.style.backgroundImage="url(\"./images/floor.png\")";
			this.img.src="./images/goal.png";
			this.pass=true;
		}else if(this.type=="2"){
			this.img.src="./images/wall.png";
			this.pass=false;
		}else if(this.type=="3"){
			this.div.style.background="#333366";
			this.img.src="./images/empty.png";
			this.pass=false;
		}
	
		this.img.style.width=100+"%";
		this.img.style.height=100+"%";

		this.div.appendChild(this.img);
		this.stage.appendChild(this.div);
	}
}