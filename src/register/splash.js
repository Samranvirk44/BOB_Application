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
            

        }
    }
    
    render() {
        return (
            <>

                <SafeAreaView style={{ backgroundColor: '#FFFFFF',justifyContent:'center' }} />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF',justifyContent:'center' }} >
                    <StatusBar backgroundColor="#282E2E" barStyle="light-content" />

                    <View style={[styles.main_container_view,{justifyContent:'center'}]}>
                        
                                            <Image
        style={{height:97,width:97}}
        source={require('../Images/logo.png')}
      />
        
            
       
                    </View>

                </SafeAreaView>

            </>
        );
    }
}




export default Login;