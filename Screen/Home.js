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
import Users from './Users';
import { FAB } from 'react-native-paper';


export default function Home(props) {
  const navigation = useNavigation()
  const [data , setData] = useState()
  useEffect(()=> {
    const usersCollection = firestore().collection('Users').get().then((snapshot)=>{
      const allPost = snapshot.docs.map((Users)=>{
        return {
         ...Users.data(),
         id:Users.id,

        }
      })
      setData(allPost)
       console.log("DATA>>>>",allPost);
    })
  })


  const Delete = () => {

    Alert.alert('Delete data')

    firestore()
  .collection('Users')

  .Delete()
  .then(() => {
    console.log('User deleted!');
  });


  }




  return (

    <SafeAreaView>

    
        <ScrollView>
       
          <View style={styles.TopBar}>

            <View style={styles.Header}>




              <TouchableOpacity style={{ width: responsiveWidth(12), height: responsiveWidth(10), backgroundColor: '#033d34', borderTopRightRadius: 200, borderBottomRightRadius: 200, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="safe-square" size={15} color="#19a68e" style={{ transform: [{ rotate: '45deg' }] }} />
              </TouchableOpacity>


              <TouchableOpacity style={{ width: responsiveWidth(8), height: responsiveWidth(8), alignItems: 'center', justifyContent: 'center', right: 10, top: 5 }}>

                <Icon name="arrow-right-top" size={30} color="#fff" style={{ transform: [{ rotate: '38deg' }], }} />

              </TouchableOpacity>


            </View>


        



         




          </View>

          <View style={{ alignItems: 'center' }}>


          <View style={{ width: width - 70, height: responsiveHeight(7.5), backgroundColor: '#fff' , top:-33 , borderRadius:10 , borderColor:'#239481' , borderWidth:2 , }}>

            <TextInput style={{width:'100%' , height:'100%' , fontWeight:'bold' , fontSize:17  , left:3}}/>

          </View>

          <TextInput />


          </View>


          <TouchableOpacity onPress={Delete} style={{ justifyContent:'space-evenly' , left:width -100 , bottom: height /13}}>
            
            <Text style={{color:'black' , fontWeight:'bold' , fontSize:responsiveFontSize(1.8)}}>CLEAR ALL </Text>

          </TouchableOpacity>


          <View style={{alignItems:'center'}}>

            <Text style={{color:'#19a68e' , fontSize:responsiveFontSize(2) , fontWeight:'bold'}}>Total Amount : 77210 </Text>

          </View>

      

        
    

          {data?.map((item, index) => (


<View style={{}} key={index}>

<View   style={{ width : width , height : height  /11 , marginTop:responsiveHeight(1) , flexDirection:'row' ,alignSelf:'stretch' ,}}>
     
<View style={{width:responsiveWidth(45) , height:responsiveHeight(12)}}>

   <Text style={{fontSize:responsiveFontSize(2.7) , fontWeight:'700' , color:'#000' , left:15 }}>{item.name}</Text>
   <Text style={{color:'grey' , left:15}}>Amount:{item.Amount},00</Text>

</View>

<View style={{left:responsiveWidth(27) , top:5}}>

   <Text style={{color:'#19a68e' , fontWeight:'800'}}>Profilt: 5544.21</Text>
   <Text style={{color:'#19a68e' , fontWeight:'800'}}>46.3%</Text>

   

</View>

</View>




</View>




   
      ))}

                    
  

   
             
</ScrollView>


<View style={{marginTop:responsiveHeight(35)}}>
<FAB 
    style={styles.fab}
    small
    icon="plus"
    onPress={() => navigation.navigate('Form')}
  />



</View>
   
        



 



    </SafeAreaView>
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
  Header: {
    width: width,
    height: responsiveHeight(7),

    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
    alignSelf: 'stretch'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 6,
    bottom: 0,
    backgroundColor: '#239481',
    width: 70,
    height: 70, 
    borderRadius:200,
    alignItems:'center',
    justifyContent:'center',
    display:'flex' ,
 

    

     

  },
})