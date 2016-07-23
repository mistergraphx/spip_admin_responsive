# Interface responsive pour l'administration du cms SPIP

Plugin Thème / prototype d'interface d'administration responsive pour le cms spip.

Ce plugin propose **une base de réflexion sur la mise en place d'une interface utilisable sur périphériques mobiles pour SPIP**.

Le plugin n'apporte principalement que des surcharges css, basées sur les media-queries, actuellement le ciblage se fait sur les écrans de < 1025px.

A la différence d'autres projets similaires :
- pas de framework , 
- ni modification ou surcharge du markup




**Si vous êtes intéressé, utilisez, voulez contribuer, réfléchir à ce projet : n'hésitez pas a proposer une pull-request ou déposer une issue.**




## TODO

*   Améliorer la gestion du changement de statut dans les liste-objets
*   Désactiver le clic sur la navigation rapide, comme il a été fait sur les menus du bando
*   Corriger la désactivation du positionnement fait en js des sous-menu du bando,
    window.width < breakpoint

## CHANGELOGS

Sat Jul 23 08:52:44 2016 :

*   Import d'un premier jet pricipalement axé sur le layout et les éléments cliquables/touchables

*   On revoit la taille des éléments touchables pour qu'ils soient plus adapté aux doigts
    conformément au spec mobiles proposées dans les guidelines Google materials on se raproche d'une taille minimale de 48 x 48px (sur une densité standard).
    
    * sur les outils rapides, la taille de 16px est trop petite et oblige a zoomer pour accéder au clic.
    * sur les listes d'objet (tables),
        *   on augmente ainsi la hauteur de td, pour qu'en cas de touch drag on ne soit pas géné
        *   la taille de caractère, plus importante ainsi que le padding sur les thead, facilite ainsi l'accès au tri
 
