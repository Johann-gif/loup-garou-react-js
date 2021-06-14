/*function IsVictory(cells) {
//todo
// Les Villageois gagnent
// Les Loups-Garous gagnent
// 
  }*/
  
  export const LoupGarou = {
    name: "LoupGarou",
  
    setup: () => ({
      players: [
        {
          name: 'Joueur 1',
          role: 'Villageois',
          image: "https://www.regledujeu.fr/wp-content/uploads/simple-villageois.png",
          enVie: true,
        },
        {
          name: 'Joueur 2',
          role: 'Loup Garou',
          image: "https://www.regledujeu.fr/wp-content/uploads/loup-garou-1.png",
          enVie: true,
        },
        {
          name: 'Joueur 3',
          role: 'Voyante',
          image: "https://www.regledujeu.fr/wp-content/uploads/voyante-1.png",
          enVie: true,
        },
        {
          name: 'Joueur 4',
          role: 'Villageois',
          image: "https://www.regledujeu.fr/wp-content/uploads/simple-villageois.png",
          enVie: true,
        },
        {
          name: 'Joueur 5',
          role: 'Loup Garou',
          image: "https://www.regledujeu.fr/wp-content/uploads/loup-garou-1.png",
          enVie: true,
        },
        {
          name: 'Joueur 6',
          role: 'Villageois',
          image: "https://www.regledujeu.fr/wp-content/uploads/simple-villageois.png",
          enVie: true,
        },
        {
          name: 'Joueur 7',
          role: 'Villageois',
          image: "https://www.regledujeu.fr/wp-content/uploads/simple-villageois.png",
          enVie: true,
        },
        {
          name: 'Joueur 8',
          role: 'Villageois',
          image: "https://www.regledujeu.fr/wp-content/uploads/simple-villageois.png",
          enVie: true,
        }]
    }),
  
    moves: {
      clickCell(G, ctx, id) {
        if (G.players[id].enVie === true) {
          G.players[id].enVie = false;
        }
      }
    },
  
    turn: { moveLimit: 1 },
  
    endIf: (G, ctx) => {
      if (G.players.filter(function (c) { return c.role === "Villageois" && c.enVie === true}).length === 0) {
        return { draw: true };
      }
      if (G.players.filter(function (c) { return c.role === "Loup Garou" && c.enVie === true}).length === 0) {
        return { draw: true };
      }
    },

    /*phases: {
      village_s_endort: {
        moves: { DrawCard },
      },
  
      appel_voyante: {
        moves: { PlayCard },
      },

      appel_loups_garous: {
        moves: { PlayCard },
      },

      village_se_reveille: {
        moves: { DrawCard },
      },

      vote: {
        moves: { DrawCard },
      },
    },*/
  };
  