import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Instructions extends Component {
	constructor(props) {
		super(props);

		this.state = {
			display: 'block',
			show: true
		};
	}

	componentWillReceiveProps(newProps) {
		// If playing level
		// Hide intstructions
		if (newProps.playing && !newProps.complete) {
			this.setState({ show: false });
			setTimeout(() => this.setState({ display: 'none' }), 600);
		}

		// If complete with level
		// Show win screen
		if (newProps.complete) {
			this.setState({ display: 'block' });
			setTimeout(() => this.setState({ show: true }), 200);
		}
	}

	nextLevel() {
		this.props.hideWindowBox();
		this.props.updateLevelNum(parseInt(this.props.level) + 1);
	}

	render() {
		return (
			<div
				style={{ display: this.state.display }}
				className={`instructions ${this.state.show ? 'show' : 'hide'}`}
			>
				<div>
					{/* If not playing */}
					{!this.props.playing && (
						<div>
							<p>{this.props.instructions}</p>
							<button
								onClick={this.props.playLevel}
								onTouchStart={this.props.playLevel}
								className="btn"
							>
								{' '}
								Ready{' '}
							</button>
						</div>
					)}

					{/* If level complete */}
					{this.props.complete && (
						<div>
							<p>{this.props.win}</p>
							<button
								onClick={() => this.nextLevel()}
								onTouchStart={() => this.nextLevel()}
								className="btn"
							>
								{' '}
								Next{' '}
							</button>
						</div>
					)}
				</div>
			</div>
		);
	}
}

Instructions.propTypes = {
	hideWindowBox: PropTypes.func.isRequired,
	updateLevelNum: PropTypes.func.isRequired,
	playLevel: PropTypes.func.isRequired,
	level: PropTypes.number.isRequired,
	playing: PropTypes.bool.isRequired,
	complete: PropTypes.bool.isRequired,
	win: PropTypes.string.isRequired,
	instructions: PropTypes.string.isRequired
};

export default Instructions;
