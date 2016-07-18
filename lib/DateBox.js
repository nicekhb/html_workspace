var DateBox=function(stage,width,height,text){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.text=text;
	var me=this;
	this.ta;
	this.input;
	this.title;
	this.content;

	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.float="left";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border="1px solid blue";

		this.title=document.createElement("div");
		this.title.style.width=100+"%";
		this.title.style.height=20+"px";
		this.title.innerText=this.text;
		this.content=document.createElement("div");
		this.content.style.width=100+"%";
		this.content.style.height=80+"px";
		this.content.style.overflow="auto";
		this.content.style.fontSize="9pt";

		this.div.appendChild(this.title);
		this.div.appendChild(this.content);
		this.stage.appendChild(this.div);

		this.div.addEventListener("click",function(){
			if(me.ta==undefined&&me.div.innerText!=""){
				me.createForm();
			}
		});
	}
	this.createForm=function(){
		this.ta=document.createElement("textarea");
		this.input=document.createElement("input");
		this.ta.style.width=94+"%";
		this.ta.style.height=45+"px";
		//ta.rows="2";
		//ta.cols="10";
		this.ta.style.background="pink";
		this.input.type="button";
		this.input.value="등록";
		this.input.addEventListener("click",function(){
			me.showContent();
		});
		this.content.appendChild(this.ta);
		this.content.appendChild(this.input);
	}
	this.showContent=function(){
		var str=this.ta.value;
		this.content.removeChild(this.ta);
		this.content.removeChild(this.input);
		this.content.innerText=str;
	}
}