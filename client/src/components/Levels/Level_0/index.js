import React, { Component } from 'react';

class Level_0 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleAnimation: '',
      aAnimation: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ titleAnimation: 'show' });
    }, 500);

    setTimeout(() => {
      this.setState({ sAnimation: 'show' });
    }, 1200);
  }

  render() {
    return (
      <div className='level_0'>

        <div className='abs-center'>

            <h1 className={ this.state.titleAnimation }>
              UI / <span className={ this.state.sAnimation }>S</span>UX
            </h1>

        </div>

      </div>
    );
  };
}
export default Level_0;
