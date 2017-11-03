import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from "expo";// View인데 배경이 Gradient를 의미

export default class Weather extends Component{
  render(){ // LinearGradient는 color와 스타일이 필요함
    return(
      <LinearGradient
        colors={["#00C6FB", "#005BEA"]}
        style={styles.container}
      >
        <View style={styles.upper}>
          <Text>Icon here!</Text>
          <Text style={styles.temp}> 35</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining like</Text>
          <Text style={styles.subtitle}>For more info look outside</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  upper:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  temp:{
    fontSize:38,
    backgroundColor:"transparent",
    color:'white',
    marginTop:10
  },
  lower:{
    flex:1, // 모든 내용이 가운데로
    alignItems:"flex-start",
    justifyContent:'flex-end',
    paddingLeft:25
  },
  title:{
    fontSize:38,
    backgroundColor:"transparent",
    color:'white',
    marginBottom:10,
    fontWeight:'300'
  },
  subtitle:{
    fontSize:24,
    backgroundColor:"transparent",
    color:'white',
    marginBottom:24
  }
});
