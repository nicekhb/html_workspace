var Maze=function(stage,width,height,x,y){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.flag=false;


	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.position="absolute";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border="1px solid black";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";

		this.stage.appendChild(this.div);

		//클릭시 배경색 변경
		var me=this;
		this.div.addEventListener("click",function(){
			if(me.flag=!me.flag){
				me.div.style.background="#9999ff";
			}
			else{
				me.div.style.background="";
			}
		});
	}
}