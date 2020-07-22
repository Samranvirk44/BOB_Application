

 import React, { Component } from 'react';
 import { View, Text, StyleSheet } from 'react-native';
 import { Router, Scene, Stack } from 'react-native-router-flux';


 ///////////////User/////////////////
import signup from '../register/signup'
import login from '../register/login'
import splash from '../register/splash'

import edit_profile from '../edit/edit_profile'
import edit_business from '../edit/edit_business'
import edit_business2 from '../edit/edit_business2'

import dashboard from '../Dashboard/dashboard'
import business_search from '../Business/search_business'
import favourities from '../Business/favourities'
import show_fav11 from '../Business/11show_fav'
import search_result from '../Business/search_results'
import search_fav_screen_12 from '../Business/search_fav_screen_12'
import videos from '../Business/videos'


import forgotpassword from '../register/forgotpassword'

import resetpass from '../register/reset'








 console.disableYellowBox = true;   //it will ignore warnings
 class MyClass extends Component {
   render() {
     return (
       <Router>
         <Stack key="root" hideNavBar>
         <Scene key="signup" component={signup} title="signup" />
         <Scene key="login" component={login} title="login" />

         <Scene key="edit_profile" component={edit_profile} title="edit_profile"/>
         <Scene key="edit_business" component={edit_business} title="edit_business"/>
         <Scene key="edit_business2" component={edit_business2} title="edit_business2"/>
         <Scene key="dashboard" component={dashboard} title="dashboard"/>

         <Scene key="business_search" component={business_search} title="business_search" />

         <Scene key="favourities" component={favourities} title="favourities" />
         <Scene key="show_fav11" component={show_fav11} title="show_fav11" />
         <Scene key="search_result" component={search_result} title="search_result"/>
         <Scene key="search_fav_screen_12" component={search_fav_screen_12} title="search_fav_screen_12"/>
         <Scene key="videos" component={videos} title="videos" initial/>

         <Scene key="forgotpassword" component={forgotpassword} title="forgotpassword" />

         <Scene key="resetpass" component={resetpass} title="resetpass" />


         




         </Stack>
       </Router>
     );
   }
 }
 
 
 export default MyClass;
 



