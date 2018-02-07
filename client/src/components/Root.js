import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Game from './Game';
import Loader from './Loader';
import TransitionWrapper from './Transitions/TransitionWrapper';

class Root extends Component {
	constructor(props) {
		super(props);

		this.renderGame = this.renderGame.bind(this);
		this.changeLevel = this.changeLevel.bind(this);
	}

	componentWillMount() {
		this.props.fetchSession();
	}

	changeLevel(levelNum) {
		this.props.updateLevelNum(levelNum);
	}

	renderGame() {
		const { loading } = this.props.session;

		return (
			<div>
				<TransitionWrapper>{loading && <Loader full />}</TransitionWrapper>

				{!loading && <Game changeLevel={this.changeLevel} {...this.props} />}
			</div>
		);
	}

	render() {
		return <div>{this.renderGame()}</div>;
	}
}

Root.propTypes = {
	fetchSession: PropTypes.func.isRequired,
	updateLevelNum: PropTypes.func.isRequired,
	session: PropTypes.shape({
		loading: PropTypes.bool.isRequired
	}).isRequired
};

export default Root;
