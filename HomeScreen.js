// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>You have (undefined) friends.</Text>

//         <Button
//           title="Add some friends"
//           onPress={() =>
//             this.props.navigation.navigate('Friends')
//           }
//         />
//       </View>
//     );
//   }
// }

// // ...
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

// export default HomeScreen;

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { ImageBackground, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import foodapp from './assets/foodapp.jpg';
// import * as ImagePicker from 'expo-image-picker';
// import * as Sharing from 'expo-sharing';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// // import uploadToAnonymousFilesAsync from 'anonymous-files'; 
// // import { Actions } from 'react-native-router-flux';

// const MyStack = () => {
//    return (
//      <NavigationContainer>
//        <Stack.Navigator>
//          <Stack.Screen
//            name="App"
//            component={AppScreen}
//            options={{ title: 'Welcome' }}
//          />
//          <Stack.Screen name="Profile" component={ProfileScreen} />
//        </Stack.Navigator>
//      </NavigationContainer>
//    );
// };

// const HomeScreen = ({ navigation }) => {
//    return (
//      <Button
//        title="Go to Jane's profile"
//        onPress={() =>
//          navigation.navigate('Profile', { name: 'Jane' })
//        }
//      />
//    );
//  };
//  const ProfileScreen = ({ navigation, route }) => {
//    return <Text>This is {route.params.name}'s profile</Text>;
// };

// const App = () => {

//   // const goToAbout = () => {
//   //   Actions.about()
//   // }

//   let pictureTxt = "No photo selected yet";
//   let picture;
//   let share;

//   // const image = { uri: foodapp };

//   // const ImageBackground = () => (
//   //   <View style={styles.container}>
//   //     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//   //       <Text style={styles.text}>Inside</Text>
//   //     </ImageBackground>
//   //   </View>
//   // );

//   const [selectedImage, setSelectedImage] = React.useState(null);

//   let openImagePickerAsync = async () => {
//     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//       alert("Permission to access camera roll is required!");
//       return;
//     }

//     let pickerResult = await ImagePicker.launchImageLibraryAsync();
//     console.log(pickerResult);

//     if (pickerResult.cancelled === true) {
//       return;
//     }
//       setSelectedImage({ localUri: pickerResult.uri });
//     };

//     // Share

//     let openShareDialogAsync = async () => {
//       if (Platform.OS === 'web' || !(await Sharing.isAvailableAsync())) {
//         alert(`Uh oh, sharing isn't available on your platform`);
//         return;
//       }
  
//       await Sharing.shareAsync(selectedImage.localUri);
//     };
//     ///


//     if (selectedImage !== null) {
//       pictureTxt = "Photo selected:";
//       picture = selectedImage.localUri;
//       share = openShareDialogAsync;


//       // return (
//       //   <View style={styles.container}>
//       //     <Image
//       //       source={{ uri: selectedImage.localUri }}
//       //       style={styles.thumbnail}
//       //     />

          
//       //   </View>
        
//       // );


//     }

//   return (
//     <View style={styles.container}>
//       <NavigationContainer>

//       <ImageBackground source={foodapp} resizeMode="cover" style={styles.imageBackground}>
//         <Text style={styles.textTitle}>Food app</Text>
//       </ImageBackground>

//       {/* <Text style={styles.textStyle}>This is the moon</Text>
//       <Text style={styles.textStyle2}>{pictureTxt}</Text> */}

//       <Image
//          source={{ uri: picture }}
//           style={styles.thumbnail}
//       />

//       {/* <TouchableOpacity 
//         onPress={share}
//         style={{ backgroundColor: 'grey', borderRadius: 10 }}>
//         <Text>Share this photo</Text>
//       </TouchableOpacity> */}

//       {/* <Image source={moon} style={styles.moon} /> */}

//       {/* <TouchableOpacity
//         onPress={() => alert('Hello, world!')}
//         style={{ backgroundColor: 'grey', borderRadius: 10 }}>
//         <Text style={{ fontSize: 20, color: '#fff', padding: 10 }}>Alert</Text>
//       </TouchableOpacity> */}

//       <TouchableOpacity
//       //   onPress={goToAbout}
//         style={{ backgroundColor: '#D0D26C', borderRadius: 15, width: 300, height: 55, position: 'absolute', top: '80%', alignSelf: 'center' }}>
//         <Text style={{ fontSize: 20, color: '#fff', padding: 10, fontSize: 25, textAlign: 'center' }}>À Table !</Text>
//       </TouchableOpacity>

//       <StatusBar style="auto" />

//       </NavigationContainer>
//     </View>

//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //backgroundColor: 'rgba(255,0,0, 0.10)'
//     // backgroundColor: '#BBBBBB',
//     // ImageBa:`url(${asstes/moon.png})`,
//     // ImageBackground: 'assets/moon.png',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   imageBackground: {
//     position: 'absolute',
//     flex: 1,
//     justifyContent: "center",
//     width : '100%',
//     height : '100%',
//   },
//   textTitle: {
//     marginBottom: 70,
//     color: "white",
//     fontSize: 50,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
//     // backgroundColor: "#000000c0"
//   },

//   textStyle: {
//     color: 'white',
//     marginBottom: 10,
//   },
//   textStyle2: {
//     color: 'yellow',
//   },

//   moon: {
//     width: 205, 
//     height: 200,
//   },

//   thumbnail: {
//     width: 300,
//     height: 200,
//     resizeMode: "contain"
//   }
// });

// export default App;