import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View , Alert } from 'react-native'
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
import Topup from './Topup';



export default function Users({data}) {

    
    
  return (
    <View>

        <ScrollView>



</ScrollView>
    
    </View>
  )
}

const styles = StyleSheet.create({})