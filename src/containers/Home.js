import React from 'react';
import { Text, View, Button } from 'react-native';
import { Link } from 'react-router-native';

const Home = () => (
    <View style={{ marginTop: 200 }}>
        <Text>This is the home page</Text>
        {/* <Button title="change page to products" onPress={() => 5} /> */}
        <Link to='/products'><Text>Aller voir les produits</Text></Link>
    </View>
);
export default Home;
