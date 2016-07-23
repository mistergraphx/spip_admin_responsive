<?php

if (!defined('_ECRIRE_INC_VERSION')) {
	return;
}


function prive_responsive_header_prive($flux){
	$flux .= "<!-- Responsive mode -->\n";
	$flux .= '<link rel="stylesheet" href="' . _DIR_PLUGIN_PRIVE_RESPONSIVE  .'css/prive_responsive.css" type="text/css" media="all" />';
    return $flux;
}

function prive_responsive_formulaire_charger ($flux) {
	if ($flux['args']['form'] == 'configurer_preferences'){
        
		//$flux['data']['_polices'] = polpriv_polices(); // polices normales
		//$flux['data']['_polices_fontface'] = polpriv_polices_fontface(); // polices fontface
		//$flux['data']['police_prive'] = isset($GLOBALS['visiteur_session']['prefs']['police_prive'])?$GLOBALS['visiteur_session']['prefs']['police_prive']:'';
		//// inserer dans la page les styles de toutes les polices fontface (et pas dans la feuille de style)
		//include_spip('inc/polpriv');
		//if ($familles = polpriv_familles_polices_fontface())
		//	$flux['data']['_style_fontface'] .= polpriv_generer_style_polices_fontface($familles);
	}
	return $flux;
}

// On passe par verifier pour ajouter la police a visiteur_session avant que le formulaire ne soit traite.
function prive_responsive_formulaire_verifier ($flux) {
	if ($flux['args']['form'] == 'configurer_preferences'){
		//if ($police_prive = _request('police_prive')) {
		//	$GLOBALS['visiteur_session']['prefs']['police_prive'] = ($police_prive=='defaut') ? '' : $police_prive;
		//}
	}
	return $flux;
}

function prive_responsive_recuperer_fond ($flux) {
	if ($flux['args']['fond'] == 'formulaires/configurer_preferences'){
        //var_dump($flux);
		//$polpriv = recuperer_fond('prive/inclure/configurer_police_prive', $flux['args']['contexte']);
		//$flux['data']['texte'] = preg_replace('%(<!--extra-->)%is', $polpriv.'$1', $flux['data']['texte']);
	}

	return $flux;
}

?>