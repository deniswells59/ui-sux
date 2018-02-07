import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Questions extends Component {
	constructor(props) {
		super(props);

		this.state = {
			holding: 5
		};

		this.isHolding = this.isHolding.bind(this);
		this.timeReached = this.timeReached.bind(this);
		this.clearInterval = this.clearInterval.bind(this);
		this.isNotSure = this.isNotSure.bind(this);
	}

	isHolding() {
		this.setState({
			interval: setInterval(() => {
				this.setState({ holding: (this.state.holding -= 1) }, () => {
					if (this.state.holding <= 0) this.timeReached();
				});
			}, 1000)
		});
	}

	timeReached() {
		this.clearInterval();
		this.props.userIs('sure');
		this.props.levelComplete();
	}

	clearInterval() {
		clearInterval(this.state.interval);
	}

	isNotSure() {
		this.props.userIsNot('accepting');
		this.setState({ holding: 8 });
	}

	render() {
		return (
			<div className="tos-questions">
				<hr />
				<div className="tos-button-wrapper">
					<button
						disabled={this.props.accepting}
						onClick={() => this.props.userIs('accepting')}
					>
						Accept & Continue
					</button>
					<button
						disabled={this.props.accepting}
						onClick={this.props.scrollToTop}
						className="right"
					>
						Scroll To Top
					</button>

					{this.props.accepting && (
						<div>
							<p>Are you sure?</p>
							<p>
								(Press and hold for{' '}
								{this.state.holding >= 0 ? this.state.holding : 0} seconds.)
							</p>
							<button onClick={this.isNotSure}>No</button>
							<button
								onMouseDown={this.isHolding}
								onMouseUp={this.clearInterval}
								className="right"
							>
								Yes
							</button>
						</div>
					)}
				</div>
			</div>
		);
	}
}

Questions.propTypes = {
	accepting: PropTypes.bool.isRequired,
	userIs: PropTypes.func.isRequired,
	userIsNot: PropTypes.func.isRequired,
	scrollToTop: PropTypes.func.isRequired,
	levelComplete: PropTypes.func.isRequired
};

export default Questions;
