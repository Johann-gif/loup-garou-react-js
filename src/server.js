const Server = require("boardgame.io/server").Server;
const LoupGarou = require("./game").LoupGarou;
const server = Server({ games: [LoupGarou] });
server.run(8000);