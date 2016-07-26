# Interface responsive pour l'administration du cms SPIP

Plugin Thème / prototype d'interface d'administration responsive pour le cms spip.

Ce plugin propose **une base de "réflexion" sur la mise en place d'une interface utilisable sur périphériques mobiles pour SPIP**.

A la différence d'autres projets similaires :

- Pas de framework , 
- Pas de modification ou surcharge du markup

## Ça fait quoi

Le plugin n'apporte principalement que des surcharges css, basées sur les media-queries, actuellement le ciblage se fait sur les écrans  < 1025px.

*La seule surcharge actuelle a noté est prive/javascriptt/gadget.js : pour la désactivation du clic sur les items de premier niveau, qui perturbe en mode touch.*

*	Le layout :
	*	originalement en px utilise les %
	*	les modes `.etroit `et `.large` deviennent identiques
	*	les blocs #navigation et extra passe en 100% de large ([voir la todo](#todo)).
*	Le bando (menu principal)
	*	passe en position fixed, les icônes en liste verticales et est aligné sur la gauche de l'écran : ceci permettant un accès constant, même sur des pages a contenu long
	*	Les sous menu apparaissent au touch a droite de l'icône
*	Amélioration des éléments cliquables / touchables :  
	L'interface d'origine propose des liens/éléments d'interface de taille trop petite pour une utilisation correcte en mode touch. Les icônes des outils rapides, les listes-objets sont donc revus progressivement notamment sur le padding les entourants (cf : https://material.google.com/layout/metrics-keylines.html#metrics-keylines-touch-target-size)

---

## C'est fait comment

Plutôt que de faire des grand dessins et des explications, souvent  je préfère "prototyper directement dans le navigateur web", il est vrai que c'est du "quick & dirty", mais ce n'est généralement pas fait pour durer ou finir en l'état.

Les css sont rédigées et compilées avec sass, elle ne sont pas dans le dépôt pour le moment, si vous souhaitez apporter une amélioration, ou souhaitez participer, je peut les ajouter.

**Pré-requis / libs** :

- libsass
- bourbon
- susy
- include-media

---

**Si vous êtes intéressé, utilisez, voulez contribuer, réfléchir à ce projet : n'hésitez pas a proposer une pull-request ou déposer une issue.**


---

## TODO

- [ ] récupérer les icones au format svg pour les menus principaux du bando.
- [ ] Améliorer la gestion du changement de statut dans les liste-objets
- [ ] Désactiver le clic sur la navigation rapide, comme il a été fait sur les menus du bando
- [ ] Revoir les .bloc dans les #navigation, #extra, ils passent en 100% actuellement ce qui n'est pas très esthétique.
- [ ] sur les `.box.simple.sous-rub` le js est en dur dans le squelette avec onClick, ce qui oblige a une surcharge.

--- 

## CHANGELOGS

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
 
