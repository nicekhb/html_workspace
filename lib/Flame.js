/*-------------------------------------------------------
불꽃을 정의
a:어떤 div에 붙을지
w:가로 크기
h:높이
posX:
posY:
------------------------------------------------------*/
var Flame=function(stage,width,height,x,y){
	//현실의 모든 사물은 객체지향언어에서 클래스로 표현되고
	//해당 사물이 보유한 상태는 변수인 속성으로 표현한다.
	//해당 사물이 보유한 동작은 함수인 메서드로 표현한다.
	//하지만, 변수와 함수가 객체의 소유가 될떄는 명치이 바뀐다.
	//변수:객체가 보유한 상태를 표현한다고 해서 속성(property)
	//함수:객체가 보유한 동작방식을 표현한다고 해서 메서드(method)

	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.arr=new Array(4);
	this.stage=stage;
	this.count=0;
	this.velX=0;
	this.velY=0;

	this.init=function(){
		this.img=document.createElement("img");

		this.arr[0]="../images/flame/flame1.png";
		this.arr[1]="../images/flame/flame2.png";
		this.arr[2]="../images/flame/flame3.png";
		this.arr[3]="../images/flame/flame4.png";

		this.img.src=this.arr[this.count];
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.stage.appendChild(this.img);
		this.change();
		this.move();
	}
	this.move=function(){
		//이미지를 계속 교체해서 보여줌
		//src교체
		var me=this;

		this.x=this.x+this.velX;
		this.y=this.y+this.velY;	

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		setTimeout(function(){
			me.move();
		},5);
	}
	this.go=function(){
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
	}
	this.change=function(){
		var me=this;
		this.count++;
		if(this.count>=this.arr.length){
			this.count=0;
		}
		this.img.src=this.arr[this.count];

		setTimeout(function(){
			me.change();
		},50);
	}
}