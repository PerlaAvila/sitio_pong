$(document).ready(function(){
    
    $("#navscroll").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('#navscroll').fadeIn() && $('#hiden').hide();
			} else {
				$('#navscroll').fadeOut() && $('#hiden').show();
			}
		}); //window
	}); // function


	// función que inicia el slider
	jQuery('#rev_slider_1').show().revolution({
 
            sliderLayout: 'fullscreen',
            dottedOverlay:'none',
            delay: 4000,
            /* basic navigation arrows and bullets */
            navigation: {
              keyboardNavigation: 'on',
              keyboard_direction: 'horizontal',
              mouseScrollNavigation: 'off',
              mouseScrollReverse: 'off',
              onHoverStop: 'on',
 
                arrows: {
                    enable: true,
                    style: 'uranus',
                    hide_onleave: true,
                    tmp:'',
                    left:{
                      h_align: 'center',
                      v_align: 'bottom',
                      h_offset:-30,
                      v_offset:60
                    },
                    right:{
                      h_align:'center',
                      v_align:'bottom',
                      h_offset:30,
                      v_offset:60
                    }
                  }  //arrows
                }, //navigation
                responsiveLevels:[1240,1024,778,480],
                        visibilityLevels:[1240,1024,778,480],
                        gridwidth:[1240,1024,778,480],
                        gridheight:[768,668,960,720],
                        lazyType:"single",
                        parallax: {
                            type:"3D",
                            origo:"slidercenter",
                            speed:400,
                            levels:[50,10,8,15,20,30,35,40,0,50,47,48,49,50,51,55],
                            type:"3D",
                            ddd_shadow:"on",
                            ddd_bgfreeze:"on",
                            ddd_overflow:"hidden",
                            ddd_layer_overflow:"visible",
                            ddd_z_correction:65,
                        }, //parallax
                        spinner:"off",
                        stopLoop:"off",
                        stopAfterLoops:0,
                        stopAtSlide:0,
                        shuffle:"off",
                        autoHeight:"on",
                        fullScreenAutoWidth:"off",
                        fullScreenAlignForce:"off",
                        fullScreenOffsetContainer: "",
                        fullScreenOffset: "",
                        disableProgressBar:"off",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            nextSlideOnWindowFocus:"off",
                            disableFocusListener:false,
                        }, //fallbacks
                
        });// termina slide


		// inicia carrusel about
		 $('#myCarousel').carousel({
			interval: 0

			});
			
			var clickEvent = false;
			$('#myCarousel').on('click', '.nav a', function() {
					clickEvent = true;
					$('.nav li').removeClass('active');
					console.log('hla');
					$(this).parent().addClass('active');		
			}).on('slid.bs.carousel', function(e) {
				if(!clickEvent) {
					var count = $('.nav').children().length -1;
					var current = $('.nav li.active');
					current.removeClass('active').next().addClass('active');
					var id = parseInt(current.data('slide-to'));
					if(count == id) {
						$('.nav li').first().addClass('active');	
					}
				}
				clickEvent = false;
			});
			
			(function() {

		    var quotes = $(".quotes");
		    var quoteIndex = -1;
		    
		    function showNextQuote() {
		        ++quoteIndex;
		        quotes.eq(quoteIndex % quotes.length)
		            .fadeIn(1200)
		            .delay(1200)
		            .fadeOut(1200, showNextQuote);
		    }
		    
		    showNextQuote();
		    
		})(); // termina about

	    // Add smooth scrolling a los links
          $("a").on('click', function(event) {

            if (this.hash !== "") {
              event.preventDefault();

              var hash = this.hash;

              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
           
                window.location.hash = hash;
              });
            } 
          });


        //regresa al top page  
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        

});


