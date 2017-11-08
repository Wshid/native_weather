import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from "expo";// View인데 배경이 Gradient를 의미
import {Ionicons} from "@expo/vector-icons"; // Ionicons 로드
import PropTypes from "prop-types";

const weatherCases={
  Rain:{ // 색상, 제목, 아이콘
    colors:["#00C6FB", "#005BEA"],
    title:'Raining like',
    subtitle:"For more into look outside",
    icon:'ios-rainy'
  },
  Clear:{
    colors:["#FEF253", "#FF7300"],
    title:'Sunny',
    subtitle:"Go around outside",
    icon:'ios-sunny'
  },
  Thunderstorm:{
    colors:["#00ECBC", "#007ADF"],
    title:'Thunderstorm in the house',
    subtitle:"Actually, outside of the house",
    icon:'ios-thunderstorm'
  },
  Clouds:{
    colors:["#D7D2CC", "#304352"],
    title:'Clouds',
    subtitle:"I know, It's Boring",
    icon:'ios-cloudy'
  },
  Snow:{
    colors:["#7DE2FC", "#B9B6E5"],
    title:'SnowSnow',
    subtitle:"Do you want to build a snowman?",
    icon:'ios-snow'
  },
  Drizzle:{
    colors:["#89F7FE", "#66A6FF"],
    title:'Drizzle',
    subtitle:"It like rain",
    icon:'ios-rainy-outline'
  }
};

function Weather({weatherName, temp}){ //stateless 컴포넌트 만들기
  console.log({weatherName});
  return(
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}> {temp}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes={
  temp:PropTypes.number.isRequired,
  weatherName:PropTypes.string.isRequired
};

export default Weather;

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  upper:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"transparent" // 배경색을 투명으로 해야 아이콘이 출력됨
  },
  temp:{
    fontSize:48,
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
