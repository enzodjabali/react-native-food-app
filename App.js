import React from 'react';
import { ImageBackground, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import foodapp from './assets/foodapp.jpg';

import { NativeRouter, Routes, Route } from 'react-router-native';

import Home from './Home';
import Products from "./Products";

const App = () => {

  return (
     <NativeRouter>
    <View style={styles.container}>

      <ImageBackground source={foodapp} resizeMode="cover" style={styles.imageBackground}>
        <Text style={styles.textTitle}>Food app</Text>
      </ImageBackground>

      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
      </Routes>

      <TouchableOpacity
        onPress={<Home />}
        style={{ backgroundColor: '#D0D26C', borderRadius: 15, width: 300, height: 55, position: 'absolute', top: '80%', alignSelf: 'center' }}>
        <Text style={{ fontSize: 20, color: '#fff', padding: 10, fontSize: 25, textAlign: 'center' }}>À Table !</Text>
      </TouchableOpacity>


    </View>
    </NativeRouter>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    position: 'absolute',
    flex: 1,
    justifyContent: "center",
    width : '100%',
    height : '100%',
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

export default App;