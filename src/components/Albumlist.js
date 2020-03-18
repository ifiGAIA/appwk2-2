import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import GEM from '../json/album.json'

const Albumlist = () => {
  return (
    <ScrollView>
    <View style={styles.Gem}>
    <View style={styles.Gem1}>
    <Image style={styles.Gemph} source = {{uri:GEM[0].img1}}
    />
    <View style={styles.Gem2}>
    <Text style={styles.gem}>{GEM[0].singer}</Text>
    <Text style={styles.gem}>{GEM[0].song}</Text>
    </View>
    </View>
    <View style={styles.gem1}>
      <Image style={styles.Gemph1} source = {{uri:GEM[0].img2}}
    />
    </View>
  </View>
  <View style={styles.Gem}>
    <View style={styles.Gem1}>
    <Image style={styles.Gemph} source = {{uri:GEM[1].img1}}
    />
    <View style={styles.Gem2}>
    <Text style={styles.gem}>{GEM[1].singer}</Text>
    <Text style={styles.gem}>{GEM[1].song}</Text>
    </View>
    </View>
    <View style={styles.gem1}>
      <Image style={styles.Gemph1} source = {{uri:GEM[1].img2}}
    />
    </View>
  </View>
  <View style={styles.Gem}>
    <View style={styles.Gem1}>
    <Image style={styles.Gemph} source = {{uri:GEM[2].img1}}
    />
    <View style={styles.Gem2}>
    <Text style={styles.gem}>{GEM[2].singer}</Text>
    <Text style={styles.gem}>{GEM[2].song}</Text>
    </View>
    </View>
    <View style={styles.gem1}>
      <Image style={styles.Gemph1} source = {{uri:GEM[2].img2}}
    />
    </View>
  </View>
  <View style={styles.Gem}>
    <View style={styles.Gem1}>
    <Image style={styles.Gemph} source = {{uri:GEM[3].img1}}
    />
    <View style={styles.Gem2}>
    <Text style={styles.gem}>{GEM[3].singer}</Text>
    <Text style={styles.gem}>{GEM[3].song}</Text>
    </View>
    </View>
    <View style={styles.gem1}>
      <Image style={styles.Gemph1} source = {{uri:GEM[3].img2}}
    />
    </View>
  </View>
  <View style={styles.Gem}>
    <View style={styles.Gem1}>
    <Image style={styles.Gemph} source = {{uri:GEM[4].img1}}
    />
    <View style={styles.Gem2}>
    <Text style={styles.gem}>{GEM[4].singer}</Text>
    <Text style={styles.gem}>{GEM[4].song}</Text>
    </View>
    </View>
    <View style={styles.gem1}>
      <Image style={styles.Gemph1} source = {{uri:GEM[4].img2}}
    />
    </View>
  </View>
  <View style={styles.Gem}>
    <View style={styles.Gem1}>
    <Image style={styles.Gemph} source = {{uri:GEM[5].img1}}
    />
    <View style={styles.Gem2}>
    <Text style={styles.gem}>{GEM[5].singer}</Text>
    <Text style={styles.gem}>{GEM[5].song}</Text>
    </View>
    </View>
    <View style={styles.gem1}>
      <Image style={styles.Gemph1} source = {{uri:GEM[5].img2}}
    />
    </View>
  </View>
  </ScrollView>
  );
};


const styles = StyleSheet.create({
    Gem:
    {
      paddingTop:30,
      paddingBottom:20,
    },
    Gem1:
    {
      paddingLeft:37.5,
      flexDirection:"row",
      
    },
    gem:
    {
      paddingTop:10,
      fontSize:20,
      color:'#fff',
      paddingLeft:10
    },
    Gem2:
    {
      flexDirection:"column",
      paddingTop:35,
    },
    gem1:
    {
      paddingTop:20,
      alignItems:"center",
      shadowColor:"#fff",
      shadowOffset:{width:0,height:0},
      shadowOpacity:1,
    },
    Gemph:
    {
      height:100,
      width:100,
    },
    Gemph1:
    {
      height:200,
      width:300,
    },
});

export default Albumlist;