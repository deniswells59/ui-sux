import React from 'react';
import PropTypes from 'prop-types';

const CTA = (props) => (
	<div className={`abs-center cta ${props.subtitleAnim}`}>
		<p className="intro show">
			UI / UX stands for{' '}
			<span className="highlight">User Interface / User Experience</span>.
			{"What you're about to face is"}
			<span className="highlight"> five</span> levels of UI that sucks. Prepare
			to experience the worst.
		</p>

		<button onClick={() => props.changeLevel(1)} className="btn play-btn">
			PLAY
		</button>
	</div>
);

CTA.propTypes = {
	subtitleAnim: PropTypes.string.isRequired,
	changeLevel: PropTypes.func.isRequired
};

export default CTA;
