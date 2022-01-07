$(function(){
			
	// scroll qui-suis-je
	$('.lien_fleche_bas').click(function(e){
		var anim = $('#qui-suis-je');
		$('html, body').animate({scrollTop : anim.offset().top}, 750);
		e.preventDefault();
	});

	$(window).scroll(function(){

		var Hscroll = $(this).scrollTop();
		if(Hscroll > 200){
		$('.portrait-simon').addClass('scroll-anim');
		$('.picto_dev').addClass('scroll-anim2');
		$('.picto_plume').addClass('scroll-anim3');	
		} else {
		$('.portrait-simon').removeClass('scroll-anim');
		$('.picto_dev').removeClass('scroll-anim2');
		$('.picto_plume').removeClass('scroll-anim3');	
		}
		var opScroll = Hscroll / 1000;
		$('.disparition-scroll').css({opacity : 1 - opScroll });
	});

	$('#menu').onePageNav();

	$('#menu-mobile').onePageNav({
		end : function() {
			$('.menu-mobile').slideUp();
		} 
		});

	// MENU MOBILE
	$('.burger-menu').click(function(e){
		$('.menu-mobile').slideDown();
		e.preventDefault();
	});
	
	$('.close-menu').click(function(e){
		$('.menu-mobile').slideUp();
		e.preventDefault();
	});

});

// opacité image
//var opacityImg = $('.folio a');

//opacityImg.mouseover('click', function(){
//	$(this).animate({
//		'opacity' : 1,
//	});
//}).mouseout('click', function(){
//	$(this).animate({
//		'opacity': 0.5,
//	})
//});

$("[data-fancybox]").fancybox({
	loop            : false,
	keyboard        : false,
	toolbar         : true,
  });

// SCROLL TOP

$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});