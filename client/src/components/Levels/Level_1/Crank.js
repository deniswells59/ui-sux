import React, { Component } from 'react';

class Crank extends Component {

  constructor(props) {
    super(props);

    this.state = {
      angle: 0,                  // Tracks current angle
      rotation: 'rotate(0deg)',  // CSS Rotation
      rotating: false,           // Rotating Bool
			pastRotations: [],
			volume: 35,
      settingVol: false,
    }

    this.radiusToDegrees = 180 / Math.PI; // Converts radius to degrees, duh

    this.setOrigin        = this.setOrigin.bind(this);
    this.initRotate       = this.initRotate.bind(this);
    this.rotate           = this.rotate.bind(this);
    this.endRotate        = this.endRotate.bind(this);
    this.getRotationAngle = this.getRotationAngle.bind(this);
    this.trackRotations 	= this.trackRotations.bind(this);
    this.setVolume 	      = this.setVolume.bind(this);
    this.addRotateEvents  = this.addRotateEvents.bind(this);
    this.endRotateEvents  = this.endRotateEvents.bind(this);
  }

  componentDidMount() {
    this.setOrigin();
  }


/* Sets origin of Rotation

  *Spoiler Alert*
   It's origin is the center, right point */
  setOrigin() {
    // Grabs important stuff from element
    let { top, left, height, width } = this.lever.getBoundingClientRect();

    let origin = {
      x: left + width,    // Right
      y: top + (height/2) // Center
    }

    this.setState({ origin });
  }

  // On Click Down
  initRotate(e) {
    console.log('down');
    let x = e.clientX - this.state.origin.x;
    let y = e.clientY - this.state.origin.y;

    this.setState({
      startAngle: this.radiusToDegrees * Math.atan2(y, x), // Tracks current angle
      rotating: true                                       // We are now rotating, people
    }, () => {
      this.addRotateEvents();
    });
  }

  // On Mouse Move
  rotate() {
    console.log('rotating');
    if(!this.state.rotating) return;
    let e = event || window.event; // IE-ism
    let rotation = this.getRotationAngle(e);

    this.setState({ rotation });
		this.trackRotations(rotation);
  }

  // On Mouse Up
  endRotate(e) {
    console.log('done');
    let rotation = this.getRotationAngle(e);

    this.setState({
      angle: rotation, // Remember where we are
      rotating: false, // Alright, no more rotating...for now
      pastRotations: [],
    });

    this.endRotateEvents();
  }

  getRotationAngle(e) {
    let x = e.clientX - this.state.origin.x; // Get x location
    let y = e.clientY - this.state.origin.y; // Get y location

  /* Gotta be honest, I'm not 100% why this works
     Wish I had paid more attention to Geometry in high school.
     On an unrelated note, wish I had taken a foreign language class too. */
    let r = this.radiusToDegrees * Math.atan2(y, x); // Figure out current angle
    let rotation = r - this.state.startAngle;        // In relation to where we started

    return this.state.angle + rotation;
  }

  addRotateEvents() {
    document.addEventListener('mousemove', this.rotate);  // Watch the rotate onClick
    document.addEventListener('mouseup', this.endRotate); // Wait until they let go
  }

  endRotateEvents() {
    document.removeEventListener('mousemove', this.rotate);
    document.removeEventListener('mouseup', this.endRotate);
  }

	trackRotations(rotation) {
		let pastRotations = this.state.pastRotations;

    // Remove one if more than 60
		if(pastRotations.length >= 60) {
			pastRotations.shift();
		}

    let smallIndex, largeIndex;
    for(let i = 0; i < pastRotations.length; i++) {
      let r = pastRotations[i];

      if(r > 0 && r < 20) {    // Record most recent that's over 0
        smallIndex = i;
      }
      if(r < 360 && r > 330) { // Record most recent that's under 360
        largeIndex = i;
      }
    }

    // REVIEW:
    // This isn't perfect!
    // Sometimes largeIndex is always undefined
    // Sometimes volume goes up twice if you move slow
    
    // console.log(largeIndex, smallIndex);
    if(largeIndex && smallIndex) {         // If we're in the sweet spot
      if(smallIndex < largeIndex) {        // Going counterclockwise
        this.setVolume(this.state.volume - 1);
      } else if(smallIndex > largeIndex) { // Going clockwise
        this.setVolume(this.state.volume + 1);
      }
    }

		pastRotations.push(rotation);
		this.setState({ pastRotations });
	}

  setVolume(volume) {
    if(this.state.settingVol) return;

    this.setState({ volume, settingVol: true });
    setTimeout(() => this.setState({ settingVol: false }), 900);
  }

  render() {
    return (
      <div className='crank'>
        <div className='base'>
          <div
            ref={ ref => this.lever = ref }
            onMouseDown={ this.initRotate }
            onTouchStart={ this.initRotate }
            className='lever'
            style={{
              transform:  `rotate(${this.state.rotation}deg)`
            }}></div>
          </div>
          <div className='handle'></div>
					<p>volume: { this.state.volume }</p>
      </div>
    );
  };
}

export default Crank;
