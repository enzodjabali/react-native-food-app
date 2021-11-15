import React, { Component } from 'react';
import { ImageBackground, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import foodapp from '../../assets/foodapp.jpg';

import { Link } from 'react-router-native';



class Welcome extends Component {
  render() {
    return (

      <View style={styles.container}>

        <ImageBackground source={foodapp} resizeMode="cover" style={styles.imageBackground}>
          <Text style={styles.textTitle}>Food app</Text>
        </ImageBackground>


        <TouchableOpacity
          style={{ backgroundColor: '#D0D26C', borderRadius: 15, width: 300, height: 55, position: 'absolute', top: '80%', alignSelf: 'center' }}>
          <Link
            to="/Home"
            underlayColor="#f0f4f7">
            <Text style={{ fontSize: 20, color: '#fff', padding: 10, fontSize: 25, textAlign: 'center' }}>À Table !</Text>
          </Link>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    position: 'absolute',
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  textTitle: {
    marginBottom: 70,
    color: "white",
    fontSize: 50,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Welcome;