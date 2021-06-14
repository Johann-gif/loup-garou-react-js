# loup-garou-react-js

Johann DE ALMEIDA (Johann-gif / nobuuuuuu)

## · Enjeu du projet

Le but du projet était de réaliser une version du jeu "Les Loups-garous de Thiercelieux" en React JS.

Le jeu devra lancer une partie de 8 joueurs (comprenant 5 villageois, 2 loups-garous ainsi qu'une voyante).

Les phases suivantes s'enchaineront après les diverses actions des joueurs :

- Le village s'endort
- La voyante se réveille et désigne une cible à espionner puis se rendort
- Les loups-garous se réveillent et cible un villageois à tuer et se rendorment.
- Le village se réveille et constate la mort d'un joueur.
- Le village vote pour le joueur qui devra être brûlé vif.

Et ainsi de suite...

## · Librairies

> [Create React App](https://create-react-app.dev/)

> [Boardgame.io](https://boardgame.io/)

## · Lancement

Pour lancer le serveur Web permettant au client de se connecter à l'application.

> `npm run serve`

Pour lancer l'application React JS

> `npm start`

## · Abandon de la solution

Abandon de la solution boardgame.io car beaucoup d'inconnues et documentation peu détaillées.

Points de blocage :

- Nombre de joueur (par défault à 2, difficilement changeable)
- Ordonnancement des phases du jeu
- Plusieurs joueurs ne peuvent pas jouer au même tour

Impossible d'utiliser la solution pour faire un loup garou en l'état.