import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback } from 'react-native';

const Header = () => {
  return (
    
   
      <View style={styles.headd}>
        <Image  style={styles.headdd} source= {require('../img/漢堡.png')}/>
      <View style={styles.headd1}>
      <Text style={styles.header}> Albums </Text>
      </View>
      </View>
    
    
  );
};


const styles = StyleSheet.create({
    headd:
    {
      backgroundColor:"#8F0000",
      // justifyContent:"center",
      // alignItems:"center",
      borderRadius:6,
      shadowColor:"#fff",
      shadowOffset:{width:0,height:2},
      shadowOpacity:1,
      height:100,
      // width:360,
      paddingTop:10,
      flexDirection:"row",
      
    },
    header:
    {
      fontSize:20,
      color:"#fff",
     
    },
    headdd:
    {
      width:70,
      height:70,
      marginTop:10
    },
    headd1:
    {
      justifyContent:"center",
      alignItems:"center",
      paddingLeft:80

    }
});

export default Header;