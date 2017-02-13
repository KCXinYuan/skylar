import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import ChatLog from '../components/chat_log';

class ChatRoom extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchChat();
	}

	render() {
		return (
			<ChatLog messages={this.props.chat} />
		);
	}
}

function mapStateToProps({ chat }) {
	return { chat };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);