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
            code:'',
            password:''

        }
    }


    reset = async () => {
    
        await fetch('https://317667922b8e.ngrok.io/change_password', {
              method: 'POST',           
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body:JSON.stringify(
                {
                    "email":this.state.email,
                    
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
                alert('Eneter Email')
        
              }
             
        
            })
            .catch(err => {
                console.log('failed',err)  
           
              })
            }
            Update = (v, key) => {
       
   
                switch (key) {
                    
                    case 1:
                        this.setState({code: v })
                      console.log(this.state.code)
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
                       <TouchableOpacity style={styles.left_arrow_icon} onPress={()=>Actions.login()}>
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
          Reset Password
      </Text>
      <Text style={styles.l_socail_text}>
          Eneter New Password and 6 digits code
      </Text>
      
        
      <View style={styles.l_lower_view}>
       <Item style={[styles.l_item,{marginTop:'10%'}]}>
              <Input style={styles.l_input} value={this.state.code} onChangeText={(t) => this.Update(t, 1)} placeholder="Enter 6 digits code" placeholderTextColor='#8B8B8B'/>
            </Item>
            <Item style={[styles.l_item,{marginTop:'10%'}]}>
              <Input style={styles.l_input} value={this.state.password} onChangeText={(t) => this.Update(t, 2)} placeholder="Enter new password" placeholderTextColor='#8B8B8B'/>
            </Item>
            
        
        <TouchableOpacity onPress={()=>this.reset()}>
        <View style={[styles.l_login_view,{marginTop:'20%'}]}>
<Text style={styles.login_text_button}>
    Reset Password
</Text>
 </View>
 </TouchableOpacity>
 
            </View>
            
       
                    </View>

                </SafeAreaView>

            </>
        );
    }
}




export default Login;