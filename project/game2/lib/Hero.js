var Hero=function(stage,width,height,x,y,arrow){
	this.stage=stage;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.velX=0;
	this.arrow=arrow;
	this.st;

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src="./images/hero.png";
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
	
		if((((parseInt(this.img.style.left)+this.width)>800)&&this.velX>0)
			|| ((parseInt(this.img.style.left)<=0)&&this.velX<0)){
			this.velX=0;
		}else{
			this.x=this.x+this.velX;		
			this.img.style.left=this.x+"px";
			if(this.arrow.flag==false){
				this.arrow.img.style.left=(this.x+18)+"px";
			}
		}
		
		this.st=setTimeout(function(){
			me.move();
		},5);
	}
}