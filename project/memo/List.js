var List=function(stage,width,height,name,regDate,contents){
	this.stage=stage;
	this.div;
	this.topDiv;
	this.updateDiv;
	this.contentDiv;
	this.width=width;
	this.height=height;
	this.name=name;
	this.regDate=regDate;
	this.contents=contents;

	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border="1px solid pink";

		this.topDiv=document.createElement("div");
		this.topDiv.style.width=260+"px";
		this.topDiv.style.height=25+"px";
		this.topDiv.style.border="1px solid blue";
		this.topDiv.style.float="left";
		this.topDiv.innerText=this.name+"   "+this.regDate;
		this.updateDiv=document.createElement("div");
		this.updateDiv.style.width=125+"px";
		this.updateDiv.style.height=25+"px";
		this.updateDiv.style.border="1px solid blue";
		this.updateDiv.style.float="left";
		var input=document.createElement("input");
		input.size="5";
		var a=document.createElement("a");
		a.innerText="수정";
		a.href="";
		a.style.textDecoration="none";
		this.updateDiv.appendChild(input);
		this.updateDiv.appendChild(a);
		this.contentDiv=document.createElement("div");
		this.contentDiv.style.width=this.width+"px";
		this.contentDiv.style.height=100+"px";
		this.contentDiv.style.border="1px solid blue";
		this.contentDiv.style.float="left";
		this.contentDiv.innerText=this.contents;

		this.div.appendChild(this.topDiv);
		this.div.appendChild(this.updateDiv);
		this.div.appendChild(this.contentDiv);
		this.stage.appendChild(this.div);
	}
}