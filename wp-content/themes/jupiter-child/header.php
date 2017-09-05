<!DOCTYPE html>
<html <?php echo language_attributes();?> >
<head>
    <?php wp_head(); ?>
</head>

<body <?php body_class(mk_get_body_class(global_get_post_id())); ?> <?php echo get_schema_markup('body'); ?> data-adminbar="<?php echo is_admin_bar_showing() ?>">

	<?php
		// Hook when you need to add content right after body opening tag. to be used in child themes or customisations.
		do_action('theme_after_body_tag_start');
	?>
	
	<div class="preloader-wrapper">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 110.8 132.3" style="enable-background:new 0 0 110.8 132.3;" xml:space="preserve">
        <style type="text/css">.cls-1{fill:#332A7E;}</style>
            <g id="Group_5664" transform="translate(5687 14459)">
                <g id="Group_5642" transform="translate(1038.198 664.113)">
                    <path id="Path_2455" class="cls-1" d="M-6649.4-15036.5L-6649.4-15036.5l-8-26.3c-0.5-1.3-1.1-2.6-2-3.7l-7-8.1l1.5-20.2
                        c0.1-1.4-0.3-2.8-1-4c-0.2-0.3-4.6-4.6-7.2-5.9c-1.2-0.5-2.6-0.5-3.9,0.1l-16.1,8.7c-1.1,0.7-2,1.8-2.3,3.1l-3.1,15.5l-0.2,1
                        c-0.5,2.2,0.9,4.4,3.1,4.9c0,0,0,0,0.1,0c2.3,0.4,4.5-1.2,4.8-3.5l2.7-14.2c0.2-0.8,0.7-1.5,1.3-1.9l6.1-2.9l0.4-0.2
                        c1-0.5,1.8-0.1,1.7,1.1l-1.2,16.9l-0.1,1c-0.1,1.4,0.3,2.7,1.2,3.8l14,16c0.3,0.3,0.5,0.7,0.7,1l5.1,19c0,0,0.4,1.2,0.5,1.5
                        c0.9,1.9,2.9,2.9,5,2.4l1-0.2c2.1-0.4,3.4-2.3,3.1-4.4C-6649.3-15036.2-6649.4-15036.4-6649.4-15036.5z"/>
                </g>
                <g id="Group_5643" transform="translate(1074.852 667.453)">
                    <path id="Path_2456" class="cls-1" d="M-6672.4-15102.6l-0.1-0.2c-1.1-2.1-3.7-3-5.8-2c0,0-18.3,9.4-18.8,9.7c-0.6,0.4-1,1.1-1,1.8
                        c-0.1,1-0.6,7.5-0.7,8.5s0.7,0.8,0.7,0.8l23.8-12.9C-6672.2-15097.8-6671.3-15100.4-6672.4-15102.6
                        C-6672.4-15102.5-6672.4-15102.6-6672.4-15102.6z"/>
                </g>
                <g id="Group_5644" transform="translate(1030.523 698.793)">
                    <path id="Path_2457" class="cls-1" d="M-6669.7-15099.2l-4.8-5.6c-0.3-0.4-0.9-0.5-1.3-0.2c-0.1,0.1-0.2,0.2-0.3,0.3l-21.6,30.5
                        c0,0-0.7,1.1-0.8,1.3c-0.9,1.8-0.4,4.1,1.2,5.4l0.9,0.7c1.7,1.4,4.2,1.1,5.6-0.6c0.1-0.1,0.2-0.2,0.2-0.3l0,0l21-29.6
                        C-6669.2-15097.8-6669.2-15098.6-6669.7-15099.2z"/>
                </g>
                <g id="Group_5645" transform="translate(1060.972 646.139)">

                        <ellipse id="Ellipse_57" transform="matrix(7.700477e-02 -0.997 0.997 7.700477e-02 8877.2012 -20604.0117)" class="cls-1" cx="-6689.8" cy="-15096.6" rx="8.1" ry="8.1"/>
                </g>
            </g>
            <g>
                <path class="cls-1" d="M15,117.6c0.4,1.8,0.6,3.6,0.6,3.6h0.1c0,0,0.2-1.8,0.5-3.6l1.4-6.9h3l-2.8,12.6h-4.2l-1.4-6.2
                    c-0.4-1.8-0.5-3.5-0.5-3.5h-0.1c0,0-0.1,1.8-0.5,3.6l-1.5,6.2H5.5l-2.8-12.6h3.1l1.5,6.9c0.4,1.8,0.6,3.6,0.6,3.6h0.1
                    c0,0,0.2-1.8,0.6-3.6l1.5-6.9h3.5L15,117.6z"/>
                <path class="cls-1" d="M29.3,120.6h-4.8l-0.9,2.6h-3l4.6-12.6h3.6l4.6,12.6h-3.1L29.3,120.6z M25.3,118.2h3.1l-0.5-1.4
                    c-0.7-2.1-1-3.6-1-3.6h-0.1c0,0-0.3,1.5-1,3.6L25.3,118.2z"/>
                <path class="cls-1" d="M38.1,110.6v10.1H43v2.5h-7.8v-12.6H38.1z"/>
                <path class="cls-1" d="M52.3,123.2l-3.4-5.1h-0.7v5.1h-2.9v-12.6h2.9v4.9h0.8l3.1-4.9h3.3l-4,6.1l4.4,6.5H52.3z"/>
                <path class="cls-1" d="M60.6,110.6v12.6h-2.9v-12.6H60.6z"/>
                <path class="cls-1" d="M71,116.7c0.7,1,1,1.7,1,1.7h0.1c0,0-0.1-1.1-0.1-2.7v-5.1H75v12.6h-2.7l-4.4-6c-0.8-1.1-1.2-1.9-1.2-1.9h-0.1
                    c0,0,0.1,1,0.1,2.8v5h-2.9v-12.6h2.7L71,116.7z"/>
                <path class="cls-1" d="M88.9,116.5v6.7h-1.8l-0.5-1.4c-0.6,1.1-1.9,1.7-3.5,1.7c-3.3,0-5.6-2.1-5.6-6.5c0-4.2,2.3-6.6,6.2-6.6
                    c2.5,0,4.3,1.2,5.1,3.2l-2.8,1.4c-0.4-1.3-1.3-2-2.4-2c-1.3,0-3.1,0.9-3.1,4.1c0,2.3,0.8,4.1,3.1,4.1c1.7,0,2.5-0.8,2.5-1.9v-0.4
                    h-2.7v-2.3H88.9z"/>
                <path class="cls-1 first-dot" d="M93.4,119.7c1.1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.8-1.9,1.8c-1,0-1.8-0.8-1.8-1.8
                    C91.6,120.5,92.4,119.7,93.4,119.7z"/>
                <path class="cls-1 second-dot" d="M99.6,119.7c1.1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.8-1.9,1.8c-1,0-1.8-0.8-1.8-1.8
                    C97.8,120.5,98.6,119.7,99.6,119.7z"/>
                <path class="cls-1 last-dot" d="M105.9,119.7c1.1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.8-1.9,1.8c-1,0-1.8-0.8-1.8-1.8
                    C104.1,120.5,104.9,119.7,105.9,119.7z"/>
            </g>
        </svg>
    </div>
  



	<!-- Target for scroll anchors to achieve native browser bahaviour + possible enhancements like smooth scrolling -->
	<div id="top-of-page"></div>

		<div id="mk-boxed-layout">

			<div id="mk-theme-container" <?php echo is_header_transparent('class="trans-header"'); ?>>

				<?php mk_get_header_view('styles', 'header-'.get_header_style());