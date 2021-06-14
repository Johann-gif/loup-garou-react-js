import React, { Component } from 'react';

class Chat extends Component {
  state = { message: '' };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.message) {
      this.props.props.sendChatMessage(this.state.message);
      this.setState({
        message: '',
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    const allMessages = this.props.props.chatMessages;
    const lastTenMessages = allMessages.slice(
      Math.max(allMessages.length - 10, 0)
    );
    const heroID = this.props.handID;

    return (
      <div id="chat">
        <div id="chat-top">
          {lastTenMessages.map((msg, index) => (
            <div
              className={`message-wrapper ${
                msg.sender === heroID ? 'hero-message' : 'villain-message'
              }`}
              key={'msg-' + index}
            >
              <p className="sender" key={'sender-' + index}>
                {(msg.sender === heroID ? 'Vous: ' : this.props.props.G.players[msg.sender].name+': ')}
                {msg.payload}
              </p>
            </div>
          ))}
        </div>
        <form id="chat-bottom" onSubmit={this.handleSubmit}>
          <input
            maxLength="42"
            type="text"
            spellCheck="false"
            id="enter-message"
            autoComplete="off"
            placeholder="Ecrivez quelque chose"
            value={this.state.message}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Chat;