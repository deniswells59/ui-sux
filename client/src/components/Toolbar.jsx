import React, { Component } from 'react';
import LevelSelect from './LevelSelect.jsx'

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toolbarAnim: '',
      toolbarAnim: '',
    }

    this.animationClass = 'show';

    this.animateToolbar = this.animateToolbar.bind(this);
  }

  componentDidMount() {
    this.animateToolbar();
  }

  animateToolbar() {
    setTimeout(() => this.animate('toolbarAnim'), 1600);
  }

  animate(stateProp) {
    let newState = {};
    newState[stateProp] = this.animationClass;

    this.setState( newState );
  }

  render() {
    return (
      <div className={`toolbar ${this.state.toolbarAnim}`}>
        <LevelSelect {...this.state} {...this.props} />
      </div>
    );
  };
}
export default Toolbar;
