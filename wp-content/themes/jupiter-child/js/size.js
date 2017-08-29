$(document).ready(function () {
    
    var windowSize = $(window).width();
    
     // Window Size greater than 782
     if (windowSize > 782) {
         // Sticky Side Nav Area 
        $("ul.mk-tabs-tabs, .e-tab-container>nav, .as-team-nav, .company-nav").stick_in_parent({offset_top: 150});

        $('ul.mk-tabs-tabs, .programs-tabs-link-column, .as-team-nav, .company-nav').on('sticky_kit:bottom', function(e) {
        $(this).parent().css('position', 'static');
        }) 
        $('ul.mk-tabs-tabs, .programs-tabs-link-column, .as-team-nav, .company-nav').on('sticky_kit:unbottom', function(e) {
        $(this).parent().css('position', 'relative');
        });
         
         
        $('.safety-accordion-section, .outfitters-accordion-section').addClass('vc_active');
        // ON SCROLL HIDE LOGO ON SPLASH PAGE
        $(window).scroll(function() {
           if ($(this).scrollTop() > 100 ) {
               $('.page-template-template-splash>div>div>header>div>div>div>div>a>.mk-desktop-logo.dark-logo').fadeOut('slow');
           } else {
               $('.page-template-template-splash>div>div>header>div>div>div>div>a>.mk-desktop-logo.dark-logo').fadeIn('slow');
           } 
        });
    } else {
        // Click function for accordion toggle only if window is below 782px 
        $('.vc_tta-panel-heading').click(function () {
            $('.vc_tta-panel-body').not(this).slideUp('slow');
            $(this).next('.vc_tta-panel-body').slideToggle('slow');
            $('span.vc_tta-title-text').not(this).removeClass('minus');
            $('span.vc_tta-title-text', this).toggleClass('minus');
        });
        $('.mobile-nav-tab-container-header>div>div>div>.vc_tta-panel-body').hide();
        // Click function for Tab into Accordion to toggle content //
        $('.title-mobile').click(function (e) {
            e.preventDefault();
            $(this).next('.mk-tabs-pane-content').slideToggle('slow');
            $('.title-mobile').not(this).addClass('display-none');   
            $('.title-mobile').toggleClass('display-none');
        });
        $('.mobile-nav-tab-container').append(jQuery('.mk-tabs-tabs, .programs-tabs-link-column'));
        // Sticky Nav 
        $(".e-tab-container>nav>select").trigger("sticky_kit:detach");
        
        // Ambassador Levels to have award info for mobile
        var awardsBronze = '.awards-one p, .awards-two p';
        var awardsSilver = '.awards-one p, .awards-two p, .awards-three p';
        var awardsGold = '.awards-one p, .awards-two p, .awards-three p, .awards-four p';
        var awardsPlat = '.awards-one p, .awards-two p, .awards-three p, .awards-four p, .awards-five p';
        
         // Variable to hold all the levels
        var allLevels = '.ambassador-bronze, .ambassador-silver, .ambassador-gold, .ambassador-platinum';
        
        $('<h4 class="amb-awards">Awards:</h4>').appendTo(allLevels);
        $(awardsBronze).clone().appendTo('.ambassador-bronze');
        $(awardsSilver).clone().appendTo('.ambassador-silver');        
        $(awardsGold).clone().appendTo('.ambassador-gold');
        $(awardsPlat).clone().appendTo('.ambassador-platinum');
        
        $('.awards-rec-title').parent('.levels-header').css('display', 'none');
        
        var allTitles = '.bronze-title, .silver-title, .gold-title, .platinum-title';
        
        $(allTitles).addClass('plusTitle');
        
        // Function to hide all of the levels on initial load for mobile
        function hideLevels(levelsClass) {
            $(levelsClass).children('p').css('display', 'none');
        };
        // Call on the hideLevels() function
        hideLevels(allLevels);
        
        // Function to make levels an accordion on click
        function levelsClick() {
            $(allLevels).on('click', function() {
                $(this).children('p, .amb-awards').slideToggle('normal'); 
            });
        };
        // Call on levelsClick() function with allLevels variable included
        levelsClick(this);
        
        // Function to make levels title turn from plus to minus and vice versa
        function levelsTitleClick(elementClass) {
            $(elementClass).on('click', function() {
               $(this).toggleClass('minusTitle'); 
            });
        };
        // Call function with the correct classes to avoid all from getting same class
        levelsTitleClick('.bronze-title');
        levelsTitleClick('.silver-title');
        levelsTitleClick('.gold-title');
        levelsTitleClick('.platinum-title');
        
        // OneStop page, shorten text
        $('.icon-column-container:nth-child(2) h2').text('Support');
    }
    
    // Window Size 1140
    if (windowSize > 1140) {
        // OneWalk Header Append Purple Notification Ribbon
        $('header').append('<div class="header-ribbon"><h3>One Powerful Community. One Powerful Challenge.  September 7-8, 2018</h3></div>');
    } else {
        // Add Overlay to page body elements
        $('#mk-theme-container').prepend('<div class="mobile-overlay"></div>');
        
        // Mobile Menu Scripts, Add Mobile Image Class
        var mobileButtons = $('.menu-button-links').not('.no-mega-menu');
        $('.header-logo>a>img').addClass('.mobile-img');
        $('ul.mk-responsive-nav').prepend(mobileButtons);
        
        // Mobile Menu Overlay Function
        $('.mk-css-icon-menu').on('click', function(){
           if ( $('.mk-nav-responsive-link').hasClass('is-active') ) {
                $('.mobile-overlay').fadeOut('fast');
            } else {
                $('.mobile-overlay').fadeIn('fast');
            } 
        });
        
        // Append French/English Button for Montreal in mobile
//        var languageButtons = $('.french-btn, .english-btn').not('.no-mega-menu');
//        $('ul.mk-responsive-nav').append(languageButtons);
    }
    
});