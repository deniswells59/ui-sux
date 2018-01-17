import React, { Component } from 'react';

class CTA extends Component {
  render() {
    return (
      <div
        className={ `abs-center cta ${this.props.subtitleAnim}` }>

        <p
          className='intro show'>
          UI / UX stands for <span className='highlight'>User Interface / User Experience</span>. What you're about to face is
          <span className='highlight'> five</span> levels of UI that sucks. Prepare to experience the worst.
        </p>

        <button
          onClick={ () => this.props.changeLevel(1) }
          className='btn play-btn'>
          PLAY
        </button>
      </div>
    );
  }
}

export default CTA;
