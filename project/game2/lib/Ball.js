var Ball=function(stage,width,height,x,y,src,hero,arrow,velX,size){
	this.stage=stage;
	this.img;
	this.src=src;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.hero=hero;
	this.arrow=arrow;
	this.velX=velX;
	this.velY=0;
	this.gravity=0.1;
	this.st;
	this.size=size;

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
		if((parseInt(this.img.style.top))>=680-this.height || this.y<=0){
			if(this.size==3){
				this.velY=-10;
			}else if(this.size==2){
				this.velY=-7.5;
			}else{
				this.velY=-5;
			}
			this.velY-=this.gravity;
		}
		if((((parseInt(this.img.style.left)+this.width)>800)&&this.velX>0)
			|| ((parseInt(this.img.style.left)<=0)&&this.velX<0)){
			this.velX=-this.velX;
		}else{
			this.velY+=this.gravity;
			this.x=this.x+this.velX;
			this.y=this.y+this.velY;		
			this.img.style.left=this.x+"px";
			this.img.style.top=this.y+"px";
		}
		this.st=setTimeout(function(){
			me.move();
		},15);
		this.hitTestHero();
		this.hitTestArrow();
	}
	this.hitTestHero=function(){
		if(hitTest(this.img,this.hero.img)){
			this.gameOver();
		}
	}
	this.hitTestArrow=function(){
		if(hitTest(this.img,this.arrow.img)){
			this.arrow.hitBall();
			clearTimeout(this.st);
			this.stage.removeChild(this.img);
			if(this.size>1){
				this.makeChildBall();
			}
			breakCount++;
			if(breakCount==14){
				var stageClearImg=document.createElement("img");
				stageClearImg.src="./images/stageClear.png";
				stageClearImg.style.width=500+"px";
				stageClearImg.style.height=300+"px";
				stageClearImg.style.position="absolute";
				stageClearImg.style.left=150+"px";
				stageClearImg.style.top=150+"px";

				this.stage.appendChild(stageClearImg);

				window.addEventListener("keydown",function(){
					if(event.keyCode==13){
						location.href="../index.html";
					}
				});
			}
		}
	}
	this.makeChildBall=function(){
		var ball=new Ball(this.stage,this.width/2,this.height/2,parseInt(this.img.style.left),parseInt(this.img.style.top)
								,this.img.src,this.hero,this.arrow,this.velX,this.size-1,this.stArr);
		ball.init();
		var ball2=new Ball(this.stage,this.width/2,this.height/2,parseInt(this.img.style.left),parseInt(this.img.style.top)
								,this.img.src,this.hero,this.arrow,-this.velX,this.size-1,this.stArr);
		ball2.init();
	}
	this.gameOver=function(){
		this.hero.img.src="./images/angel.png";
		clearTimeout(this.hero.st);
		this.arrow.img.style.top=800+"px";
		var gameOverImg=document.createElement("img");
		gameOverImg.src="./images/gameover.png";
		gameOverImg.style.width=500+"px";
		gameOverImg.style.height=300+"px";
		gameOverImg.style.position="absolute";
		gameOverImg.style.left=150+"px";
		gameOverImg.style.top=150+"px";

		this.stage.appendChild(gameOverImg);

		window.addEventListener("keydown",function(){
			if(event.keyCode==13){
				location.href="../index.html";
			}
		});

	}
}