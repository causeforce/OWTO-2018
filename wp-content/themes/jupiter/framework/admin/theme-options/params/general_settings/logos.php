<?php
$general_section[] = array(
    "type" => "sub_group",
    "id" => "mk_options_logos_section",
    "name" => __("General / Logos Settings", "mk_framework") ,
    "desc" => __("", "mk_framework") ,
    "fields" => array(
        array(
            "name" => __("Custom Favicon", "mk_framework") ,
            "desc" => __("Upload a custom favicon. You may use <a target=\"_blank\" href=\"http://favicon.cc\">Generate Favicon</a> website.", "mk_framework") ,
            "id" => "custom_favicon",
            "default" => '',
            "type" => 'upload',
        ) ,
        array(
            "name" => __("Default & Dark Logo ", "mk_framework") ,
            "desc" => __("Upload a default logo. Only for transparent header and dark header skin.", "mk_framework") ,
            "id" => "logo",
            "default" => "",
            "type" => "upload",
        ) ,
        array(
            "name" => __("Light Logo", "mk_framework") ,
            "desc" => __("Upload a light logo. Only for transparent header and light header skin.", "mk_framework") ,
            "id" => "light_header_logo",
            "default" => "",
            "type" => "upload",
        ) ,
        array(
            "name" => __("Sticky Header Logo", "mk_framework") ,
            "desc" => __("Upload a logo for sticky header.", "mk_framework") ,
            "id" => "sticky_header_logo",
            "default" => "",
            "type" => "upload",
        ) ,
        array(
            "name" => __("Mobile Version Logo", "mk_framework") ,
            "desc" => __("Upload a logo for small devices. It is helpful when the default logo is big.", "mk_framework") ,
            "id" => "responsive_logo",
            "default" => "",
            "type" => "upload",
        ) ,
        array(
            "name" => __("Sub Footer Logo", "mk_framework") ,
            "desc" => __("Upload a logo for sub footer section. The image should not exceed 150x60 pixels.", "mk_framework") ,
            "id" => "footer_logo",
            "default" => "",
            "type" => "upload",
        ) ,
        array(
            "name" => __("Apple iPhone Icon", "mk_framework") ,
            "desc" => __("Upload an icon for Apple iPhone (57x57 pixels).", "mk_framework") ,
            "id" => "iphone_icon",
            "default" => '',
            "type" => 'upload',
        ) ,
        array(
            "name" => __("Apple iPhone Retina Icon", "mk_framework") ,
            "desc" => __("Upload an icon for Apple iPhone Retina Version (114x114 pixels).", "mk_framework") ,
            "id" => "iphone_icon_retina",
            "default" => '',
            "type" => 'upload',
        ) ,
        array(
            "name" => __("Apple iPad Icon Upload", "mk_framework") ,
            "desc" => __("Upload an icon for Apple iPhone (72x72 pixels).", "mk_framework") ,
            "id" => "ipad_icon",
            "default" => '',
            "type" => 'upload',
        ) ,
        array(
            "name" => __("Apple iPad Retina Icon Upload", "mk_framework") ,
            "desc" => __("Upload an icon for Apple iPad Retina Version (144x144 pixels).", "mk_framework") ,
            "id" => "ipad_icon_retina",
            "default" => '',
            "type" => 'upload',
        ) ,
    ) ,
);