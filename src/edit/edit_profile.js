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
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: 40, marginTop: '2%' }}>
              <Text style={{ color: '#4B4B4B', fontSize: 27, marginLeft: '20%' }}>
                Edit Profile
          </Text>
              <Text style={{ color: '#2D9CDB', fontSize: 21, marginLeft: '20%' }}>
                Save
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
           <Image
           source={require('../Images/user.png')}
           style={{marginTop:-30}}
         />

<Image
           source={require('../Images/cam.png')}
           style={{marginTop:-30,marginLeft:'18%'}}
         />
         
  <View style={styles.edit_input_view}>
    <Text style={styles.edit_input_text}>UserName</Text>
            <Input style={styles.edit_input} placeholder="Mechiel Buery" placeholderTextColor='#807E7E'/>
            </View>
            <View style={styles.edit_input_view}>
    <Text style={styles.edit_input_text}>Email</Text>
            <Input style={styles.edit_input} placeholder="MechielBuery21@gmail.com" placeholderTextColor='#807E7E'/>
            </View>

            <View style={styles.edit_input_view}>
    <Text style={styles.edit_input_text}>Password</Text>
            <Input style={styles.edit_input} placeholder="***********" secureTextEntry={true} placeholderTextColor='#807E7E'/>
            </View>
<TouchableOpacity style={[styles.l_login_view,{marginTop:'10%',width:'90%'}]} onPress={()=>Actions.edit_business()}>
<Text style={{color:'#FFFFFF',fontSize:18}}>
    Edit my Business
</Text>
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