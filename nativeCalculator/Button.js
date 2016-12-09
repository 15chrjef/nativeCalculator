import Exponent from 'exponent';
import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

export default class Button extends React.Component {
  constructor(){
    super()
  }
  render() {
    const self = this;
    return (
      <View>
        <TouchableHighlight onPress={function(){ self.props.appendNum(self.props.value)}} style={styles.button}>
          <Text style={styles.grayText}>{this.props.value}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: width * .1,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: '#3F51B5'
  },
  grayText: {
    color: 'white'
  }
});