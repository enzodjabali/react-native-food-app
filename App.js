import React, { Component } from 'react';

import { NativeRouter, Routes, Route } from 'react-router-native';

import Welcome from './src/containers/Welcome'
import Home from './src/containers/Home';
import Products from "./src/containers/Products";

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Routes>
          <Route exact path='/' element={<Welcome />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
        </Routes>
      </NativeRouter>
    );
  }
}
export default App;