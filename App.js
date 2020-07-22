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
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            

        }
    }
    
    render() {
        return (
            <>

                <SafeAreaView style={{ backgroundColor: '#E5E5E5', }} />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5', }} >
                    <StatusBar backgroundColor="#282E2E" barStyle="light-content" />

                    <View style={{ height: '100%' }}>
                        
                        <ScrollView>
                            <KeyboardAvoidingView>


                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>

                </SafeAreaView>

            </>
        );
    }
}

const styles = StyleSheet.create({

});


export default Login;