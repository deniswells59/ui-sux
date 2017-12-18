import React, { Component } from 'react';

import Title from './Title';
import CTA from './CTA';

class Level_0 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleAnimation1: '',
      titleAnimation2: '',
      spanAnimation: '',
      subtitleAnim: '',
      instrAnim: '',
      addLetter: '',
      marginClass: '',
      transition: true,
    }

    this.animationClass = 'show';
  }

  componentDidMount() {
    this.animateTitle();
  }

  animate(stateProp) {
    let newState = {};
    newState[stateProp] = this.animationClass;

    this.setState( newState );
  }

  animateTitle() {
    setTimeout(() => this.animate('titleAnimation1'), 500);  // Appear 'UI'
    setTimeout(() => this.animate('titleAnimation2'), 1100); // Appear '/ UX'

    setTimeout(() => this.setState({ marginClass: 'margin' }) , 2100); // Grow

    setTimeout(() => {
      this.setState({ transition: false }, () => { // Turn off transition
        this.setState({ marginClass: 'no-margin', addLetter: 'S' }, () => { // Kill Margin + Add 'S'
          setTimeout(() => {
            this.setState({ transition: true }, () => { // Turn on transition
              this.animate('spanAnimation');             // Appear 'S'
            })
          }, 100);
        })
      });
    }, 2900);

    setTimeout(() => this.animate('subtitleAnim'),4000); // Appear Subtitle
    setTimeout(() => this.animate('instrAnim'), 5000);   // Appear Button
  }

  render() {
    return (
      <div className='level_0'>

        <Title { ...this.state } />

        <CTA   { ...this.state } />

      </div>
    );
  };
}

export default Level_0;
