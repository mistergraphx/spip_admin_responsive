# Interface responsive pour l'administration du cms SPIP

Plugin Thème / prototype d'interface d'administration responsive pour le cms spip.

Ce plugin propose **une base de "réflexion" sur la mise en place d'une interface utilisable sur périphériques mobiles pour SPIP**.

Le plugin n'apporte principalement que des surcharges css,
basées sur les media-queries, actuellement le ciblage se fait sur les écrans  < 1025px et <780px.

*	Le layout :
	*	originalement en px utilise les %
	*	les modes `.etroit `et `.large` deviennent identiques
	*	les blocs #navigation et extra passe en 100% de large ([voir la todo](#todo)).
*	Le bando (menu principal)
	*	passe en position fixed, les icônes en liste verticales et est aligné sur la gauche de l'écran : ceci permettant un accès constant, même sur des pages a contenu long
	*	Les sous menu apparaissent au touch a droite de l'icône
*	Amélioration des éléments cliquables / touchables :  
	L'interface d'origine propose des liens/éléments d'interface de taille trop petite pour une utilisation correcte en mode touch. Les icônes des outils rapides, les listes-objets sont donc revus progressivement notamment sur le padding les entourants (cf : https://material.google.com/layout/metrics-keylines.html#metrics-keylines-touch-target-size)

## Surcharges

*   prive/javascript/gadget.js :
    pour la désactivation du clic qui perturbe en mode touch.
*   Surcharge du squelettes/inclure/head
    `<!--<meta name="viewport" content="width=device-width" />-->`
    pour
    `<meta name="viewport" content="width=device-width, initial-scale=1"/>`
    evite un problème sur le `min-width:100%` apliqué a la balise body sur les mobiles
*   surcharge de inclure/bare-nav et de son fichier fonction (rien de modifié mais provoque une erreur si on ne le duplique pas)   
    
---

**Si vous êtes intéressé, utilisez, voulez contribuer, réfléchir à ce projet :
n'hésitez pas a proposer une pull-request ou déposer une issue.**

---

## TODO

- [ ]   Dans le portfolio des objets le boutons (orienter, rotation, …) apparaissent au survol ou un clic sur le div via un onclick.
- [ ]   récupérer les icones au format svg pour les menus principaux du bando.
- [ ]   Améliorer la gestion du changement de statut dans les liste-objets
- Boussole/ Navigation rapide  
    - [X] Désactiver le clic sur la navigation rapide, comme il a été fait sur les menus du bando
    - [ ] Opter pour un select ou dropdown en mode mobile
- [ ]   Revoir les .bloc dans les #navigation, #extra, ils passent en 100% actuellement ce qui n'est pas très esthétique.
        si on est en mode .etroit dans les préférence de l'utilisateur le bloc extra est intégré a #navigation
        le mode .etroit .large n'a pas de sens en mobile ou tablet mais on peut envisager le garder pour le mode desktop
        revoir le ciblage des css avec `.large #navigation` et `.etroit #Navigation` ou suprimer depuis body.html surchargé
- [ ]   Revoir Les paginations en bas des liste/tableaux surtout en mode mobile
- [ ]   sur les `.box.simple.sous-rub` le js est en dur dans le squelette avec onClick, ce qui oblige a une surcharge.

--- 

## CHANGELOGS

**1.0.6**

-   bando_identite, bando_session :
    - on masque l'image du menu lang en mode mobile pour gagner de l'espace
    - passage en inline-block et alignement a droite de .session et .nom_site_spip en mode mobile
-   Boussole/ Navigation rapide  
    - [X] Désactiver le clic sur la navigation rapide, comme il a été fait sur les menus du bando
    
**1.0.5**

- surcharge du head pour corriger la meta viewport et forcer le scale a 1
- on réduit la taille du bando pour les mobiles
- debut de travail sur les navigation/extra


**1.0.4**

- correction sur le placement des sous-menus du bando, on centre le sous-menu sur le centre de l'item .actif. Évite que sur le menu configuration ou on as beaucoup d'items on sorte de la page.

**1.0.3**

css générées plus lisibles :

- suppression des sourcemaps
- expanded

**1.0.2**

*   [x] Corriger la désactivation du positionnement fait en js des sous-menu du bando, `window.width < breakpoint `

Sat Jul 23 08:52:44 2016 :

*   Import d'un premier jet principalement axé sur le layout et les éléments clicquables / touchables

*   On revoit la taille des éléments touchables pour qu'ils soient plus adapté aux doigts conformément au spec mobiles proposées dans les guidelines Google materials on se rapproche d'une taille minimale de 48 x 48 px (sur une densité standard).
    
    * sur les outils rapides, la taille de 16px est trop petite et oblige a zoomer pour accéder au clic.
    * sur les listes d'objet (tables),
        *   on augmente ainsi la hauteur de td, pour qu'en cas de touch drag on ne soit pas gêné
        *   la taille de caractère, plus importante ainsi que le padding sur les `thead`, facilite ainsi l'accès au tri.
 
