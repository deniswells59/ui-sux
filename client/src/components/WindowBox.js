/*
  Window Container for each level

  Handles the animations of each level
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import Instructions from './Instructions';

class WindowBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			containerAnim: ''
		};

		// Sets container offset for default
		// position of draggable window
		this.containerOffset = 250;
		if (window.innerWidth <= 500) {
			this.containerOffset = window.innerWidth * 0.98 / 2;
		}

		this.animationClass = 'show';
		this.hideWindowBox = this.hideWindowBox.bind(this);
	}

	componentDidMount() {
		/*
      Show container after animations,
      Level 1 needs a little extra time
    */
		setTimeout(() => this.animate('containerAnim'), 1200);
	}

	// Reusable animation function
	animate(stateProp) {
		const newState = {};
		newState[stateProp] = this.animationClass;

		this.setState(newState);
	}

	// Hide before unmounting
	hideWindowBox() {
		this.setState({ containerAnim: 'hide ' });
	}

	render() {
		return (
			<div className="level-background">
				<Draggable
					defaultPosition={{
						x: window.innerWidth / 2 - this.containerOffset,
						y: window.innerHeight / 2 - window.innerHeight / 2
					}}
					bounds=".level-background"
					handle=".window-bar"
				>
					<div
						ref={(ref) => (this.container = ref)}
						className={`level-container ${this.state.containerAnim}`}
					>
						<div className="window-bar" />

						<Instructions
							hideWindowBox={this.hideWindowBox}
							{...this.state}
							{...this.props}
						/>

						{this.props.children}
					</div>
				</Draggable>
			</div>
		);
	}
}

WindowBox.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default WindowBox;
