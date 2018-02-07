import React from 'react';
import PropTypes from 'prop-types';

import Transition from './Transitions/Transition';

const Loader = (props) => (
	<div className={props.full ? 'loader-container' : 'loader-wrapper'}>
		<div className="loader" />
	</div>
);

Loader.propTypes = {
	full: PropTypes.bool.isRequired
};

const transitionOpts = {
	style: 'top',
	start: '0px',
	end: `-${window.innerHeight}px`,
	duration: 1400
};

export default Transition(Loader, transitionOpts);
