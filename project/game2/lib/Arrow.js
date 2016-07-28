var Arrow=function(stage,x,y){
	this.stage=stage;
	this.img;
	this.width=15;
	this.height=600;
	this.x=x;
	this.y=y;
	this.velY=-2;
	this.flag=false;
	this.st;

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src="./images/arrow.png";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="relative";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.stage.appendChild(this.img);

		this.move();
	}
	this.move=function(){
		var me=this;
		
		if(this.flag){
			if(parseInt(this.img.style.top)<100){
				this.y=619;
				this.flag=false;
			}
			this.y=this.y+this.velY;		
			this.img.style.top=this.y+"px";
		}		
		
		this.st=setTimeout(function(){
			me.move();
		},5);
	}
	this.fire=function(){
		if(!this.flag){
			this.flag=true;
		}
	}
	this.hitBall=function(){
		this.y=617;
		this.img.style.top=this.y+"px";
		this.flag=false;
	}
}