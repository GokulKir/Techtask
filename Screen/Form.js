import { Alert, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState , useEffect} from 'react'

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';


const { height, width } = Dimensions.get('window')


export default function Form() {
    const navigation = useNavigation()
    const [name , setName] = useState('')
    const [amount , setAmount]  =useState('')

    const Submit = () => {
        if(name ==  '') {
            console.log("Name is empty");
            Alert.alert('Name is empty')
        } else if (amount == '') {
            console.log('Amount is empty');
            Alert.alert('Amount is empty')
        } else {

            firestore()
            .collection('Users')
            .add({
              name: name ,
              Amount : amount
            })
            .then(() => {
              console.log('User added!');
              Alert.alert('User Added')
              navigation.navigate('Project')
            });
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.TopBar}>

                <View style={{ width: width, height: responsiveHeight(8), top: 10, left: 10 }}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>

                        <Icon1 name="arrowleft" size={34} color="#fff" />

                    </TouchableOpacity>

                </View>

                <View style={{ alignItems: 'center', top: 33 }}>

                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(2.5), fontWeight: '900' }}>Type user data!</Text>

                </View>




            </View>

            <View style={{ alignItems: 'center', marginTop: responsiveHeight(12) }}>

                <TextInput onChangeText={setName}  style={{ width: width - 50, height: height / 16, borderRadius: 10, borderWidth: 1, borderColor: '#19a68e', paddingLeft: 10, fontSize: 15 }} placeholder="Enter Fullname" />

            </View>

            <View style={{ alignItems: 'center', marginTop: responsiveHeight(5) }}>

                <TextInput onChangeText={setAmount} keyboardType='numeric' style={{ width: width - 50, height: height / 16, borderRadius: 10, borderWidth: 1, borderColor: '#19a68e', paddingLeft: 10, fontSize: 15 }} placeholder="Enter Amount ₹" />

            </View>

            <View style={{ alignItems: 'center', marginTop: responsiveHeight(15) }}>

                <TouchableOpacity onPress={Submit} style={{ width: width - 70, height: height / 15, backgroundColor: '#239481', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>

                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Submit</Text>

                </TouchableOpacity>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    TopBar: {
        width: width,
        height: responsiveHeight(19),
        backgroundColor: '#239481'
    },
})