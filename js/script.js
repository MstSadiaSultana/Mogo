$(document).ready(function(){
	
	// counterUp Design
	$('.counter_up_single h1').counterUp({
		delay: 10,
    	time: 1200,
	});

	$(".slider_area_full").owlCarousel({
		items : 1,
		loop :true,
		dots:false,
		nav :true,
		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	});


  $(".brand_logo_full").owlCarousel({
    items : 6,
    loop :true,
    autoplay :true,
    autoplayTimeout:1000,
  });


  $('.work_gallery_single a').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    }
  });

  $('.mobile_menu a').click(function(){
    $('.menu ul').slideToggle();
  });


});