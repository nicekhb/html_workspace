var Box=function(stage,width,height,x,y,boxX,boxY){
	this.stage=stage;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.boxX=boxX;
	this.boxY=boxY;

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src="./images/box.png";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.stage.appendChild(this.img);

		this.move();
	}
	this.move=function(){
		var me=this;

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
		
		setTimeout(function(){
			me.move();
		},5);
	}
}