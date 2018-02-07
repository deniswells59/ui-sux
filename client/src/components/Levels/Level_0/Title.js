import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
	const transitions = {
		WebkitTransition: `all ${props.transition ? 0.6 : 0}s ease-out`,
		MozTransition: `all ${props.transition ? 0.6 : 0}s ease-out`,
		OTransition: `all ${props.transition ? 0.6 : 0}s ease-out`,
		transition: `all ${props.transition ? 0.6 : 0}s ease-out`
	};

	return (
		<div className="abs-center title">
			<h1>
				<span style={transitions} className={props.titleAnimation1}>
					UI
				</span>
				<span style={transitions} className={props.titleAnimation2}>
					{' '}
					/{' '}
				</span>
				<span style={transitions} className={`s ${props.spanAnimation}`}>
					{props.addLetter}
				</span>
				<span
					style={transitions}
					className={`ux ${props.titleAnimation2} ${props.marginClass}`}
				>
					UX
				</span>
			</h1>

			<p className={`subtitle ${props.subtitleAnim}`}>a web browser game</p>
		</div>
	);
};

Title.propTypes = {
	transition: PropTypes.bool.isRequired,
	titleAnimation1: PropTypes.string.isRequired,
	titleAnimation2: PropTypes.string.isRequired,
	spanAnimation: PropTypes.string.isRequired,
	addLetter: PropTypes.string.isRequired,
	marginClass: PropTypes.string.isRequired,
	subtitleAnim: PropTypes.string.isRequired
};

export default Title;
