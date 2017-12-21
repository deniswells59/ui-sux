import React, { Component } from 'react';
import * as Animated from 'react-dom-animated';

const Slide = (WrappedComponent, opts) => class Slide
 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: new Animated.Value(1)
    };
  }

  // Coming in
  componentWillAppear(cb) {
    Animated.timing(this.state.animate, { toValue: 1, duration: opts.duration }).start();
    cb();
  }

  // Coming in
  componentWillEnter(cb) {
    setTimeout(
      () => {
        Animated.timing(this.state.animate, { toValue: 1, duration: opts.duration }).start()
      },
      500
    );

    cb();
  }

  // Coming out
  componentWillLeave(cb) {
    Animated.timing(this.state.animate, { toValue: 0, duration: opts.duration }).start();
    setTimeout(() => cb(), opts.duration );
  }

  render() {
    const style = {
      [opts.style]: Animated.template`${this.state.animate.interpolate({
      inputRange: [0, 1],
      outputRange: [opts.end, opts.start]
     })}`
    };

    return (
      <Animated.div style={style} className='animated-page-wrapper'>
        <WrappedComponent {...this.props} />
      </Animated.div>
    );
  }
};

export default Slide;
