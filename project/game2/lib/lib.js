function hitTest(me, target) {
	var me_x= parseInt(me.style.left);
	var me_y= parseInt(me.style.top);
	var me_w=me_x+parseInt(me.style.width);
	var me_h=me_y+parseInt(me.style.height);

	var target_x= parseInt(target.style.left);
	var target_y= parseInt(target.style.top);
	var target_w=target_x+parseInt(target.style.width);
	var target_h=target_y+parseInt(target.style.height);

	var result1=(me_w >= target_x) && (me_x <= target_w);
	var result2=(me_h >= target_y) && (me_y <= target_h);
	 
	return result1 && result2;
}
