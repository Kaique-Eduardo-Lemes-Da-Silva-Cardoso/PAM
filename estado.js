
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';
import Algo from './components/algo';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FN: "Jack",
      LN: "Sparrow",
    };

    this.btnUpdate= this.btnUpdate.bind(this);
  }


 btnUpdate(){

  this.setState({
    FN: "Joana",
    LN: "Drack",
  });
}


  render() {
    return (
      <View style={styles.conteiner}>
        <Button style={styles.btn} title='update' color='#6a1b9a'onPress={this.btnUpdate}/>

        <Text style={styles.text}>
          {this.state.FN}{this.state.LN}
        </Text>
        <Algo nome = "app props"/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent:'center'
  },
  text: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',

  },

  btn: {
backgroundColor:"green",
width:'50%px',
height:'25px',
alignContent:'center',


  },


});
export default App;
