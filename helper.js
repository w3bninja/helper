// Helper Functions for Front-EndDevelopment
$.fn.gridBox = function() {
	$(this).each(function() {
		$('.item').css('height', '');
    });
	var $gridbox = $(this).imagesLoaded( function() {
		$gridbox.each(function(){  
			 var $columns = $('.item',this);
			 var maxHeight = Math.max.apply(Math, $columns.map(function(){
				 return $(this).outerHeight();
			 }).get());
			 $columns.outerHeight(maxHeight);
		});
	});
};
$.fn.square = function() {
	$(this).each(function() {
        $(this).outerHeight($(this).outerWidth());
    });
};
$.fn.vCenter = function() {
	$(this).each(function() {
        $(this).wrapInner( "<div class='vcenter-outer'></div>");
		$('.vcenter-outer').wrapInner( "<div class='vcenter-inner'></div>");
    });
};

$.fn.popper = function() {
	var set = $(this);
	set.on('click', function(e){
		var setPop = $(this).attr("href");
		e.preventDefault();
		$('body').toggleClass('pop-open');
		$('body').find(setPop).toggleClass('active');
	});
};

$.fn.sectionSizing = function() {
	var set = $(this);
	set.css("min-height", $(window).height() + "px");
	$(".max-height").css("max-height", $(window).height() + "px");
	$(".full-height").css("height", $(window).height() + "px");
	$(".parent-height").each(function() {
		$(this).css("height", $(this).parent().height() + "px");
	});
};

$.fn.makeItFit = function() {
	$(this).each(function() {
		var set = $(this);
		set.fitVids();		
	});
};

// SMOOTH SCROLL
$.fn.scrollTo = function() {
	if ($(this).length > 0) {
		$(this).on("click", function(event){
			 event.preventDefault();
			 var dest=0;
			 var destOffset = 200;
			 if($(this.hash).offset().top > $(document).height()-$(window).height()){
				  dest=$(document).height()-$(window).height(); //calculate destination place
			 }else{
				  dest=$(this.hash).offset().top; //calculate destination place
			 }
			 //go to destination
			 $('html,body').animate({scrollTop:dest-destOffset}, 1000,'swing');
		 });
	 }
};