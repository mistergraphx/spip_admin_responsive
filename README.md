# Interface responsive pour l'administration du cms SPIP

Plugin Thème / prototype d'interface d'administration responsive pour le cms spip.




## TODO

## CHANGELOGS

Sat Jul 23 08:52:44 2016 :

*   Import d'un premier jet pricipalement axé sur le layout et les éléments cliquables/touchables

*   On revoit la taille des éléments touchables pour qu'ils soient plus adapté aux doigts
    conformément au spec mobiles proposées dans les guidelines Google materials on se raproche d'une taille minimale de 48 x 48px (sur une densité standard).
    
    * sur les outils rapides, la taille de 16px est trop petite et oblige a zoomer pour accéder au clic.
    * sur les listes d'objet (tables),
        *   on augmente ainsi la hauteur de td, pour qu'en cas de touch drag on ne soit pas géné
        *   la taille de caractère, plus importante ainsi que le padding sur les thead, facilite ainsi l'accès au tri
 
