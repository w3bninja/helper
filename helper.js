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

$.fn.sectionSizing = function() {
	var set = $(this);
	set.css("min-height", $(window).height() + "px");
	$(".max-height").css("max-height", $(window).height() + "px");
	$(".full-height").css("height", $(window).height() + "px");
	$(".parent-height").each(function() {
		$(this).css("height", $(this).parent().height() + "px");
	});
};