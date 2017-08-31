$(document).ready(function () {
    
    // On Scroll hide ribbon
    $(window).scroll(function() { 
        if ($(document).scrollTop() > 50) {
            $('.header-ribbon').slideUp(300);
        } else {
            $('.header-ribbon').slideDown(300);
        }
    });
    
    // OneWalk Dynamically Set Color of Header Title per Border-bottom color  
    function slantedTitleColorSwitcher(elementID) {
        if ($(elementID).hasClass('pink-header-pg-row')) {
            $('.slanted-title h1').css('background', '#EC008A');
            $('.slanted-left').css('border-bottom-color', '#EC008A');
        } else if ($(elementID).hasClass('orange-header-pg-row')) {
            $('.slanted-title h1').css('background', '#F47920');
            $('.slanted-left').css('border-bottom-color', '#F47920');
        } else if ($(elementID).hasClass('purple-header-pg-row')) {
            $('.slanted-title h1').css('background', '#923a96');
            $('.slanted-left').css('border-bottom-color', '#923a96');
        } else if ($(elementID).hasClass('blue-header-pg-row')) {
            $('.slanted-title h1').css('background', '#00BAF2');
            $('.slanted-left').css('border-bottom-color', '#00BAF2');
        } else if ($(elementID).hasClass('indigo-header-pg-row')) {
            $('.slanted-title h1').css('background', '#332A7E');
            $('.slanted-left').css('border-bottom-color', '#332A7E');
        }
    };
    
    slantedTitleColorSwitcher('#programs-header');
    slantedTitleColorSwitcher('#slanted-header');

    // OneWalk Ambassador Columns to match height per resonsive
//    $('.ambassador-levels-column').each(function() {
//        var tallestBox = 0;
//        $('.ambassador-bronze').each(function() {
//           if($(this).height() > tallestBox) {
//              tallestBox = $(this).height(); 
//            } 
//        });
//        $('.lvl-description', this).height(tallestBox);
//    });
    
    // OneWalk FAQ Page
    $('.vc_tta-title-text').on('click', function() {
        $(this).addClass('active-link');
        $('.vc_tta-title-text').not(this).removeClass('active-link');
    });
    $('.vc_tta-icon').on('click', function() {
        $(this).siblings('.vc_tta-title-text').addClass('active-link');
        $('.vc_tta-icon').not(this).siblings('.vc_tta-title-text').removeClass('active-link');
    });
    $('.vc_tta-panel-title a').on('click', function() { 
        $(this).children('.vc_tta-title-text').addClass('active-link');
        $('.vc_tta-panel-title a').not(this).children('.vc_tta-title-text').removeClass('active-link');
    });

    // OneWalk Crews and Volunteer Page insert Accordion after Faq Title
    $('.crews-faqs_accordion_row').insertAfter('.faq-title');
    
    // Impact page move accordion into Tab
    $('.faqs_accordion_row').appendTo('#section-impact-tab-01');
    
    // AS A TEAM NAV ACTIVE CLASS
    function firstActive(firstChild, className) {
        $(firstChild).addClass(className);
    }
    firstActive('.as-team-nav div:first-child h4 a', 'active-orange');
    firstActive('.company-nav div:first-child h4 a', 'active-green');
    
    function changeActiveClass(elements, className) {
        $(elements).on('click', function() {
            $(elements).not(this).removeClass(className);
            $(this).addClass(className);
        });
    }
    
    changeActiveClass('.company-nav h4 a', 'active-green');
    changeActiveClass('.as-team-nav h4 a', 'active-orange');
    
    // Accordion to change into minus on click
    $('.vc_tta-panel-heading').click(function(){
       var collapsed=$(this).find('i').hasClass('fa-plus');

        $('.vc_tta-icon').removeClass('fa-minus');

        $('.vc_tta-icon').addClass('fa-plus');
        if(collapsed){
            $('.vc_tta-icon',this).toggleClass('fa-plus fa-minus');
        }
    });
    // Partners Ribbon above Footer
    var footerTopDiv = '<div class="footer-ribbon-container"><div class="first-footer-row"><div class="mk-col-1-4"><img src="/wp-content/themes/jupiter-child/img/princess_logo.svg"></div><div class="mk-col-1-4"><img src="/wp-content/themes/jupiter-child/img/campbell_logo.svg"></div><div class="mk-col-1-4 rexall-column"><p class="partners">Title Partner</p><img src="/wp-content/themes/jupiter-child/img/rexall_logo.svg"></div><div class="mk-col-1-4 cibc-column"><p class="partners">Founding Partner</p><img src="/wp-content/themes/jupiter-child/img/cibc_logo.svg"></div></div></div>';
    
    $('#mk-footer').prepend(footerTopDiv);
    
}); // END Document Ready

// BEGIN Window Load Function
$(window).on("load",function(){
    //Preload to FadeOut on Load
    $('div.spinner').fadeOut('slow');
    $('.preloader-wrapper').css('display', 'none');

    // View More or Less Plugin for Text
   (function($) {
        $.fn.shorten = function (settings) {

            var config = {
                showChars: 100,
                ellipsesText: "...",
                moreText: "more",
                lessText: "less"
            };

            if (settings) {
                $.extend(config, settings);
            }

            $(document).off("click", '.morelink');

            $(document).on({click: function () {

                    var $this = $(this);
                    if ($this.hasClass('less')) {
                        $this.removeClass('less');
                        $this.html(config.moreText);
                    } else {
                        $this.addClass('less');
                        $this.html(config.lessText);
                    }
                    $this.parent().prev().toggle();
                    $this.prev().toggle();
                    return false;
                }
            }, '.morelink');

            return this.each(function () {
                var $this = $(this);
                if($this.hasClass("shortened")) return;

                $this.addClass("shortened");
                var content = $this.html();
                if (content.length > config.showChars) {
                    var c = content.substr(0, config.showChars);
                    var h = content.substr(config.showChars, content.length - config.showChars);
                    var html = c + '<span class="moreellipses">' + config.ellipsesText + ' </span><span class="morecontent"><span>' + h + '</span> <a href="#" class="morelink">' + config.moreText + '</a></span>';
                    $this.html(html);
                    $(".morecontent span").hide();
                }
            });

        };

     })(jQuery);
    // Class with options for More/Less Text
    $(".more-less-text>p").shorten({
        "showChars" : 170,
        "moreText"	: "See More",
        "lessText"	: "Show Less",
    });
});