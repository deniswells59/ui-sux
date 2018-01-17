import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className={ this.props.full ? 'loader-container' : 'loader-wrapper'}>
        <div className='loader'></div>
      </div>
    );
  };
}
export default Loader;
