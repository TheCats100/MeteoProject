import React from 'react';
import { Animated } from 'react-native';

export default class FadeInView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pan: new Animated.ValueXY({ x: 200, y: 0 })
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.pan, {
      duration: 3000,
      toValue: { w: 0, y: 0 },
      useNativeDriver: true
    }
    ).start()
  }

  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          tranform: this.state.pan.getTranslateTransform
        }}>
        {this.props.children}
      </Animated.View>
    )
  }

}