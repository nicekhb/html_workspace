/*--------------------------------------------------------------------
총알 생성
객체 메뉴얼
stage: 이 총알이 어떤 div에 붙을지를 결정
posY: 이 총알이 어느 y좌표에서 날아갈지 결정
-----------------------------------------------------------------------*/
var Bullet=function(stage,width,height,x,y){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.velX=10; //x축의 방향으로 몇씩 움직일지 
	this.st;

	//객체안에 들어있는 함수는 method (메서드-방법)라 한다.
	//객체의 동작 방식을 결정하는 로직이 들어있기 때문에
	this.init=function(){
		this.img=document.createElement("img");
		this.img.src="../images/bullet.png";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";


		this.stage.appendChild(this.img);

		this.move();
	}
	this.hitTest=function(){
		for(var i=0;i<enemyArray.length;i++){
			if(enemyArray[i]!=undefined){
				//적군과 부딪치면
				if(hitTest(this.img,enemyArray[i].img)){
					this.stage.removeChild(this.img);
					clearTimeout(this.st);

					this.stage.removeChild(enemyArray[i].img);
					clearTimeout(enemyArray[i].st);
					delete enemyArray[i];
				}
			}
		}
	}
	this.move=function(){
		var me=this;
		this.x+=this.velX;
		this.img.style.left=this.x+"px";
		
		this.st=setTimeout(function(){
			me.move();
		},5);
		
		this.hitTest();

		//화면밖으로 나가면
		if(parseInt(this.img.style.left)>parseInt(this.stage.style.width)){
			this.stage.removeChild(this.img);
			clearTimeout(this.st);
		}
	}
}