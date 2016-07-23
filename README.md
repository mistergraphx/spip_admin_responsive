# Interface responsive pour l'administration du cms SPIP

Plugin Thème / prototype d'interface d'administration responsive pour le cms spip.

Ce plugin propose **une base de réflexion sur la mise en place d'une interface utilisable sur périphériques mobiles pour SPIP**.

A la différence d'autres projets similaires :

- pas de framework , 
- ni modification ou surcharge du markup

## Ça fait quoi

Le plugin n'apporte principalement que des surcharges css, basées sur les media-queries, actuellement le ciblage se fait sur les écrans  < 1025px.

*La seule surcharge actuelle a noté est prive/javascriptt/gadget.js : pour la désactivation du clic sur les items de premier niveau, qui perturbe en mode touch.*

*	Le layout :
	*	originalement en px utilise les %
	*	les modes .etroit et .large deviennent identiques
	*	les blocs #navigation et extra passeen 100% de large (voir la todo).
*	Le bando (menu principal)
	*	passe en position fixed, les icones en liste verticales et est aligné sur la gauche de l'écran : ceci permettant un accès constant, même sur des pages a contenu long
	*	Les sous menu apparaissent au touch a droite de l'icone
*	Amélioration des éléments cliquables/touchables :  
	L'interface d'origine propose des liens/éléments d'interface de taille trop petite pour une utilisation correcte en mode touch. Les icones des outils rapides, les listes-objets sont donc revus progressivement notamment sur le padding les entourants (cf : https://material.google.com/layout/metrics-keylines.html#metrics-keylines-touch-target-size)
	

---

**Si vous êtes intéressé, utilisez, voulez contribuer, réfléchir à ce projet : n'hésitez pas a proposer une pull-request ou déposer une issue.**




## TODO

*   Améliorer la gestion du changement de statut dans les liste-objets
*   Désactiver le clic sur la navigation rapide, comme il a été fait sur les menus du bando
*   Corriger la désactivation du positionnement fait en js des sous-menu du bando,
    window.width < breakpoint

*	Revoir les .bloc dans les #navigation, #extra, ils passent en 100% actuellement ce qui n'est pas très esthétique.

## CHANGELOGS

Sat Jul 23 08:52:44 2016 :

*   Import d'un premier jet pricipalement axé sur le layout et les éléments cliquables/touchables

*   On revoit la taille des éléments touchables pour qu'ils soient plus adapté aux doigts
    conformément au spec mobiles proposées dans les guidelines Google materials on se raproche d'une taille minimale de 48 x 48px (sur une densité standard).
    
    * sur les outils rapides, la taille de 16px est trop petite et oblige a zoomer pour accéder au clic.
    * sur les listes d'objet (tables),
        *   on augmente ainsi la hauteur de td, pour qu'en cas de touch drag on ne soit pas géné
        *   la taille de caractère, plus importante ainsi que le padding sur les thead, facilite ainsi l'accès au tri
 
