import React, { Component } from 'react';

import Message from './message';

class ChatLog extends Component {
	constructor(props) {
		super(props);
	}

	renderMessages() {
		let tempArray = [];
		for (var data in this.props.messages) {
			tempArray.push(
				<Message message={this.props.messages[data]} />
			);
		}
		return tempArray;
	}

	render() {
		if (!this.props.messages) {
			return (
				<div></div>
			);
		}
		return (
			<div>
				{this.renderMessages()}
			</div>
		);
	}
}

export default ChatLog;