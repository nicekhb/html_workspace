//지정한 특정 범위의 랜덤값 구하기
function getRandomByRange(max, min){
	var r=Math.floor(Math.random()*(max-min+1)+min);
	return r;
}
//두 물체간 충돌여부를 판단하기 위한 함수이다
//리턴값이 true이면 두 물체는 서로 교차하고 있는 상태이다
function hitTest(me, target) {
	//두물체간 충돌 여부 판단 
	var me_x= parseInt(me.style.left);
	var me_y= parseInt(me.style.top);
	var me_width=parseInt(me.style.width);
	var me_height=parseInt(me.style.height);

	var target_x= parseInt(target.style.left);
	var target_y= parseInt(target.style.top);
	var target_width=parseInt(target.style.width);
	var target_height=parseInt(target.style.height);

	var result1=(me_x >= target_x) && (me_x <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
	var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단

	var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
	var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
	 
	return (result1 || result2) && (result3 || result4);
}
