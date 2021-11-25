import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import saladecesar from '../../assets/saladecesar.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Link } from 'react-router-native';


class Products extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
            source={saladecesar}
            style={styles.thumbnails}
        />

        <View style={styles.goBack}>
            <Link
            to="/Home"
            underlayColor="#f0f4f7">
                <Icon name="chevron-left" size={35} color="white" />
            </Link>
        </View>

        <View style={styles.Liked}>
            <Icon name="heart" size={35} color="red" />
        </View>

        <Text style={styles.ProductName}>Salade césar</Text>

        <View style={styles.purchaseInfos}>
            <View><Text style={styles.price}>10€</Text></View>
            <View style={styles.purchaseMore}>
                <View style={styles.minus}>
                    <Icon style={styles.icons} name="minus" size={20} color="white" />
                </View>
                <View style={styles.purchaseTotal}>
                    <Text style={styles.purchaseNbr}>1</Text>
                </View>
                <View style={styles.plus}>
                    <Icon style={styles.icons} name="plus" size={20} color="white" />
                </View>
            </View>
        </View>

        <View>
            <Text style={styles.recipeTxt}>Recette</Text>
            <Text style={styles.recipeDes}>La salade césar est composée de tomates, d'avocats, de croutons, de salade <Text style={styles.recipeMore}>voir plus...</Text></Text>
        </View>


        <View>
            <View style={styles.ProductInfos}>
                <View style={styles.ProductInfoIcon}>
                    <View>
                        <Icon style={styles.iconsInfos} name="map-marker" size={30} color="#909090" />
                    </View>

                </View>

                <View>
                    <Text style={styles.ProductLocationName}>Adresse</Text>
                    <Text>13 rue du port, Caen</Text>
                </View>
            </View>

            <View style={styles.ProductInfos}>
                <View style={styles.ProductInfoIcon}>
                    <View>
                        <Icon style={styles.iconsInfos} name="check-circle" size={30} color="#909090" />
                    </View>

                </View>

                <View>
                    <Text style={styles.ProductLocationName}>Temps de préparation</Text>
                    <Text>30 min.</Text>
                </View>
            </View>
        </View>

        
        <TouchableOpacity
          style={styles.purchaseBtn}>
          <Link
            to="/"
            underlayColor="#f0f4f7">
            <View style={ styles.itemsInfosSelected }>
              <View><Text style={ styles.itemsTxtSelected }>2 articles</Text></View>
              <View><Text style={ styles.itemsPriceSelected }>15€</Text></View>
            </View>
          </Link>
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: '5%',
        marginRight: '5%',
        position: 'relative',
    },

    purchaseBtn: {
        backgroundColor: '#D0D26C',
        borderRadius: 50,
        width: '100%',
        height: 50, 
        position: 'absolute', 
        top: '88%', 
        alignSelf: 'center',
    },

    thumbnails: {
        aspectRatio: 1,
        height: '57%',
        width: '57%',
        marginTop: -27,
        borderRadius: 40,
        alignSelf: 'center',
        marginBottom: 10,
    },

    itemsInfosSelected: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    itemsTxtSelected: {
        fontSize: 20,
        color: '#fff',
        marginTop: 15,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },

    itemsPriceSelected: {
        fontSize: 20,
        color: '#fff',
        marginTop: 15,
        marginLeft: 185,
        fontSize: 16,
        fontWeight: 'bold',
    },

    goBack: {
        position: 'absolute',
        marginTop: 310,
    },

    Liked: {
        position: 'absolute',
        marginTop: 310,
        marginLeft: 300,
    },

    ProductName: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#3C3C3C',
        marginTop: 10,
    },

    purchaseInfos: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },

    price: {
        color: '#D0D26C',
        fontSize: 32,
        fontWeight: 'bold',
    },

    purchaseMore: {
        marginTop: 8,
        marginBottom: 22,
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
    },

    purchaseTotal: {
        backgroundColor: '#DFDFDF',
        height: 22,
        width: 45,
    },

    purchaseNbr: {
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
    },

    minus: {
        backgroundColor: '#909090',
        height: 22,
        width: 22,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
    },

    plus: {
        backgroundColor: '#D0D26C',
        height: 22,
        width: 22,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
    },

    icons: {
        alignSelf: 'center',
        marginTop: 1.5,
    },

    recipeTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 7,
        color: '#3C3C3C',
    },

    recipeDes: {
        lineHeight: 19,
        marginBottom: 7,
        
    },

    recipeMore: {
        color: '#D0D26C',
        fontWeight: 'bold',
    },

    ProductInfos: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
    },

    ProductInfoIcon: {
        width: 60,
        height: 50,
        borderWidth: 2,
        borderColor: '#909090',
        borderRadius: 10,
        marginRight: 8,
    },

    ProductLocationName: {
        fontWeight: 'bold',
        marginBottom: 2,
        marginTop: 3,
    },

    iconsInfos: {
        alignSelf: 'center',
        marginTop: 7,
    }

});

export default Products;