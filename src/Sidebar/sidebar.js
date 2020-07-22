import React, { Component } from 'react';
import { Image,TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

import { Container, Button, Icon, Body, Right, Switch, Text, Content, Input, ListItem, Left, Item, View } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
export default class RegularTextboxExample extends Component {

componentDidMount=()=>{


   // alert(this.props.stu_id)
}

    render() {
        return (
            <Container style={{ backgroundColor: '#E5E5E5',width:'100%' }}>

                <Content>
                    <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Image
           source={require('../Images/user.png')}
         style={{width:80,height:80,marginTop:'30%'}}
         /> 
                   <Text style={{color:'#4B4B4B',marginTop:'5%',fontSize:21,fontFamily:'Poppins-Regular'}}>Whitney</Text>

<ScrollView>
<View style={{width:'100%',marginTop:'30%'}}>
    <TouchableOpacity onPress={()=>Actions.edit_business()}>
<View style={{flexDirection:'row',justifyContent:'flex-start',width:'100%',height:60,alignItems:'center',borderBottomWidth:1,borderBottomColor:'#9E9E9E'}}>
<Image
           source={require('../Images/plus2.png')}
           style={{width:20,height:20,marginTop:10}}
         /> 
                        <Text style={{color:'#9E9E9E',marginTop:'5%',fontSize:21,marginLeft:10,fontFamily:'Poppins-Regular'}}>Add Business</Text>
    
</View>
</TouchableOpacity>
<View style={{flexDirection:'row',justifyContent:'flex-start',width:'100%',height:60,alignItems:'center',borderBottomWidth:1,borderBottomColor:'#9E9E9E'}}>
<Image
           source={require('../Images/plus2.png')}
           style={{width:20,height:20,marginTop:10}}
         /> 
                        <Text style={{color:'#9E9E9E',marginTop:'5%',fontSize:21,marginLeft:10,fontFamily:'Poppins-Regular'}}>Favourites</Text>
    
</View>
<View style={{flexDirection:'row',justifyContent:'flex-start',width:'100%',height:60,alignItems:'center',borderBottomWidth:1,borderBottomColor:'#9E9E9E'}}>
<Image
           source={require('../Images/plus2.png')}
           style={{width:20,height:20,marginTop:10}}
         /> 
                        <Text style={{color:'#9E9E9E',marginTop:'5%',fontSize:21,marginLeft:10,fontFamily:'Poppins-Regular'}}>Instagram</Text>
    
</View>
<View style={{flexDirection:'row',justifyContent:'flex-start',width:'100%',height:60,alignItems:'center',borderBottomWidth:1,borderBottomColor:'#9E9E9E'}}>
<Image
           source={require('../Images/plus2.png')}
           style={{width:20,height:20,marginTop:10}}
         /> 
                        <Text style={{color:'#9E9E9E',marginTop:'5%',fontSize:21,marginLeft:10,fontFamily:'Poppins-Regular'}}>Facebook</Text>
    
</View>
<View style={{flexDirection:'row',justifyContent:'flex-start',width:'100%',height:60,alignItems:'center',borderBottomWidth:1,borderBottomColor:'#9E9E9E'}}>
<Image
           source={require('../Images/plus2.png')}
           style={{width:20,height:20,marginTop:10}}
         /> 
                        <Text style={{color:'#9E9E9E',marginTop:'5%',fontSize:21,marginLeft:10,fontFamily:'Poppins-Regular'}}>Social Circle</Text>
    
</View>
<TouchableOpacity onPress={()=>Actions.edit_profile()}>
<View style={{flexDirection:'row',justifyContent:'flex-start',width:'100%',height:60,alignItems:'center',borderBottomWidth:1,borderBottomColor:'#9E9E9E',marginTop:100}}>
<Image
           source={require('../Images/setting.png')}
           style={{width:20,height:20,marginTop:10}}
         /> 
                        <Text style={{color:'#9E9E9E',marginTop:'5%',fontSize:21,marginLeft:10,fontFamily:'Poppins-Regular'}}>Edit Profile</Text>
    
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>Actions.login()}>

<View style={{flexDirection:'row',justifyContent:'flex-start',width:'100%',height:60,alignItems:'center',borderBottomWidth:1,borderBottomColor:'#9E9E9E'}}>
<Image
           source={require('../Images/logout.png')}
           style={{width:18,height:23,marginTop:10}}
         /> 
                        <Text style={{color:'#9E9E9E',marginTop:'5%',fontSize:21,marginLeft:10,fontFamily:'Poppins-Regular'}}>Logout</Text>
    
</View>
</TouchableOpacity>

</View>
</ScrollView>
                    </View>
                </Content>
            </Container>
        );
    }
}