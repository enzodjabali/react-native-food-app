import React from 'react';
import { Text, View, Button } from 'react-native';

export default ({ history }) => (
    <View>
        <Text>This is the home page</Text>
        <Button title="change page to products" onPress={() => history.pushState({}, undefined, "/products")} />
    </View>
);