
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';
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

        <View style={styles.card}>
<Text style={styles.text} > E-mail</Text>
<TextInput style={styles.input}    />
<Text style={styles.text}> Senha</Text>
<TextInput style={styles.input}    />

        <Button style={styles.btn} title='update' color='#6a1b9a'onPress={this.btnUpdate}/>
        </View>
       
      </View>
    )
  }
}
const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    color: '#6a1b9a',
    fontSize: 32,
    textAlign: 'center',

  },

  btn: {
backgroundColor:"green",
width:'50%px',
height:'25px',
alignContent:'center',
alignItems:'flex-end'


  },
  input:{
width:'95%',
height:'40px',
borderRadius:'22px',
backgroundColor:'#6a1b9a',
marginVertical:'10px',
marginHorizontal:'5px',
color:'white',fontSize:'30'
  },
  card:{
backgroundColor:'white',
width:'70%',
height:'50%',
borderRadius:'55px'
  }


});
export default App;
