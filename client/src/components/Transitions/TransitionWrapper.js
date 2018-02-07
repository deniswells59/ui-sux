import React from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-addons-transition-group';

const firstChild = (props) => {
	const childrenArray = React.Children.toArray(props.children);
	return childrenArray[0] || null;
};

const TransitionWrapper = (props) => (
	<div className="transition-wrapper">
		<TransitionGroup component={firstChild}>{props.children}</TransitionGroup>
	</div>
);

TransitionWrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default TransitionWrapper;
