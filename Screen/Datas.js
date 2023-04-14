import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect , useState } from 'react'

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';


const { height, width } = Dimensions.get('window')



export default function Datas() {
  const [data , setData] = useState([])
  useEffect(()=> {
    firestore()
  .collection('Users')
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      setData(documentSnapshot.id, documentSnapshot.data())
    });
  });
  })
  return (
    <View style={styles.container}>
     
<ScrollView>


 


       <View style={{ width : width , height : height  /11 , marginTop:responsiveHeight(8) , flexDirection:'row' ,alignSelf:'stretch'}}>
             
             <View style={{width:responsiveWidth(45) , height:responsiveHeight(12)}}>

                <Text style={{fontSize:responsiveFontSize(2.7) , fontWeight:'700' , color:'#000' , left:15 }}>Kalam</Text>
                <Text style={{color:'grey' , left:15}}>Amount:3572.00</Text>

             </View>

             <View style={{left:responsiveWidth(27) , top:5}}>

                <Text style={{color:'#19a68e' , fontWeight:'800'}}>Profilt: 5544.21</Text>
                <Text style={{color:'#19a68e' , fontWeight:'800'}}>46.3%</Text>

                

             </View>

</View>


           
</ScrollView>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        alignItems:'center'
    }
})