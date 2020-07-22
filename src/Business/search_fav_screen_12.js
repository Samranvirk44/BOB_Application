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
import { BlurView, VibrancyView } from "@react-native-community/blur";



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     drop:true

    }
  }
drop_fun=()=>{
  if(this.state.drop==true){
    this.setState({
      drop:false
    })
  }
  else{
    this.setState({
      drop:true
    })
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

          <ImageBackground
           source={require('../Images/girl.jpg')}
           resizeMode='stretch'
            style={styles.fav_main_container_bg}
            blurRadius={10}

            >   
          <View style={styles.fav_main_container_view}>
          <View style={styles.sr_view2_f}>


          <Image
                      style={[styles.b_cross_image,{marginRight:'80%'}]}
                      source={require('../Images/left_arrow.png')}

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
            
         {
           this.state.drop?
           <View>
<ImageBackground
           source={require('../Images/girl.jpg')}
           resizeMode='stretch'
            style={styles.sr_bg}
            >
             <View style={styles.sr_bg_view2}>
           <TouchableOpacity onPress={()=>this.drop_fun()}>
            <Icon
type='AntDesign'
name='down'
style={styles.sr_down_icon}

/>
</TouchableOpacity>
<Image
                      style={styles.sr_direction_img}
                      source={require('../Images/direction.png')}

                      />

<Text style={styles.sr_bg_text}>The Real Glamour</Text>


            </View> 

            
            </ImageBackground>


                         </View> 
           :
           <View>


           <TouchableOpacity onPress={()=>this.drop_fun()}>
            <Icon
type='AntDesign'
name='up'
style={styles.sr_down_icon}

/>
</TouchableOpacity>




            </View> 

            
         }
           

          <View style={styles.sr_view4}>

          <View style={styles.sr_view5}>
<Text style={styles.sr_list_text2}>
Fashion

</Text>
  
<View style={{flexDirection:'row'}}>
<Icon
type='Entypo'
name='star'
style={styles.sr_star}
/>
<Text style={styles.sr_list_text2}>3</Text>
</View> 


</View> 

<View style={styles.sr_view6}>

<Image
           source={require('../Images/phone.png')}
           style={styles.sr_img}
           
         />

<Image
           source={require('../Images/web.png')}
           style={{height:50,width:50}}
         />
         <Image
           source={require('../Images/gmail.png')}
           style={styles.sr_img}
         />
         <Image
           source={require('../Images/fb2.png')}
           style={styles.sr_img}
         />
<Image
           source={require('../Images/insta.png')}
           style={styles.sr_img}
         />

</View>
<View style={styles.sr_view7}>
<Text style={styles.sr_text}>samkjafkdasjf dkfjdkfjdkf dkfsdkfj</Text>
</View>

<View style={styles.sr_view8}>
<Icon
type='Entypo'
name='star'
style={styles.sr_star}
/>
<Icon
type='Entypo'
name='star'
style={styles.sr_star}
/><Icon
type='Entypo'
name='star'
style={styles.sr_star}
/><Icon
type='Entypo'
name='star'
style={styles.sr_star}
/><Icon
type='Entypo'
name='star'
style={styles.sr_star}
/>


</View>


<TouchableOpacity onPress={()=>this.login()}>
        <View style={[styles.l_login_view,{marginTop:'10%',width:'90%'}]}>
<Text style={styles.login_text_button}>
    Sign In
</Text>
 </View>
 </TouchableOpacity>

          </View>

          </View>
          </ImageBackground>

        </SafeAreaView>

      </>
    );
  }
}




export default Login;