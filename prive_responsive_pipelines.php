<?php

if (!defined('_ECRIRE_INC_VERSION')) {
	return;
}


function prive_responsive_header_prive($flux){
	$flux .= "<!-- Responsive mode -->\n";
	$flux .= '<link rel="stylesheet" href="' . _DIR_PLUGIN_PRIVE_RESPONSIVE  .'css/prive_responsive.css" type="text/css" media="all" />';
    return $flux;
}

