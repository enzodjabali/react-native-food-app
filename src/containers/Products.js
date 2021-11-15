import React from 'react';
import { Text, View, Button } from 'react-native';
import { Link } from 'react-router-native';

const Products = () => (
    <View style={{ marginTop: 200 }}>
        <Text>This is the products page</Text>
        {/* <Button title="change to home" onPress={() => 5} /> */}
        <Link to='/home'><Text>Aller voir la Home</Text></Link>
    </View>
);

export default Products;