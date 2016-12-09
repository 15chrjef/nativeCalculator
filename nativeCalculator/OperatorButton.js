import Exponent from 'exponent';
import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';
export default class OperatorButton extends React.Component {
  constructor(){
    super()
  }
  render() {
    const self = this;
    return (
      <View>
        <TouchableHighlight onPress={function(){ self.props.changeOperator(self.props.value)}} style={styles.button}>
          <Text style={styles.whiteText}>{this.props.value}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    width: 40,
    borderStyle: 'solid',
    backgroundColor: '#9575CD'
  },
  whiteText: {
    color: 'white'
  }
});