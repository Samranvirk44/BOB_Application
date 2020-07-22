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
} from 'react-native';
import { Icon ,Item,Input} from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../Styles/styles'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''

        }
    }


    login = async () => {
    
        await fetch('https://317667922b8e.ngrok.io/user_login', {
              method: 'POST',           
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body:JSON.stringify(
                {
                    "email":this.state.email,
                    "password":this.state.password,
                    "login_type":"local"
                 }),
              })
            .then(response => {
              const statusCode = response.status;
              const data = response.json();
              return Promise.all([statusCode, data]);
            })
            .then(data => {
                console.log(data)
              console.log(data[1].status);
              if(data[1].status==200){
                
                alert(data[1].message)
              }
              else{
                alert(data[1].message)
        
              }
             
        
            })
            .catch(err => {
                console.log('failed',err)  
           
              })
            }
            Update = (v, key) => {
       
   
                switch (key) {
                    
                    case 1:
                        this.setState({email: v })
                      console.log(this.state.email)
                    break;
                    case 2:
        
                        this.setState({password: v })
                      console.log(this.state.password)
                    break;
                    
                }
            }
    
    render() {
        return (
            <>

                <SafeAreaView style={{ backgroundColor: '#FFFFFF',justifyContent:'center' }} />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF',justifyContent:'center' }} >
                    <StatusBar backgroundColor="#282E2E" barStyle="light-content" />

                    <View style={styles.main_container_view}>
                       <TouchableOpacity style={styles.left_arrow_icon} onPress={()=>Actions.signup()}>
                        <Icon   
                        style={{color:'#2D9CDB'}}
                         type='AntDesign'
                         name='arrowleft'
                        />
                        </TouchableOpacity>
                                            <Image
        style={styles.l_logo}
        source={require('../Images/logo.png')}
      />
      <Text style={styles.l_signin_text}>
          Sign In
      </Text>
      <Text style={styles.l_socail_text}>
          SignIn With Social Account
      </Text>
      <View style={styles.l_socail_icon_view}>
      <Image
        source={require('../Images/fb.png')}
      />
      <Image
        source={require('../Images/google.png')}
      />
      </View>
        
      <View style={styles.l_lower_view}>
       <Item style={[styles.l_item,{marginTop:'10%'}]}>
              <Input style={styles.l_input} value={this.state.email} onChangeText={(t) => this.Update(t, 1)} placeholder="Email" placeholderTextColor='#8B8B8B'/>
            </Item>
            
            <Item style={styles.l_item}>
              <Input style={styles.l_input} value={this.state.password} onChangeText={(t) => this.Update(t, 2)} placeholder="Password" placeholderTextColor='#8B8B8B'/>
            </Item>
            <TouchableOpacity onPress={()=>Actions.resetpass()}>
        <Text style={styles.l_forget_text}>
            Forget Password
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.login()}>
        <View style={[styles.l_login_view,{marginTop:'10%'}]}>
<Text style={styles.login_text_button}>
    Sign In
</Text>
 </View>
 </TouchableOpacity>
 <View style={{flexDirection:'row',marginTop:-7,alignSelf:'center'}}>
<Text style={styles.l_socail_text}>
          Are you a new member? 
      </Text>
      <TouchableOpacity style={styles.l_socail_text} onPress={()=>Actions.signup()}>
      <Text style={[styles.l_socail_text,{color:'#2D9CDB'}]}>
           Sign Up
      </Text>
      </TouchableOpacity>
</View>
            </View>
            
       
                    </View>

                </SafeAreaView>

            </>
        );
    }
}




export default Login;