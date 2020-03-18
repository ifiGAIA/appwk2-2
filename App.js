import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback } from 'react-native';

import Header from './src/components/Header';
import Albumlist from './src/components/Albumlist';

const App = () => {
  return (
    <View style={styles.container}>

      <Header/>

      <Albumlist/>

    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#000',
    
  },
  
 

});
export default App;