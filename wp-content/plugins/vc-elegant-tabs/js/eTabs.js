/**
 * eTabs.js v3.2.0
 */
 ;( function( window ) {

 	'use strict';
 	function extend( a, b ) {
 		for( var key in b ) {
 			if( b.hasOwnProperty( key ) ) {
 				a[key] = b[key];
 			}
 		}
 		return a;
 	}
 	function IW_Tabs( el, options ) {
 		this.el = el;
 		this.options = extend( {}, this.options );
   		extend( this.options, options );
   		this._init();
 	}
 	IW_Tabs.prototype.options = {
 		start : 0
 	};
 	IW_Tabs.prototype._init = function() {
 		// tabs elems
 		this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
 		// content items
 		this.items = [].slice.call( this.el.querySelectorAll( '.et-content-wrap > section' ) );
 		// current index
 		this.current = -1;
 		// show current content item
 		this._show();
 		// init events
 		this._initEvents();
 	};
 	IW_Tabs.prototype._initEvents = function() {
 		var self = this;
 		this.tabs.forEach( function( tab, idx ) {
 			tab.addEventListener( 'click', function( ev ) {
 				ev.preventDefault();
 				jQuery(document).trigger("resize");
 				self._show( idx );
 			} );
 		} );
 	};
 	IW_Tabs.prototype._show = function( idx ) {
 		if( this.current >= 0 ) {
 			this.tabs[ this.current ].className = this.items[ this.current ].className = '';
 		}
 		this.tabs.forEach( function( tab, idx ) {
 			tab.className = "";
 		});
 		// change current
 		this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
 		this.tabs[ this.current ].className = 'tab-current';
 		var hash = jQuery( this.tabs[ this.current ] ).find( 'a' )[0].hash;
 		setTimeout( function(){
 			jQuery(document).trigger("elegantTabSwitched",[hash]);
 		}, 100 );
 		var anim = jQuery(this.items[ this.current ]).data('animation');
 		this.items[ this.current ].className = 'content-current';
 		jQuery( this.items[ this.current ] ).find( '.infi-content-wrapper' )[0].className = 'infi-content-wrapper animated '+anim;
 	};
 	// add to global namespace
 	window.IW_Tabs = IW_Tabs;
 })( window );

 function checkHash( hashLink ) {
 	if ( hashLink !== '' ) {
 		hash 	= hashLink.substr(hashLink.indexOf("#") );
 		if ( jQuery( hash ).length ) {
 			var animation = jQuery( hash ).data( 'animation' );
 			var tab_link = jQuery('a[href="'+hashLink+'"]').parents("ul").find('li');
 			var tabs     = jQuery(hash).parents(".et-tabs").find("section");
 			tab_link.removeClass('tab-current');
 			tab_link.each(function(index, element) {
 	      jQuery(this).removeClass('tab-current');
 	    });
 			tabs.each(function(index, element) {
 	      jQuery(this).removeClass('content-current');
 	    });
 			jQuery('a[href="'+hashLink+'"]').parent('li').addClass('tab-current');
 			jQuery( hash + ' > .infi-content-wrapper' )[0].className = 'infi-content-wrapper animated ' + animation;
 			jQuery(hash).addClass('content-current');
 			setTimeout( function(){
 				jQuery(document).trigger("elegantTabSwitched",[hash]);
 			}, 100 );
 		}
 	}
 }

 function etGenerateCSS() {
 	var css = '<style type="text/css" id="tabs-dynamic-css">';
 	[].slice.call( document.querySelectorAll( '.et-tabs' ) ).forEach( function( el ) {
 		new IW_Tabs( el );

 		var cn = el.className.split(" ");
 		var cl = '';
 		jQuery(cn).each(function(i,v){
 			cl += "."+v;
 		});
 		var st = jQuery(cl).data("tab_style");
 		var bg = jQuery(cl).data("active-bg");
 		var color = jQuery(cl).data("active-text");
 		css += cl+' .infi-tab-accordion.infi-active-tab .infi_accordion_item{background:'+bg+' !important; color:'+color+' !important;}\n';
 		css += cl+' .infi-tab-accordion.infi-active-tab .infi_accordion_item .infi-accordion-item-heading{color:'+color+' !important;}\n';
 		css += cl+' .infi-tab-accordion.infi-active-tab .infi_accordion_item .infi-accordion-item-heading .iw-icons{color:'+color+' !important;}\n';
 		switch(st){
 			case 'bars':
 				css += cl+' li.tab-current a{background:'+bg+'; color:'+color+';}\n';
 				css += cl+' nav ul li.tab-current a, '+cl+' nav ul li.tab-current a > i{color:'+color+' !important;}\n';
 				break;
 			case 'iconbox':
 				css += cl+' li.tab-current a{background:'+bg+'; color:'+color+' !important;}\n';
 				css += cl+' nav ul li.tab-current a > i{color:'+color+' !important;}\n';
 				css += cl+' nav ul li.tab-current::after{color:'+bg+';}\n';
				css += cl+' nav ul li.tab-current{color:'+bg+' !important;}\n';
 				break;
 			case 'underline':
 				css += cl+' nav ul li a::after{background:'+bg+';}\n';
 				css += cl+' nav ul li.tab-current a, '+cl+' nav ul li.tab-current a > i{color:'+color+' !important;}\n';
 				break;
 			case 'topline':
 				css += cl+' nav ul li.tab-current a{box-shadow:inset 0px 3px 0px '+bg+';}\n';
 				css += cl+' nav ul li.tab-current {border-top-color: '+color+';}\n';
 				css += cl+' nav ul li.tab-current a, '+cl+' nav ul li.tab-current a > i{color:'+color+' !important;}\n';
 				break;
 			case 'iconfall':
 			case 'circle':
 			case 'square':
 				css += cl+' nav ul li::before{background:'+bg+'; border-color:'+bg+';}\n';
 				css += cl+' nav ul li.tab-current::after { border-color:'+bg+';}\n';
 				css += cl+' nav ul li.tab-current a, '+cl+' nav ul li.tab-current a > i{color:'+color+' !important;}\n';
 				break;
 			case 'line':
 				css += cl+' nav ul li.tab-current a{box-shadow:inset 0px -2px '+bg+' !important;}\n';
 				css += cl+' nav ul li.tab-current a, '+cl+' nav ul li.tab-current a > i{color:'+color+' !important;}\n';
 				break;
 			case 'linebox':
 				css += cl+' nav ul li a::after{background:'+bg+';}\n';
 				css += cl+' nav ul li.tab-current a, '+cl+' nav ul li.tab-current a > i{color:'+color+' !important;}\n';
 				break;
 			case 'flip':
 				css += cl+' nav ul li a::after, '+cl+' nav ul li.tab-current a{background:'+bg+';}\n';
 				css += cl+' nav ul li.tab-current a, '+cl+' nav ul li.tab-current a > i{color:'+color+' !important;}\n';
 				break;
 			case 'tzoid':
 				var style = jQuery(cl + ' nav ul li').attr('style');
 				css += cl+' nav ul li a::after{'+style+';}\n';
 				css += cl+' li.tab-current a::after{background:'+bg+'; color:'+color+';}\n';
 				css += cl+' nav ul li.tab-current a, '+cl+' nav ul li.tab-current a > i{color:'+color+' !important;}\n';
 				break;
 			case 'fillup':
 				css += cl+' nav ul li.tab-current a::after{background:'+bg+';}\n';
 				css += cl+' nav ul li a::after{background:'+bg+'; border-color: '+bg+';}\n';
 				css += cl+' nav ul li.tab-current a, '+cl+' nav ul li.tab-current a > i{color:'+color+' !important;}\n';
 				css += cl+' nav ul li a {border-color:'+color+' !important;}\n';
 				break;
 		}
 		// css += cl+' li.tab-current a{background:'+bg+'; color:'+color+';}\n';

 	});
 	css += '</style>';
 	jQuery("head").append(css);
 }
 /* Call tabs function */
 (function() {

 	etGenerateCSS();

 	[].slice.call( document.querySelectorAll( '.et-mobile-enabled' ) ).forEach( function( el ) {
 		// Create the dropdown base
 		var nav = jQuery(el).find("nav");
 		jQuery("<select />", { "class":"et-mobile-tabs"}).appendTo( nav );

 		// Populate dropdown with menu items
 		nav.find("a").each(function() {
 		 var el = jQuery(this);
 		 jQuery("<option />", {
 				 "value"   : el.attr("href"),
 				 "text"    : el.text()
 		 }).appendTo(nav.find("select") );
 		});
 		nav.find( "select" ).change( function() {
 			var hashLink = jQuery( this ).find( "option:selected" ).val();
 			// jQuery( 'a[href="'+ hashLink +'"]' ).trigger( 'click' );
 			checkHash( hashLink );
 		});
 	});

 	var url 	= window.location;
 		hash 	= url.href;

 	if ( -1 !== hash.indexOf('#') ) {
 		hash = hash.replace( "/#", '#' );
 		checkHash( hash );
 	}
 	jQuery("a").click( function(e){
 		var url = jQuery(this).attr("href");
 		if( url !== "" && typeof url !== "undefined"){
 	        var isHash = url.indexOf('#section');
 	        var isTabPage = '';
 	        hash 	= url.substring(url.indexOf('#section'));
 	        if( isHash !== -1 ){
 	       		isTabPage = jQuery(hash).length;
 	       	}
 	        if( isHash !== -1 && isTabPage ) {
 	        	e.preventDefault();
 	            checkHash( hash );
 			}
 		}
 	});

 	jQuery( document ).on( "elegantTabSwitched", function( e, hash ) {
 		jQuery( hash ).parent( '.et-content-wrap' ).find( '.infi-tab-accordion' ).removeClass( 'infi-active-tab' );
 		jQuery('div[data-href="'+hash+'"]').parents( '.infi-tab-accordion' ).addClass( 'infi-active-tab' );
 	});

 	// Responsive Tabs.
 	jQuery(document).ready( function(){
 		var accHD = document.getElementsByClassName('infi-accordion-item-heading');
 		for (i = 0; i < accHD.length; i++) {
 				accHD[i].addEventListener('click', toggleItem.bind( self, i), false);
 		}
 		function toggleItem( index, event ) {
 			var $this = jQuery( event.target ),
 			    hash 	= $this.data('href'),
 					itemID,
 					animation,
 					hashLink;

 			if ( typeof hash == 'undefined' ) {
 				hash = $this.parent( '.infi-accordion-item-heading' ).data( 'href' );
 				$this = $this.parent( '.infi-accordion-item-heading' );
 			}

 			itemID = hash;
 			animation = jQuery( itemID ).data( 'animation' );

 			jQuery( itemID ).parents( '.et-tabs' ).find( 'nav > ul li').removeClass( 'tab-current' );
 			jQuery( itemID ).parent( '.et-content-wrap' ).find( 'section' ).removeClass( 'content-current' );
 			jQuery( itemID ).parent( '.et-content-wrap' ).find( '.infi-tab-accordion' ).removeClass( 'infi-active-tab' );
 			$this.parents( '.infi-tab-accordion' ).addClass( 'infi-active-tab' );

 			jQuery( itemID )[0].className = 'content-current';
 			jQuery( itemID + ' > .infi-content-wrapper' )[0].className = 'infi-content-wrapper animated ' + animation;
 			[].slice.call( document.querySelectorAll( '.et-tabs' ) ).forEach( function( el ) {
 				var Tabs = new IW_Tabs( el, { start: index } );
 			});
 			jQuery( 'html, body' ).animate( { scrollTop:( ( $this ).offset().top ) - 85 }, 300 );
 		}
 	});
 })();
