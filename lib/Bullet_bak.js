/*--------------------------------------------------------------------
총알 생성
객체 메뉴얼
stage: 이 총알이 어떤 div에 붙을지를 결정
posY: 이 총알이 어느 y좌표에서 날아갈지 결정
-----------------------------------------------------------------------*/
var Bullet=function(stage,posY){
	//객체의 특징에 대한 값을 담고 있다- 속성이라 한다(property)
	this.span;
	this.x=100;
	this.y=posY;
	
	//객체안에 들어있는 함수는 method (메서드-방법)라 한다.
	//객체의 동작 방식을 결정하는 로직이 들어있기 때문에
	this.init=function(){
		this.span=document.createElement("span");
		this.span.innerText="●";
		this.span.style.color="red";
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

		stage.appendChild(this.span);

		this.move();
	}
	this.move=function(){
		var me=this;
		this.x+=10;
		this.span.style.left=this.x+"px";
		setTimeout(function(){
			me.move();
			},10);
	}
}