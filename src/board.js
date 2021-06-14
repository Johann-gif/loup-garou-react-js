import React from 'react';
import PropTypes from 'prop-types';
import './board.css';

export class LoupGarouBoard extends React.Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
  };

  onClick = id => {
    if (this.isActive(id)) {
      this.props.moves.clickCell(id);
    }
  };

  isActive(id) {
    if (!this.props.isActive) return false;
    if (this.props.G.players[id].enVie !== true) return false;
    return true;
  }

  render() {
    let tbody = [];
    let players = [];
    console.log("Villageois", this.props.G.players.filter(function (c) { return c.role === "Villageois" && c.enVie === true}).length)
    console.log("Villageois", this.props.G.players.filter(function (c) { return c.role === "Villageois" && c.enVie === true}))
    console.log("Loups Garous", this.props.G.players.filter(function (c) { return c.role === "Loup Garou" && c.enVie === true}).length)
    console.log("Loups Garous", this.props.G.players.filter(function (c) { return c.role === "Loup Garou" && c.enVie === true}))
    console.log("En vie", this.props.G.players.filter(function (c) { return c.enVie === true}))
    console.log("Villageois", this.props.G.players.filter(function (c) { return c.role === "Villageois"}))
    console.log("Loup Garou", this.props.G.players.filter(function (c) { return c.role === "Loup Garou"}))
    for (let i = 0; i < 8; i++) {
      console.log(this.props.G.players[i].name, this.props.G.players[i].role, this.props.G.players[i].enVie)
      
      players.push(
          <td
            key={i}
            className={this.isActive(i) ? 'active' : ''}
            onClick={() => this.onClick(i)}
          >
            {this.props.G.players[i].name}
          </td>
        );
    }
    tbody.push(<tr key="0">{players}</tr>);

    let winner = null;
    if (this.props.ctx.gameover) {
      winner =
      this.props.G.players.filter(c => c.role === "Loup Garou" && c.enVie === true).length === 0 ? (
          <div id="winner">Winner: Villageois</div>
        ) : (
            <div id="winner">Winner: Loup Garou</div>
          );
    }
    let stats = [];
    for (let j = 0; j < 3; j++){
      stats.push(
        <div id="stat">
          <img src={this.props.G.players[j].image} alt={this.props.G.players[j].role} width="100%"/>
          <p>{this.props.G.players.filter(c => c.role === this.props.G.players[j].role && c.enVie === true).length}</p>
        </div>
      )
    }

    return (
      <div>
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
        {winner}
        <div>{stats}</div>
      </div>
    );
  }
}