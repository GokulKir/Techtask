import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';

import Datas from './Datas';

const { height, width } = Dimensions.get('window')



export default function Topup() {
    const navigation = useNavigation()
  return (
    <View style={{flex : 1  , alignItems:'center'}}>




          <View style={{justifyContent:'flex-end'}}>

          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Form')}>
   
     <Icon1 name="plus" size={27} color="#fff"/>
</TouchableOpacity> 




</View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
    button: {
      backgroundColor: '#239481',
      width: 70,
      height: 70,
      borderRadius: 200,
      alignItems: 'center',
      justifyContent: 'center', 

    },
  });