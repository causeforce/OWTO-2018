$(document).ready(function () {
    
    // Impact page move accordion into Tab
    $('.faqs_accordion_row').appendTo('#section-impact-tab-01');
    
    // OneWalk Header Append Purple Notification Ribbon
    $('header').append('<div class="header-ribbon"><h3>ONE DAY. ALL CANCERS.  -  SEPTEMPER 9, 2017</h3></div>');
    
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
    
    
    // Fifth Footer Widget
    $('.footer-wrapper .mk-padding-wrapper div:nth-child(5)').removeClass('mk-col-1-6');
    $('.footer-wrapper .mk-padding-wrapper div:nth-child(5)').addClass('mk-col-1-8');
    // Sixth Footer Widget
    $('.footer-wrapper .mk-padding-wrapper div:nth-child(6)').removeClass('mk-col-1-6');
    $('.footer-wrapper .mk-padding-wrapper div:nth-child(6)').addClass('mk-col-1-5');
    
    // Accordion to change into minus on click
    $('.vc_tta-panel-heading').click(function(){
       var collapsed=$(this).find('i').hasClass('fa-plus');

        $('.vc_tta-icon').removeClass('fa-minus');

        $('.vc_tta-icon').addClass('fa-plus');
        if(collapsed){
            $('.vc_tta-icon',this).toggleClass('fa-plus fa-minus');
        }
    });
    
    var footerTopDiv = '<div class="first-footer-row"><div class="mk-col-1-4"><img src="/wp-content/themes/jupiter-child/img/princess_logo.svg"></div><div class="mk-col-1-4"><img src="/wp-content/themes/jupiter-child/img/campbell_logo.svg"></div><div class="mk-col-1-4 rexall-column"><p class="partners">Title Partner</p><img src="/wp-content/themes/jupiter-child/img/rexall_logo.svg"></div><div class="mk-col-1-4 cibc-column"><p class="partners">Founding Partner</p><img src="/wp-content/themes/jupiter-child/img/cibc_logo.svg"></div></div>';
    
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
    $(".more-less-text-french>p").shorten({
        "showChars" : 170,
        "moreText"	: "Lire la suite",
        "lessText"	: "Réduire",
    });
});