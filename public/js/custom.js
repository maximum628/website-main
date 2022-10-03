$( document ).ready(function(){

	var width = $(window).width();
	if ($(document).height() > $(window).height()) {
		width = width + 15;
	}
	if( width > 1199 ) {
		$('.dropdown').addClass('is-desktop');
	}

	$('body').on('mouseenter','.dropdown.is-desktop',function(){
		$(this).addClass('open');
	});
	$('body').on('mouseleave','.dropdown.is-desktop',function(){
		$(this).removeClass('open');
	});
	$('body').on('mouseleave','.dropdown-menu.is-desktop',function(){
		$(this).closest('.dropdown').removeClass('open');
	});

	$('body').on('click','.dropdown span',function(e){
		e.stopPropagation();
		if( $(this).hasClass('is-desktop') == false )
		{
			var url = $(this).closest('a').attr('data-url');
			window.location.href = url;
		}
	});

});

$(window).on('resize', function(){
	var width = $(window).width();
	if ($(document).height() > $(window).height()) {
		width = width + 15;
	}
	if( width > 1199 ) {
		$('.dropdown').addClass('is-desktop');
	} else {
		$('.dropdown').removeClass('is-desktop');
	}
});

$('.dropdown').on({
	"shown.bs.dropdown": function() { this.closable = false; },
	"click":             function() { this.closable = true; },
	"hide.bs.dropdown":  function() { return this.closable; }
});
