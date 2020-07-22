import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  CheckBox,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';
import { Icon, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { BoxShadow } from 'react-native-shadow'

import styles from '../Styles/styles'
import background_img from '../Images/bg_bellow.png'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }

  render() {
    const shadowOpt = {
      width: 160,
      height: 170,
      color: "#000",
      border: 10,
      radius: 50,
      opacity: 0.5,
      x: 0,
      y: 0,
      style: { marginVertical: 20 }
    }
    return (
      <>

        <SafeAreaView />
        <SafeAreaView  >
          <StatusBar backgroundColor="#282E2E" barStyle="light-content" />

          <View style={{ height: '100%',width:'100%', backgroundColor: '#FFFFFF' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%', height: 40, marginTop: '2%' }}>
            <Image
           source={require('../Images/cross.png')}
           style={{height:20,width:20,marginLeft:'5%'}}
         />
              <Text style={{ color: '#4B4B4B', fontSize: 27,marginLeft:'25%'}}>
                Edit Business
          </Text>
              
            </View>
            {/* <ImageBackground
            resizeMode='stretch'
              style={{
                width: '100%',
                height: '100%',
                overflow: 'visible'
              }}
              source={require('../Images/bg_bellow.png')}

            /> */}
            
            <View style={{height:'100%',width:'100%',alignSelf:'center',marginTop:50}}> 
            <ImageBackground
          source={background_img} 
          resizeMode='stretch'

          style={{ 
            width: '100%',
                height: '100%',
                overflow: 'visible'
          }}
          >
           <View style={{height:'80%',width:'100%',alignItems:'center',flexDirection:'column',justifyContent:'flex-start'}}>
        
 <Item style={[styles.input_item,{marginTop:'8%'}]}>
              <Input style={styles.input} placeholder="Address" placeholderTextColor='#ACABAB'/>
            </Item>
            <Item style={styles.input_item}>
              <Input style={styles.l_input} placeholder="Description" placeholderTextColor='#ACABAB'/>
            </Item>
            <Item style={styles.input_item}>
              <Input style={styles.l_input} placeholder="Website" placeholderTextColor='#ACABAB'/>
            </Item>
            <Item style={styles.input_item}>
              <Input style={styles.l_input} placeholder="Email" placeholderTextColor='#ACABAB'/>
            </Item>
            <Item style={styles.input_item}>
              <Input style={styles.l_input} placeholder="Facebook URL" placeholderTextColor='#ACABAB'/>
            </Item>
            <Item style={styles.input_item}>
              <Input style={styles.l_input} placeholder="Instagram URL" placeholderTextColor='#ACABAB'/>
            </Item>
            <TouchableOpacity onPress={()=>Actions.dashboard()} style={[styles.l_login_view,{marginTop:'10%',width:'80%'}]}>
            <View >
<Text style={{color:'#FFFFFF',fontSize:18}}>
    Edit my Business
</Text>
 </View>
 </TouchableOpacity>
           </View>
           </ImageBackground>
            </View>

          </View>

        </SafeAreaView>

      </>
    );
  }
}




export default Login;