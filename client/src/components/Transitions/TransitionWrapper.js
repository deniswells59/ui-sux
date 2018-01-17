import React, { Component } from 'react';
import TransitionGroup  from 'react-addons-transition-group';

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class TransitionWrapper extends Component {
  render() {
    return (
      <div className='transition-wrapper'>
        <TransitionGroup
          component={firstChild}>
          { this.props.children }
        </TransitionGroup>
      </div>
    );
  }
}

export default TransitionWrapper;
