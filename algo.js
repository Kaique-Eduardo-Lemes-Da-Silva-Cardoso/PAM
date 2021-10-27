import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';
class algo extends Component{
render(){
return(
    <View>
        <Text style={styles.tm}>
 {this.props.nome}
        </Text>
    </View>
)
}


}
const styles = StyleSheet.create({
tm:{
    color:'white',fontSize:50
}

})
export default algo;