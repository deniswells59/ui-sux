/*
  Crank.js

  It's the crank, yo.
  Holds all the rotating logic for Level 1.
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Crank extends Component {
	constructor(props) {
		super(props);

		this.state = {
			angle: 20, // Tracks current angle
			rotation: 20, // CSS Rotation
			rotating: false, // Rotating Bool
			pastRotations: [],
			volume: 35,
			settingVol: false
		};

		this.radiusToDegrees = 180 / Math.PI; // Converts radius to degrees, duh

		this.setOrigin = this.setOrigin.bind(this);
		this.initRotate = this.initRotate.bind(this);
		this.rotate = this.rotate.bind(this);
		this.endRotate = this.endRotate.bind(this);
		this.getRotationAngle = this.getRotationAngle.bind(this);
		this.trackRotations = this.trackRotations.bind(this);
		this.setVolume = this.setVolume.bind(this);
		this.addRotateEvents = this.addRotateEvents.bind(this);
		this.endRotateEvents = this.endRotateEvents.bind(this);
	}

	componentDidMount() {
		this.setOrigin();
	}

	componentWillUnmount() {
		this.endRotateEvents();
	}

	/* Sets origin of Rotation

  *Spoiler Alert*
   It's origin is the center, right point */
	setOrigin() {
		// Grabs important stuff from element
		const { top, left, height, width } = this.lever.getBoundingClientRect();
		const offsetHeight = height / 2;
		const origin = {
			x: left + width, // Right
			y: top + offsetHeight // Center
		};

		this.setState({ origin });
	}

	getRotationAngle(e) {
		const x = (e.clientX || e.touches[0].clientX) - this.state.origin.x; // Get x location
		const y = (e.clientY || e.touches[0].clientY) - this.state.origin.y; // Get y location

		/* Gotta be honest, I'm not 100% why this works
     Wish I had paid more attention to Geometry in high school.
     On an unrelated note, wish I had taken a foreign language class too. */
		const r = this.radiusToDegrees * Math.atan2(y, x); // Figure out current angle
		const rotation = r - this.state.startAngle; // In relation to where we started

		return this.state.angle + rotation;
	}

	setVolume(volume) {
		if (this.state.settingVol) return;

		this.setState({ volume, settingVol: true }, () => {
			if (volume >= 38) this.props.levelComplete();
		});
		setTimeout(() => this.setState({ settingVol: false }), 900);
	}

	addRotateEvents() {
		document.addEventListener('mousemove', this.rotate); // Watch the rotate onClick
		document.addEventListener('mouseenter', this.rotate); // Watch the rotate onClick
		document.addEventListener('mouseup', this.endRotate); // Wait until they let go
		document.addEventListener('touchmove', this.rotate);
		document.addEventListener('touchend', this.endRotate);
	}

	endRotateEvents() {
		document.removeEventListener('mousemove', this.rotate);
		document.removeEventListener('mouseenter', this.rotate);
		document.removeEventListener('mouseup', this.endRotate);
		document.removeEventListener('touchmove', this.rotate);
		document.removeEventListener('touchend', this.endRotate);
	}

	trackRotations(rotation) {
		const { pastRotations } = this.state;

		// Remove one if more than 60
		if (pastRotations.length >= 40) {
			pastRotations.shift();
		}

		let smallIndex, largeIndex;

		for (let i = 0; i < pastRotations.length; i + 1) {
			const r = Math.abs(pastRotations[i]);

			if (r > 0 && r < 20) {
				// Record most recent that's over 0
				smallIndex = i;
			}
			if (r < 360 && r > 345) {
				// Record most recent that's under 360
				largeIndex = i;
			}
		}
		// console.log(smallIndex);
		// console.log(largeIndex);
		// REVIEW:
		// This isn't perfect!
		// Sometimes largeIndex is always undefined
		// Sometimes volume goes up twice if you move slow

		if (largeIndex && smallIndex) {
			// If we're in the sweet spot
			if (smallIndex < largeIndex) {
				// Going counterclockwise
				this.setVolume(this.state.volume - 1);
			} else if (smallIndex > largeIndex) {
				// Going clockwise
				this.setVolume(this.state.volume + 1);
			}
		}

		pastRotations.push(rotation);
		this.setState({ pastRotations });
	}

	// On Mouse Up
	endRotate(e) {
		const rotation = this.getRotationAngle(e);

		this.setState({
			angle: rotation, // Remember where we are
			rotating: false, // Alright, no more rotating...for now
			pastRotations: []
		});

		this.endRotateEvents();
	}

	// On Click Down
	initRotate(e) {
		const x = (e.clientX || e.touches[0].clientX) - this.state.origin.x;
		const y = (e.clientY || e.touches[0].clientY) - this.state.origin.y;

		this.setState(
			{
				startAngle: this.radiusToDegrees * Math.atan2(y, x), // Tracks current angle
				rotating: true // We are now rotating, people
			},
			() => {
				this.addRotateEvents();
			}
		);
	}

	// On Mouse Move
	rotate() {
		if (!this.state.rotating) return;
		const e = window.event;
		const rotation = this.getRotationAngle(e);

		this.setState({ rotation });
		this.trackRotations(rotation);
	}

	render() {
		return (
			<div className="crank">
				<div className="base">
					<div
						ref={(ref) => (this.lever = ref)}
						onMouseDown={this.initRotate}
						onTouchStart={this.initRotate}
						className="lever"
						style={{
							transform: `rotate(${this.state.rotation}deg)`
						}}
					/>
				</div>
				<div className="handle" />
				<p>Volume: {this.state.volume}</p>
			</div>
		);
	}
}

Crank.propTypes = {
	levelComplete: PropTypes.func.isRequired
};

export default Crank;
