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
  ImageBackground,
  FlatList,
} from 'react-native';
import { Icon, Item, Input,Content,Drawer } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { BoxShadow } from 'react-native-shadow'

import styles from '../Styles/styles'
import background_img from '../Images/bg_bellow.png'

import SideBar from '../Sidebar/sidebar'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
data:[1,2,3,2,2,2,2]

    }
  }

  closeDrawer= () =>{
    this.drawer._root.open()
  }
  
  openDrawer=()=>{
    this.drawer._root.open()
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
      <Drawer
      ref={(ref)=>{this.drawer=ref}}
      openDrawerOffset={0.4}
      content={<SideBar close={()=>this.closeDrawer()}/>}
      >
      <>

        <SafeAreaView />
        <SafeAreaView  >
          <StatusBar backgroundColor="#282E2E" barStyle="light-content" />

          <View style={{ height: '100%',width:'100%', backgroundColor: '#FFFFFF' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%', height: 40, marginTop: '7%' }}>
         <TouchableOpacity onPress={()=>this.openDrawer()}>
            <Image
           source={require('../Images/menu.png')}
           style={{height:20,width:20}}
         />
           </TouchableOpacity>
                                                  <Image
        style={{height:70,width:70}}
        source={require('../Images/logo.png')}
      />
       <TouchableOpacity onPress={()=>Actions.edit_profile()}>
        <Image
           source={require('../Images/plus.png')}
           style={{height:20,width:20}}
         />
            </TouchableOpacity>  
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
        
 <View style={{flexDirection:'row',width:'88%',height:45,marginTop:-18,alignItems:'center',alignSelf:'center',justifyContent:'center',borderWidth:1,borderRadius:50,backgroundColor:'#F3F3F3',borderColor:'#CFCFCF'}}>
           <Item style={{width:'80%',height:35,borderBottomColor:'transparent'}}>
              <Input style={styles.l_input} placeholder="Search" placeholderTextColor='#8B8B8B'/>
            </Item>
            <Image
           source={require('../Images/search.png')}
           style={{height:20,width:20}}
         />
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',marginTop:5,marginLeft:'15%'}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Image
           source={require('../Images/bell.png')}
           style={{height:15,width:15,marginLeft:15}}
         />
         <Text style={{color:'#4B4B4B',fontSize:16,marginLeft:5}}>Discover</Text>
</View>

<Image
           source={require('../Images/dot1.png')}
           style={{height:60,width:60,marginLeft:'10%'}}
         />
            </View>

         <ScrollView>
            <View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>


                            <FlatList
                            style={{marginLeft:42}}
            horizontal={true}
              data={this.state.data}
              renderItem={({ item }) => (
<View style={{height:188,padding:10 ,width:210,justifyContent:'center'}}>



<Image
                      style={{ width:'100%', height:'100%' , 
                      flex:1,
                      resizeMode: "cover",
                      justifyContent: "center",
                      overflow:'hidden',
                      borderRadius:15,
                      position: 'absolute'
                    }}
                      source={require('../Images/girl.jpg')}

                      /> 
                       
                                                 <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',alignSelf:'center',marginLeft:-18,paddingLeft:10,paddingRight:10,marginTop:'75%'}}>
                                                 <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Fitness</Text>

                                                 <Icon name='arrowright' type='AntDesign' style={{color:'white',fontSize:25}} />
                                                 </View> 





                       </View>

              )}
            />

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',alignSelf:'flex-start',marginTop:20,marginLeft:30}}>
            <Image
           source={require('../Images/star.png')}
           style={{height:15,width:15,marginLeft:15}}
         />
         <Text style={{color:'#4B4B4B',fontSize:16,marginLeft:5}}>Featured Business</Text>
</View>


<FlatList
style={{marginLeft:35}}
            horizontal={true}
              data={this.state.data}
              renderItem={({ item }) => (


                <View style={{height:150,width:300,justifyContent:'center',flexDirection:'row',alignItems:'center',paddingLeft:70}}>



<Image
                      style={{ width:120, height:100 , 
                   //   flex:1,
                     // resizeMode: "cover",
                   //   justifyContent: "center",
                      overflow:'hidden',
                      borderRadius:15,
                    //  position: 'absolute'
                    }}
                      source={require('../Images/girl.jpg')}

                      /> 
                       
                                                 <View style={{flexDirection:'column',width:'90%',alignItems:'flex-start',justifyContent:'center',alignSelf:'center',marginLeft:20}}>
                                                 <Text style={{color:'black',fontSize:14,fontFamily:'Poppins-Regular'}}>State form Agency</Text>

                                                 <Text style={{color:'grey',fontWeight:'bold',fontSize:12,fontFamily:'Poppins-Regular'}}>Professionals</Text>
                                                 </View> 





                       </View>

              )}
            />
            <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start',marginTop:'10%'}}>
            <Image
           source={require('../Images/dot2.png')}
           style={{height:60,width:60,position: 'absolute'
        }}
         />
            <ImageBackground
           source={require('../Images/featured.png')}
           resizeMode='stretch'
  
            style={{ 
              width: '90%',
                  height:120,
                  overflow: 'visible',
                  alignSelf:'center',
                  marginLeft:'10%'

            }}
            >
            <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>

           <Text style={{color:'white',fontSize:30}}>
               Get Featured
               </Text>  
            </View>
            </ImageBackground>
            </View>
                            </View>
                            </ScrollView>
          

           </View>
           </ImageBackground>
            </View>

          </View>

        </SafeAreaView>

      </>
      </Drawer>

    );
  }
}




export default Login;