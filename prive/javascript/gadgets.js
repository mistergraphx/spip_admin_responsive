function init_gadgets(url_menu_rubrique){
	jQuery('#boutonbandeautoutsite').on('mouseover',function(){
		jQuery(this).siblings('ul').find('li:first>a').animeajax();
		jQuery.ajax({
						url: url_menu_rubrique,
						success: function(c){
							jQuery('#boutonbandeautoutsite').siblings('ul').remove();
							jQuery('#boutonbandeautoutsite')
							  .after(c)
								.parent().find('li').menuFocus();
						}
					});
	});
}
function focus_zone(selecteur){
	jQuery(selecteur).eq(0).find('a,input:visible').get(0).focus();
	return false;
}

jQuery(document).ready(function(){
	init_gadgets(url_menu_rubrique);
	var is_open = 0;
	jQuery.fn.menuItemOpen = function(){
		jQuery(this)
			.addClass('actif')
			.parents('li').addClass('actif');
		jQuery(this).siblings('li').removeClass('actif_tempo');
		is_open = true;
		return this;
	}
	jQuery.fn.menuItemClose = function(){
		jQuery(this)
			.removeClass('actif_tempo');
		is_open = (jQuery(this).parents('ul').eq(-1).find('li.actif').length>0);
		return this;
	}
	// deplier le menu au focus clavier,
	// enlever ce depliement si passage a la souris,
	// delai de fermeture.
	jQuery.fn.menuFocus = function(){
		jQuery(this)
		// le replier si un hover de souris sur un autre onglet,
		// timer sur la fermeture des onglets pour ne pas que ca aille trop vite
		// timer sur l'ouverture des onglets pour ne tolerer les derapages
		.hover(
			function(){
				
				if (this.timerout)
					clearTimeout(this.timerout);
				this.timerout = null;
				this.timerin = null;
				if (is_open)
					jQuery(this).menuItemOpen();
				else {
					var me = jQuery(this);
					this.timerin= setTimeout(function(){
						me.menuItemOpen(null);
					}, 200);
				}
			}
			,
			function(){
				if (this.timerin)
						clearTimeout(this.timerin);
				this.timerin = null;
				if (is_open){
					var me = jQuery(this).removeClass('actif').addClass('actif_tempo');
					this.timerout = setTimeout(function(){
						me.menuItemClose();
					}, 400);
				}
			}
		)	
		// navigation au clavier :
		// deplier le ul enfant
		.find('>a').focus(function(){
			//jQuery(this).parents('ul').find('>li.actif').removeClass('actif');
			jQuery(this).parents('li').addClass('actif');
		})
		// cacher en partant de l'onglet...
		.blur(function(){
			jQuery(this).parents('li').removeClass('actif');
		});
		return this;
	}

	// Controler la position verticale des sous-menus
	// pour l'instant, effectuer a chaque hover, en cas de changement de taille d'affichage par exemple
	// et uniquement en vue desktop
	var documentWidth = jQuery(window).width();
	if(documentWidth >= 1023){ // Breakpoint defini dans les css
		jQuery('#bando_navigation').hover(function(){
			hauteur = parseInt(jQuery('#bando_navigation .largeur').height())
				+  parseInt(jQuery('#bando_navigation').css("padding-top"))
				+  parseInt(jQuery('#bando_navigation').css("padding-bottom"));
			jQuery('#bando_navigation ul li>ul').css({'top':hauteur});
		});
	}
	
	// Navigation principale : Bando
	jQuery('#bando_navigation li').menuFocus();
	// desactiver le click par default pour le touch
	// sauf pour l'accueil
	jQuery('#bando_navigation ul.deroulant > li')
		.not('.first')
		.find('>a')
		.on('click',function(e){
			e.preventDefault(); // on desactive le clic
			
			// Positionnement des sou-menus
			var hauteur = '';
			var menu_item = jQuery(this);
			var icn_offset = jQuery(this).offset();
			var sub_height = jQuery(this).parent().find('> ul').height();
			
			var hauteur= -( (menu_item.innerHeight() / 2) + ( sub_height / 2));
				
			//console.log({
			//	sub : sub_height,
			//	item: menu_item.innerHeight(),
			//	top: hauteur
			//});
			
			jQuery(this).parent().find('> ul').css({'top':hauteur});

		});
	
	// OUtils rapides
	// La boussole Plan du site outils rapides
	jQuery('#bando_outils ul.bandeau_rubriques li').menuFocus();
	
	// Le sous menu est chargé en ajax au clic du coup il faut cibler en amont
	////jQuery('#bando_outils ul.bandeau_rubriques li > a').on('click',function(e){
	////	e.preventDefault;
	////	
	////	
	////	console.log(jQuery(this).find('li.haschild'));
	////	jQuery(this).find('li.haschild').on('click',function(e){
	////		e.preventDefault;
	////		return false;
	////	});
	////
	////	return false;
	////});

	
	jQuery('#bandeau_haut #formRecherche input').hover(function(){
		jQuery('#bandeau_haut ul.actif').trigger('mouseout');
	});
	jQuery('#bando_liens_rapides a')
		.focus(function(){
			jQuery('#bando_liens_rapides').addClass('actif');
		})
		.blur(function(){
			jQuery('#bando_liens_rapides').removeClass('actif');
		});
	if (typeof window.test_accepte_ajax != "undefined")
		test_accepte_ajax();
	
	//jQuery(".titrem").find(">a").not('.titremancre').on('click', function(e){
	//	e.preventDefault();
	//	//jQuery(this).find();
	//	
	//	//console.log(jQuery(this).parents());
	//});
	//
	
});
