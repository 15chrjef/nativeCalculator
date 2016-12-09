import Exponent from 'exponent';
import React from 'react';
import Button from './Button'
import OperatorButton from './OperatorButton'
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');


class App extends React.Component {
  constructor() {
    super()
    this.appendNum = this.appendNum.bind(this);
    this.changeOperator = this.changeOperator.bind(this);
    this.state = {
      number: 0,
      operation: '+'
    }
  }
  changeOperator(newOperator){
    this.setState({
      operation: newOperator
    })
  }
  appendNum(newNumber) {
    this.setState({
      number:  eval(`${this.state.number} ${this.state.operation} newNumber`)  
    })
  }
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.calculatorContainer}>
          <View style={styles.value}>
            <Text>{this.state.number}</Text>
          </View>
          <View style={styles.buttonRow}>
            <Button appendNum={this.appendNum} value={1}/>
            <Button appendNum={this.appendNum} value={2}/>
            <Button appendNum={this.appendNum} value={3}/>
          </View>
          <View style={styles.buttonRow}>
            <Button appendNum={this.appendNum} value={4}/>
            <Button appendNum={this.appendNum} value={5}/>
            <Button appendNum={this.appendNum} value={6}/>
          </View>
          <View style={styles.buttonRow}>
            <Button appendNum={this.appendNum} value={7}/>
            <Button appendNum={this.appendNum} value={8}/>
            <Button appendNum={this.appendNum} value={9}/>
          </View>
          <View style={styles.buttonRow}>
            <OperatorButton changeOperator={this.changeOperator} value={'+'}/>
            <OperatorButton changeOperator={this.changeOperator} value={'-'}/>
            <OperatorButton changeOperator={this.changeOperator} value={'*'}/>
            <OperatorButton changeOperator={this.changeOperator} value={'/'}/>
          </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'black', 
    shadowOffset: {width:2, height:2},
    shadowOpacity: .5,
    shadowRadius: 2,
    backgroundColor: '#E0F7FA'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
  },
  value: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 2,
    borderWidth: 1,
    borderStyle: 'solid',
    width: width * .3,
  }
});

Exponent.registerRootComponent(App);
