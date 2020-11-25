

function modal_open(modal_id) {
	$(".modal-wrap").removeClass("show-modal");
	$("#cinema-modal").find("video").get(0).pause();
	$("#cinema-modal").find("video").get(0).currentTime = 0;
	$("#pizza-modal").find("video").get(0).pause();
	$("#pizza-modal").find("video").get(0).currentTime = 0;
	$("#omelet-modal").find("video").get(0).pause();
	$("#omelet-modal").find("video").get(0).currentTime = 0;
	$("#phone-modal").find("video").get(0).pause();
	$("#phone-modal").find("video").get(0).currentTime = 0;
	$("#icecream-modal").find("video").get(0).pause();
	$("#icecream-modal").find("video").get(0).currentTime = 0;
	$("#water-modal").find("video").get(0).pause();
	$("#water-modal").find("video").get(0).currentTime = 0;
	$("#grape-modal").find("video").get(0).pause();
	$("#grape-modal").find("video").get(0).currentTime = 0;
	$("#sewer-modal").find("video").get(0).pause();
	$("#sewer-modal").find("video").get(0).currentTime = 0;
	
	$("#" + modal_id).addClass("show-modal");
	$("#" + modal_id).find("video").get(0).play();
	$('#buttonclick').get(0).play();
	return false;
}

jQuery(function($){

	var $modal_wrap = $('.modal-wrap'),
		$modal_close = $('.modal-wrap .modal-close')

	$modal_close.on("click", function(event){
		if($(event.target).parents('.modal-wrap').hasClass('show-modal')){
			$(event.target).parents('.modal-wrap').toggleClass("show-modal");
			$(event.target).parents('.modal-wrap').find("video").get(0).pause();
			$('#buttonclick').get(0).play();

			return false;
		}
	});
	$modal_wrap.on("click", function(event){
		if($(event.target).hasClass('show-modal')){
			$(event.target).toggleClass("show-modal");
			return false;
		}
	});

	$('.area .button').on('mouseenter', function(){
		$('#blop').get(0).play();
		$(this).parent().addClass('active');
		return false;
	})
	$('.area .button').on('mouseleave ', function(){
		$(this).parent().removeClass('active');
		return false;
	})

});
