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
     
        <!-- Comments are just to fix whitespace with inline-block -->
        <div class="spinner"><!--
            --><div class="spinner-line spinner-line--1"><!--
                --><div class="spinner-line-cog"><!--
                    --><div class="spinner-line-cog-inner spinner-line-cog-inner--left"></div><!--
                --></div><!--
                --><div class="spinner-line-ticker"><!--
                    --><div class="spinner-line-cog-inner spinner-line-cog-inner--center"></div><!--
                --></div><!--
                --><div class="spinner-line-cog"><!--
                    --><div class="spinner-line-cog-inner spinner-line-cog-inner--right"></div><!--
                --></div><!--
            --></div><!--
            --><div class="spinner-line spinner-line--2"><!--
                --><div class="spinner-line-cog"><!--
                    --><div class="spinner-line-cog-inner spinner-line-cog-inner--left"></div><!--
                --></div><!--
                --><div class="spinner-line-ticker"><!--
                    --><div class="spinner-line-cog-inner spinner-line-cog-inner--center"></div><!--
                --></div><!--
                --><div class="spinner-line-cog"><!--
                    --><div class="spinner-line-cog-inner spinner-line-cog-inner--right"></div><!--
                --></div><!--
            --></div><!--
            --><div class="spinner-line spinner-line--3"><!--
                --><div class="spinner-line-cog"><!--
                    --><div class="spinner-line-cog-inner spinner-line-cog-inner--left"></div><!--
                --></div><!--
                --><div class="spinner-line-ticker"><!--
                    --><div class="spinner-line-cog-inner spinner-line-cog-inner--center"></div><!--
                --></div><!--
                --><div class="spinner-line-cog"><!--
                    --><div class="spinner-line-cog-inner spinner-line-cog-inner--right"></div><!--
                --></div><!--
            --></div><!--
            --><div class="spinner-line spinner-line--4"><!--
                --><div class="spinner-line-cog"><!--
                    --><div class="spinner-line-cog-inner spinner-line-cog-inner--left"></div><!--
                --></div><!--
                --><div class="spinner-line-ticker"><!--
                    --><div class="spinner-line-cog-inner spinner-line-cog-inner--center"></div><!--
                --></div><!--
                --><div class="spinner-line-cog"><!--
                    --><div class="spinner-line-cog-inner spinner-line-cog-inner--right"></div><!--
                --></div><!--
            --></div><!--

        --></div><!--/spinner -->
    </div>
  



	<!-- Target for scroll anchors to achieve native browser bahaviour + possible enhancements like smooth scrolling -->
	<div id="top-of-page"></div>

		<div id="mk-boxed-layout">

			<div id="mk-theme-container" <?php echo is_header_transparent('class="trans-header"'); ?>>

				<?php mk_get_header_view('styles', 'header-'.get_header_style());