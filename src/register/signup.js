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
            firsrname:'',
            lastname:'',
            email:'',
            password:''

        }
}




register = async () => {
    
await fetch('https://317667922b8e.ngrok.io/user_register', {
      method: 'POST',           
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(
        {
          "email":this.state.email,
          "password":this.state.password,
          "first_name":this.state.firsrname,
          "last_name":this.state.lastname,
          "login_type":"local"
       }),
      })
    .then(response => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then(data => {
      console.log(data[1].status);
      if(data[1].status==200){
        
        alert(data[1].message)
        Actions.login()
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
   
                       this.setState({firsrname: v })
                       console.log(this.state.firsrname)  
                 
                   break;
               case 2:
                   this.setState({lastname: v })
                 console.log(this.state.lastname)
                 
               break;
               case 3:
                   this.setState({email: v })
                 console.log(this.state.email)
               break;
               case 4:
   
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

                    <View style={[styles.main_container_view,{marginTop:'5%'}]}>
                        
                                            <Image
        style={styles.l_logo}
        source={require('../Images/logo.png')}
      />
      <Text style={styles.l_signin_text}>
          Create Account
      </Text>
      <Text style={styles.l_socail_text}>
          SignUp With Social Account
      </Text>
      <View style={styles.l_socail_icon_view}>
      <Image
        source={require('../Images/fb.png')}
      />
      <Image
        source={require('../Images/google.png')}
      />
      </View>
      <Text style={styles.l_socail_text}>
Or
      </Text>
      <ScrollView style={{width:'100%'}}>

      <View style={[styles.l_lower_view,{height:400,alignSelf:'center'}]}>

       <Item style={[styles.l_item,{marginTop:'10%'}]}>
              <Input style={styles.l_input} value={this.state.firsrname} onChangeText={(t) => this.Update(t, 1)} placeholder="First Name" placeholderTextColor='#8B8B8B'/>
            </Item>
            <Item style={[styles.l_item,{marginTop:'10%'}]}>
              <Input style={styles.l_input} value={this.state.lastname} onChangeText={(t) => this.Update(t, 2)} placeholder="Last Name" placeholderTextColor='#8B8B8B'/>
            </Item>
            
            <Item style={styles.l_item}>
              <Input style={styles.l_input} value={this.state.email} onChangeText={(t) => this.Update(t, 3)} placeholder="Email" placeholderTextColor='#8B8B8B'/>

            </Item>
            <Item style={styles.l_item}>
              <Input style={styles.l_input} value={this.state.password} onChangeText={(t) => this.Update(t, 4)} placeholder="Password" placeholderTextColor='#8B8B8B'/>

            </Item>
            
        <Text style={styles.l_forget_text}>
            Forget Password
        </Text>
         <TouchableOpacity onPress={()=>this.register()}>    
        <View style={[styles.l_login_view,{marginTop:'10%'}]}>
<Text style={{color:'#FFFFFF',fontSize:18}}>
    Sign Up
</Text>
 </View>
 </TouchableOpacity >
 <View style={{flexDirection:'row',marginTop:-7,alignSelf:'center'}}>
<Text style={styles.l_socail_text}>
          Already amember? 
      </Text>
      <TouchableOpacity onPress={()=>Actions.login()} style={[styles.l_socail_text,{color:'#2D9CDB'}]}>
      <Text style={[styles.l_socail_text,{color:'#2D9CDB'}]}>
           Sign In
      </Text>
      </TouchableOpacity>
</View>

            </View>
            </ScrollView>

                    </View>

                </SafeAreaView>

            </>
        );
    }
}




export default Login;