import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from './Toolbar';
import Board from './Board';

const Game = (props) => (
	<div className="game">
		{props.session.data.level > 0 && <Toolbar {...props} />}
		<Board {...props} />
	</div>
);

Game.propTypes = {
	session: PropTypes.shape({
		data: PropTypes.shape({
			level: PropTypes.number.isRequired
		}).isRequired
	}).isRequired
};
export default Game;
