
		$(document).ready(function(){
			/*$(".menu li").click(function() {
				var scrollPosition = $($(this).attr("data-target")).offset().top;

				$("body").animate({
					scrollTop: scrollPosition
				}, 500);
			});*/
			var ran;
				ran=Math.round(Math.random()*4);
				moveImage(ran);
				$('.control_button').click(function() {
					ran=$(this).index();
					moveImage(ran);
				});
			
				
				$('.prev').click(function() {
					if(ran > 0) {
						ran--;
						moveImage(ran);
					}
				});
				$('.next').click(function() {
					if(ran<4) {
						ran++;
						moveImage(ran);
					}
				});
			

		});
		
		function moveImage(index) {
				var wdt;
				wdt = $('#poster_slide').width();
				$('#poster_frame').animate({
						left:-(index*wdt)
					},500);

					$('.control_button').removeClass('active');
					$('.control_button').eq(index).addClass('active');
			}