/*===========================================================*/
/*	Waypoints Interaction
/*===========================================================*/
$(document).ready(function(){

	$('#portfolio').waypoint(function(event, direction) {
	   if (direction === 'down') {
	   }
	   else {
	   		
	   }
	});

	$('.filter-off').waypoint(function(event, direction) {
	   if (direction === 'down') {
	   }
	   else {
	   }
	});
});
/*===========================================================*/
/*	Stick Navigation & Separators
/*===========================================================*/

$(document).ready(function(){

		var containerW = $('.container').width();
		$('.carousel_testimonials li').css('width',containerW);

		$("#navigation").sticky({topSpacing:0});
		
		$("ul#menu").click(function(){
			if( $("ul#menu li").css('display') != 'inline' ){
				if($("ul#menu").hasClass('showmenu')) {
        			$("ul#menu").removeClass('showmenu');
					$("ul#menu li").css('display','none');
    			} else {
					$("ul#menu").addClass('showmenu');
        			$("ul#menu li").css('display','block');
    			}
			}
		});
		
		$(window).resize(function() {
			if( $(window).width() >= 960 ){
				if( $("ul#menu li").css('display' ) == 'none' )
					$("ul#menu li").css('display','inline');
			}
			else{
				$("ul#menu li").css('display','none');
			}
		});
		
	});
	
	
$(document).ready(function(){
		
		//.parallax(xPosition, speedFactor, outerHeight) options:
		//xPosition - Horizontal position of the element
		//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
		//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
		$('.separator1-bg').parallax("50%", 0.2);
		$('.separator2-bg').parallax("50%", 0.2);
		$('.separator3-bg').parallax("50%", 0.2);
		$('.separator4-bg').parallax("100%", 0.1);
		
		
		$('#navigation ul').localScroll(1000);
	});
	
	


/*===========================================================*/
/*	Full screen slider
/*===========================================================*/	
	
 $(function(){
            $('#maximage').maximage({
                cycleOptions: {
                    fx: 'fade',
                    speed: 1000, 
                    timeout: 4000,
                    prev: '#arrow_left',
                    next: '#arrow_right',
                    pause: 1,
     
                },
                onFirstImageLoaded: function(){
                    jQuery('#cycle-loader').hide();
                    jQuery('#maximage').slideDown('slow');
                }
				
            });
    
            // Helper function to Fill and Center the HTML5 Video
            jQuery('video,object').maximage('maxcover');
    
            // To show it is dynamic html text
            jQuery('.in-slide-content').delay(1200).slideDown(2000);
        });	
	
	
	
/*===========================================================*/
/*	Colorbox
/*===========================================================*/	
	
$(document).ready(function(){
	//Examples of how to assign the ColorBox event to elements
	$(".group1").colorbox({rel:'group1',
		transition:"fade",
		speed: 1700, 
		onComplete:function(){
			$('.flexslider').flexslider({
			animation: "slide",
			controlNav: false,
			directionNav: true,

		  });
		}
	});		
});
			
			
			
/*===========================================================*/
/*	Portfolio Isotope
/*===========================================================*/				
$(window).load(function(){

        var $container = $('.portfolio');
        $container.isotope({
            filter: '*',
			animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
				
            }
        });
    
        $('nav.primary a').click(function(){
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
          return false;
        });
    
        var $optionSets = $('nav.primary'),
               $optionLinks = $optionSets.find('a');
         
               $optionLinks.click(function(){
                  var $this = $(this);
              // don't proceed if already selected
              if ( $this.hasClass('selected') ) {
                  return false;
              }
           var $optionSet = $this.parents('nav.primary');
           $optionSet.find('.selected').removeClass('selected');
           $this.addClass('selected'); 
        });
    
    });
	
	
	
/*===========================================================*/
/*	Google Map
/*===========================================================*/		
function initialize() {

            var latlng = new google.maps.LatLng(41.517832,-8.493118);
            var settings = {
                zoom: 12,
                center: latlng,
                mapTypeControl: false,
				scrollwheel: false,
                mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
                navigationControl: false,
                navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                mapTypeId: google.maps.MapTypeId.ROADMAP};
            var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
			
            var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h2 id="firstHeading" class="firstHeading">We are here</h2>'+
                '<div id="bodyContent">'+
                '<p>Have a nice visit!</p>'+
                '</div>'+
                '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            
            var companyImage = new google.maps.MarkerImage('images/marker.png',
                new google.maps.Size(58,63),<!-- Width and height of the marker -->
                new google.maps.Point(0,0),
                new google.maps.Point(35,20)<!-- Position of the marker -->
            );
    
            
    
            var companyPos = new google.maps.LatLng(41.517832,-8.493118);
    
            var companyMarker = new google.maps.Marker({
                position: companyPos,
                map: map,
                icon: companyImage,               
                title:"We are here",
                zIndex: 3});
            
            
            
            google.maps.event.addListener(companyMarker, 'click', function() {
                infowindow.open(map,companyMarker);
            });
        }					
		
/*===========================================================*/
/*	Automatically Highlights Navigation Item
/*===========================================================*/

function calculateScroll() {

	var topRange = 400;
	var contentTop		=	[];
	var contentBottom	=	[];
	var winTop		=	$(window).scrollTop();

		//rangeTop is used for changing the class a little sooner that reaching the top of the page
		//rangeBottom is similar but used for when scrolling bottom to top
		var rangeTop	=	500;
		var rangeBottom	=	500;

		$('#navigation').find('a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top );
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})

		$.each( contentTop, function(i){

			if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
				$('#navigation li')
				.removeClass('current')
				.eq(i).addClass('current');
			}

		})
	}

	$(document).ready(function() {

		calculateScroll()

		$(window).scroll(function(event) {

			calculateScroll();

		});

	});
	
	
	
/*===========================================================*/
/*	Carousel
/*===========================================================*/
$(function() {

            

            //	Scrolled by user interaction
            $('#milestones-carousel').carouFredSel({
                auto: false,
				width: '100%',
				prev : {
	       			button      : "#prev2",
	        		key         : "left",
	        		items       : 1,
	        		duration    : 750
	    			},
				next : {
					button      : "#next2",
					key         : "right",
					items       : 1,
					duration    : 750
				},				
                mousewheel: false,
                swipe: {
                    onMouse: false,
                    onTouch: true
                }
            });
			
			
			$('#testimonials-carousel').carouFredSel({
                auto: true,
				prev : {
	       			button      : "#prev",
	        		key         : "left",
	        		items       : 1,
	        		duration    : 750
	    			},
				next : {
					button      : "#next",
					key         : "right",
					items       : 1,
					duration    : 750
				},
				
                mousewheel: false,
                swipe: {
                    onMouse: false,
                    onTouch: true
                }
            });
        });
	




