import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import saladecesar from '../../assets/saladecesar.jpg';
import saladecomposee from '../../assets/saladecomposee.jpg';
import soupe from '../../assets/soupe.jpg';
import boeuf from '../../assets/boeuf.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Link } from 'react-router-native';


class Home extends Component {
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.menuBars}>
        <Icon name="bars" size={22} color="black" />
      </View>


      <View style={styles.menuInfos}>
        <View><Text style={styles.menuTxt}>Menu</Text></View>
        <View><Icon style={styles.menuChevron} name="chevron-down" size={18} color="black" /></View>
        <View><Text>Choisis ton repas</Text></View>
      </View>


      <View style={styles.buttons}>
        <View style={styles.buttonSelected}><Icon style={styles.btnIcons} name="home" size={30} color="#D0D26C" /></View>
        <View style={styles.button}><Icon style={styles.btnIcons} name="heart" size={30} color="#909090" /></View>
        <View style={styles.button}>
          <Link
            to="/"
            underlayColor="#f0f4f7">
            <Icon style={styles.btnIcons} name="home" size={30} color="#909090" />
          </Link>
        </View>
        <View style={styles.buttonRight}>
          <Link
            to="/Products"
            underlayColor="#f0f4f7">
              <Icon style={styles.btnIcons} name="shopping-basket" size={30} color="#909090" />
          </Link>
        </View>
      </View>
        
      <View style={styles.foodList}>
        <View style={styles.itemsLeft}>
          <View style={styles.itemGrpTopIcons}>
            <View style={styles.itemCircleTopIcon}><Icon name="circle" size={20} color="#D0D26C" /></View>
            <View><Icon name="heart" size={20} color="red" /></View>
          </View>
          <Image
            source={saladecesar}
            style={styles.thumbnails}
          />
          <Text style={styles.itemsDes}>Salade césar</Text>

          <View style={styles.itemGrpBottomIcons}>
            <View><Text style={styles.itemPrice}>10€</Text></View>
            <View><Icon name="plus-circle" size={25} color="#D0D26C" /></View>
          </View>
        </View>

        <View style={styles.items}>
          <View style={styles.itemGrpTopIcons}>
            <View style={styles.itemCircleTopIcon}><Icon name="circle" size={20} color="#D0D26C" /></View>
            <View><Icon name="heart" size={20} color="#909090" /></View>
          </View>
          <Image
            source={saladecomposee}
            style={styles.thumbnails}
          />
          <Text style={styles.itemsDes}>Salade composée</Text>
          <View style={styles.itemGrpBottomIcons}>
            <View><Text style={styles.itemPrice}>8€&nbsp;</Text></View>
            <View><Icon name="plus-circle" size={25} color="#909090" /></View>
          </View>
        </View>


        <View style={styles.itemsLeft}>
          <View style={styles.itemGrpTopIcons}>
            <View style={styles.itemCircleTopIcon}><Icon name="circle" size={20} color="#D0D26C" /></View>
            <View><Icon name="heart" size={20} color="red" /></View>
          </View>
          <Image
            source={soupe}
            style={styles.thumbnails}
          />
          <Text style={styles.itemsDes}>Soupe de tomates</Text>
          <View style={styles.itemGrpBottomIcons}>
            <View><Text style={styles.itemPrice}>5€&nbsp;</Text></View>
            <View><Icon name="plus-circle" size={25} color="#D0D26C" /></View>
          </View>
        </View>
      

        <View style={styles.items}>
          <View style={styles.itemGrpTopIcons}>
              <View style={styles.itemCircleTopIcon}><Icon name="circle" size={20} color="#D0D26C" /></View>
              <View><Icon name="heart" size={20} color="#909090" /></View>
          </View>
          <Image
            source={boeuf}
            style={styles.thumbnails}
          />
          <Text style={styles.itemsDes}>Boeuf</Text>
          <View style={styles.itemGrpBottomIcons}>
            <View><Text style={styles.itemPrice}>12€</Text></View>
            <View><Icon name="plus-circle" size={25} color="#909090" /></View>
          </View>
        </View>

        <View style={styles.itemsLeft}>
            <Image
              source={saladecesar}
              style={styles.thumbnails}
            />
            <Text style={styles.itemsDes}>Salade césar</Text>
        </View>

        <View style={styles.items}>
            <Image
              source={saladecomposee}
              style={styles.thumbnails}
            />
            <Text style={styles.itemsDes}>Salade composée</Text>
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

  foodList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },

  items: {
    backgroundColor: 'white',
    height: '35%',
    width: '48.5%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#909090',
    marginBottom: '8.5%',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
    shadowColor: '#909090',
  },

  itemsLeft: {
    backgroundColor: 'white',
    height: '35%',
    width: '48.5%',
    borderRadius: 20,
    marginRight: '2.5%',
    borderWidth: 2,
    borderColor: '#909090',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
    shadowColor: '#909090',
  },

  thumbnails: {
    aspectRatio: 1,
    height: '50%',
    width: '50%',

    borderRadius: 70,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#D0D26C',

    marginBottom: 10,
  },

  itemsDes: {
    fontWeight: 'bold',
    paddingTop: 0,
    marginLeft: 10,
  },


  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 25,
    marginTop: 25,
  },

  button: {
    flex: 1,
    height: 55,
    borderRadius: 10,
    marginRight: 30,
    borderWidth: 2,
    borderColor: '#909090',
  },

  buttonSelected: {
    flex: 1,
    height: 55,
    borderRadius: 10,
    marginRight: 30,
    borderWidth: 2,
    borderColor: '#D0D26C',
  },

  buttonRight: {
    flex: 1,
    height: 55,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#909090',
  },

  btnIcons: {
    marginLeft: '25%',
    marginTop: '20%',
    position: 'relative',
  },

  itemGrpTopIcons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginTop: 10,
  },

  itemCircleTopIcon: {
    marginRight: '65%',
  },

  itemPrice: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#D0D26C',
    marginRight: '55%',
  },

  itemGrpBottomIcons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginTop: 10,
  },

  menuInfos: {
    display: 'flex',
    flexDirection : 'row',
    flexWrap: 'wrap',
    width: 150,
    marginTop: 15,
  },

  menuTxt: {
    fontSize: 25,
  },

  menuChevron: {
    marginTop: 6,
    marginLeft: 15,
  },

  menuBars: {
    marginTop: 15,
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
  }

});

export default Home;