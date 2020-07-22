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
import { Icon, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { BoxShadow } from 'react-native-shadow'

import styles from '../Styles/styles'
import background_img from '../Images/bg_bellow.png'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[1,2,3,2,2,2,2]


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

          <View style={styles.b_view1}>
            <View style={styles.b_view2}>
            <Image
           source={require('../Images/cross.png')}
           style={styles.f_cross_image}
         />
              <Text style={styles.f_tab_text}>
                Search Business
          </Text>
          <Image
           source={require('../Images/plus.png')}
           style={styles.f_cross_image}
         />
              
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
            
            <View style={styles.b_view3}> 
            <ImageBackground
          source={background_img} 
          resizeMode='stretch'

          style={styles.b_background}
          >
           <View style={styles.b_bg_view}>

           {/* <Image
           source={require('../Images/dot2.png')}
           style={{height:60,width:60,position: 'absolute',alignSelf:'flex-end'
        }}
         /> */}
           <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
<View style={styles.b_list_view}>
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
           </ImageBackground>
            </View>

          </View>

        </SafeAreaView>

      </>
    );
  }
}




export default Login;