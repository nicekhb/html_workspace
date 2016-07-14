var Rockman=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.div;
	this.bottom;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;
	this.velY=2;
	this.gravity=0.2;
	this.falling=true;
	this.jumping=false;
	this.speedCount=0;
	this.running=false;

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.position="relative";

		this.div=document.createElement("div");
		this.div.style.overflow="hidden";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";

		this.bottom=document.createElement("div");
		this.bottom.style.width=this.width+"px";
		this.bottom.style.height=1+"px";
		this.bottom.style.position="absolute";
		this.bottom.style.left=this.x+"px";
		this.bottom.style.top=(this.y+this.height)+"px";

		//this.img.style.top=-65+"px";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.div.appendChild(this.img);
		this.stage.appendChild(this.div);
		this.stage.appendChild(this.bottom);

		this.move();
	}
	this.action=function(){
		if(this.running){
			this.speedCount++;
			if(this.speedCount%35==0){
				actionCount++;
				if(actionCount==actionArray.length){
					actionCount=1;
				}
			}
			this.img.src=actionArray[actionCount];
		}else{
			this.img.src=actionArray[0];
		}
	}
	this.move=function(){
		var me=this;

		this.velY+=this.gravity;
		
		if(this.velY>0){
			this.falling=true;
			this.jumping=false;
		}

		for(var i=0;i<blockArr.length;i++){
			var result=hitTest(this.bottom,blockArr[i].img);
			if(result && this.falling){
				this.velY=0;
				this.falling=false;
			}
		}

		this.x+=this.velX;
		this.y+=this.velY;

		this.div.style.top=this.y+"px";
		this.div.style.left=this.x+"px";

		this.bottom.style.top=(this.y+this.height)+"px";
		this.bottom.style.left=this.x+"px";

		this.action();

		setTimeout(function(){
			me.move();
		},10);
	}
}