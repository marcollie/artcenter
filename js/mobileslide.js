$(document).ready(function(){
	var originalLeft=0;
	var oldLeft=0;
	var nowPosition=0;
	var isDown=false;
	
	$('#show_screen>ul').on('mousedown',function() {
		//alert('안녕');
		isDown=true;
		oldLeft=originalLeft=event.clientX;
		event.preventDefault();
	});
	$('#show_screen>ul').on('mousemove',function() {
		if(isDown==true) {
			var distance=oldLeft-event.clientX;
			if(distance<0){
				nowPosition=1;
			}else {
				nowPosition=0;
			}
			oldLeft=event.clientX;
			
			
		}
		event.preventDefault();
	});
	$('#show_screen>ul').on('mouseup',function() {
		var left=0;
		left=parseInt($(this).css('left'));
		//alert(left);
		if(nowPosition==0){	
			if(left>-600) {
				$(this).animate({
					left:'-='+180
				},100);
			}
			
			/*$(this).animate({
				left:'-='+160
			},2000);*/
		}else if(nowPosition==1 && left<0){
			$(this).animate({
				left:'+='+180
			},100);
			
		}
		isDown=false;
		event.preventDefault();
	});
	
	
	
	
	
	$('#exhi_screen>ul').on('mousedown',function() {
		//alert('안녕');
		isDown=true;
		oldLeft=originalLeft=event.clientX;
		event.preventDefault();
	});
	$('#exhi_screen>ul').on('mousemove',function() {
		if(isDown==true) {
			var distance=oldLeft-event.clientX;
			if(distance<0){
				nowPosition=1;
			}else {
				nowPosition=0;
			}
			oldLeft=event.clientX;
			
			
		}
		event.preventDefault();
	});
	$('#exhi_screen>ul').on('mouseup',function() {
		var left=0;
		left=parseInt($(this).css('left'));
		//alert(left);
		if(nowPosition==0){	
			if(left>-300) {
				$(this).animate({
					left:'-='+180
				},100);
			}
			
			/*$(this).animate({
				left:'-='+160
			},2000);*/
		}else if(nowPosition==1 && left<0){
			$(this).animate({
				left:'+='+180
			},100);
			
		}
		isDown=false;
		event.preventDefault();
	});
});