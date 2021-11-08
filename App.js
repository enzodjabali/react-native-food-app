import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import foodapp from './assets/foodapp.jpg';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

import { NativeRouter, Routes, Route } from 'react-router-native';

import Home from './Home';
import Products from "./Products";

const App = () => {

  // const goToAbout = () => {
  //   Actions.about()
  // }

  let pictureTxt = "No photo selected yet";
  let picture;
  let share;

  // const image = { uri: foodapp };

  // const ImageBackground = () => (
  //   <View style={styles.container}>
  //     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
  //       <Text style={styles.text}>Inside</Text>
  //     </ImageBackground>
  //   </View>
  // );

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }
      setSelectedImage({ localUri: pickerResult.uri });
    };

    // Share

    let openShareDialogAsync = async () => {
      if (Platform.OS === 'web' || !(await Sharing.isAvailableAsync())) {
        alert(`Uh oh, sharing isn't available on your platform`);
        return;
      }
  
      await Sharing.shareAsync(selectedImage.localUri);
    };
    ///


    if (selectedImage !== null) {
      pictureTxt = "Photo selected:";
      picture = selectedImage.localUri;
      share = openShareDialogAsync;


      // return (
      //   <View style={styles.container}>
      //     <Image
      //       source={{ uri: selectedImage.localUri }}
      //       style={styles.thumbnail}
      //     />

          
      //   </View>
        
      // );


    }

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
           

      {/* <Text style={styles.textStyle}>This is the moon</Text>
      <Text style={styles.textStyle2}>{pictureTxt}</Text> */}

      <Image
         source={{ uri: picture }}
          style={styles.thumbnail}
      />

      {/* <TouchableOpacity 
        onPress={share}
        style={{ backgroundColor: 'grey', borderRadius: 10 }}>
        <Text>Share this photo</Text>
      </TouchableOpacity> */}

      {/* <Image source={moon} style={styles.moon} /> */}

      {/* <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'grey', borderRadius: 10 }}>
        <Text style={{ fontSize: 20, color: '#fff', padding: 10 }}>Alert</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
      //   onPress={goToAbout}
        style={{ backgroundColor: '#D0D26C', borderRadius: 15, width: 300, height: 55, position: 'absolute', top: '80%', alignSelf: 'center' }}>
        <Text style={{ fontSize: 20, color: '#fff', padding: 10, fontSize: 25, textAlign: 'center' }}>À Table !</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>
    </NativeRouter>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgba(255,0,0, 0.10)'
    // backgroundColor: '#BBBBBB',
    // ImageBa:`url(${asstes/moon.png})`,
    // ImageBackground: 'assets/moon.png',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    // backgroundColor: "#000000c0"
  },

  textStyle: {
    color: 'white',
    marginBottom: 10,
  },
  textStyle2: {
    color: 'yellow',
  },

  moon: {
    width: 205, 
    height: 200,
  },

  thumbnail: {
    width: 300,
    height: 200,
    resizeMode: "contain"
  }
});

export default App;



// import 'react-native-gesture-handler';

// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './HomeScreen';
// import FriendsScreen from './FriendsScreen';

// const Stack = createStackNavigator();

// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//          <NavigationContainer>
//             <Stack.Navigator>
//                <Stack.Screen
//                   name="Home"
//                   component={HomeScreen}
//                />
//                <Stack.Screen
//                   name="Friends"
//                   component={FriendsScreen}
//                />
//             </Stack.Navigator>
//          </NavigationContainer>
//         <Text>Welcome to MySocialNetwork!</Text>

//         <Button
//           title="Add some friends"
//           onPress={ navigate('Friends') }
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;