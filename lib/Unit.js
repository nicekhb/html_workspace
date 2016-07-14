/*적군을 정의*/
var Unit=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.src=src;
	this.velX=0;
	this.velY=0;
	this.st;
	this.flag=true;//setTimeout을 실행할지 여부를 결정

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;

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
		
		this.x+=this.velX;
		this.y+=this.velY;

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.st=setTimeout(function(){
			me.move();
		},100);

		if(!this.flag){
			clearTimeout(this.st);
		}
	}

	//움직임 멈출수 있도록 제공
	this.stop=function(){
		clearTimeout(this.st);
	}
}