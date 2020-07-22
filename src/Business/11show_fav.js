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
    FlatList
} from 'react-native';
import { Icon ,Item,Input} from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../Styles/styles'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[1,2,3,2,2,2,2]


        }
    }
    
    render() {
        return (
            <>

                <SafeAreaView style={{ backgroundColor: '#F7F7F7',justifyContent:'center' }} />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F7F7',justifyContent:'center' }} >
                    <StatusBar backgroundColor="#282E2E" barStyle="light-content" />

                    <View style={[styles.fv_main_container_view,{justifyContent:'flex-start'}]}>
                        
                    <ImageBackground
           source={require('../Images/girl.jpg')}
           resizeMode='stretch'
  
            style={{ 
              width: '100%',
                  height:220,
                  //overflow: 'visible',
                 // alignSelf:'center',
backgroundColor:'green'
            }}
            >
             <View style={{width:'100%',height:'100%',justifyContent:'space-around',alignItems:'center'}}>

             <Image
                      style={{ 
                    width:30, height:30, 
                    alignSelf:'flex-start',
                    marginLeft:'6%',
                    marginTop:35
                   //   flex:1,
                     // resizeMode: "cover",
                   //   justifyContent: "center",
                    //  overflow:'hidden',
                   //   borderRadius:15,
                     // position: 'absolute',
                 //    marginLeft:-140
                     
                    }}
                      source={require('../Images/left_arrow.png')}

                      />

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',marginTop:80}}>
    <Text style={{color:'white' ,fontSize:25,fontFamily:'Poppins-Regular',fontWeight:'bold'}}>The Strength</Text>
<ImageBackground
           source={require('../Images/shadow.png')}
           resizeMode='stretch'
  
            style={{ 
              width:80,
                  height:25,
                  overflow: 'visible',
                 // alignSelf:'center',
            }}
            >
<View style={{width:80,height:25,justifyContent:'center',alignItems:'center'}}>

             <Text style={{color:'white',fontSize:10,fontFamily:'Poppins-Bold'}}>Map View</Text>
                      
            </View> 
            </ImageBackground>

            </View>
            </View> 

            
            </ImageBackground>

        
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
<View style={[styles.b_list_view]}>
{/* 
<View style={{width:'40%', height:120,
marginRight:-20,
possition:'relative'

 }}>
<Image
                      style={{ width:'100%', height:'100%' , 
                   //   flex:1,
                     // resizeMode: "cover",
                   //   justifyContent: "center",
                      overflow:'hidden',
                      borderRadius:15,
                     // position: 'absolute',
                     
                    }}
                      source={require('../Images/girl.jpg')}

                      />
                                                 </View>  */}

                <View style={styles.b_list_view2}>
                <Image
                      style={styles.b_list_image}
                      source={require('../Images/girl.jpg')}

                      />
                      
                <View style={styles.b_list_view3}>

                       
                <View style={styles.b_list_view4}>
                                                 <Text style={styles.b_list_text}>The Real Glamour</Text>

                                               <View style={{flexDirection:'row'}}>
                                               <Image
                      style={{ 
                        //width:'40%', height:100, 
                   //   flex:1,
                     // resizeMode: "cover",
                   //   justifyContent: "center",
                    //  overflow:'hidden',
                   //   borderRadius:15,
                     // position: 'absolute',
                 //    marginLeft:-140
                     
                    }}
                      source={require('../Images/location.png')}

                      />
                                                 <Text style={styles.b_list_text1}>24-A New York</Text>
                                                 </View> 

                                                 </View> 

<View style={styles.b_list_view5}>

                                                 <View style={styles.b_list_view6}>
                                                 <Icon
type='Entypo'
name='star'
style={styles.b_list_star}
/>
                                                 <Text style={styles.b_list_text2}>1</Text>
                                                 </View> 

<Icon
type='AntDesign'
name='heart'
style={styles.b_list_heart}

/>

                                                 </View> 
                    </View>






                       </View>
                       </View>


              )}
            />
       
                    </View>

                </SafeAreaView>

            </>
        );
    }
}




export default Login;