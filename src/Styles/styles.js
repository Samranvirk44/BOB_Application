import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({

    //LOG in
    main_container_view:{ height: '100%',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#FFFFFF' },
    left_arrow_icon:{alignSelf:'flex-start',color:'#2D9CDB',fontSize:30,marginLeft:'5%',marginTop:20,marginBottom:-20},
    l_logo:{height:100,width:100},
    l_signin_text:{fontSize:27,color:'#4B4B4B',marginTop:'7%'},
    l_socail_text:{color:'#8B8B8B',fontSize:15,marginTop:'3%'},
    l_socail_icon_view:{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center',marginTop:'3%'},
    l_lower_view:{width:'90%'},
    l_item:{width:'100%',borderBottomColor:'#BAB9B9',marginTop:'3%',borderWidth:1},
    l_input:{color:'black'},
    l_forget_text:{alignSelf:'flex-end',fontSize:16,color:'#FB4747',marginTop:'3%',fontFamily:'Poppins-Regular'}, //fontFamily:'Poppins-Thin'
    l_login_view:{width:'100%',borderRadius:6,height:40,backgroundColor:'#2D9CDB',justifyContent:'center',alignItems:'center',alignSelf:'center'},
    login_text_button:{color:'#FFFFFF',fontSize:18},

    //Edit profile
    edit_input_view:{width:'90%',height:60,marginTop:20,borderBottomWidth:1,justifyContent:'center',flexDirection:'row',alignItems:'center',borderBottomColor:'#BAB9B9',borderBottomWidth:1},
    edit_input_text:{color:'#8B8B8B',marginBottom:-20,fontSize:18},
    edit_input:{textAlign:'right',width:'75%',marginBottom:-20,fontSize:18},

  //edit busines
  input_item:{width:'80%',height:35,borderBottomColor:'#ACABAB',marginTop:'3%',borderWidth:1},
  input:{color:'black'},

  //Search Business
  b_view1:{height: '100%',width:'100%', backgroundColor: '#FFFFFF' },
  b_view2:{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', width: '100%', height: 40, marginTop: '2%' },
  b_view2_f:{ flexDirection: 'row', alignItems: 'center', justifyContent:'center', width: '100%', height: 40, marginTop: '2%' },

  b_cross_image:{height:20,width:20,marginLeft:'5%'},
  b_tab_text:{ color: '#4B4B4B', fontSize: 27,marginLeft:'16%',marginRight:'20%'},
  b_view3:{height:'100%',width:'100%',alignSelf:'center',marginTop:20},
  b_background:{width: '100%',
  height: '100%',
  overflow: 'visible'},
  b_bg_view:{height:'100%',width:'100%',marginTop:20},

  b_list_view:{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',width:'100%',height:150},
b_list_view2:{height:120,width:'80%',justifyContent:'center',flexDirection:'row',alignItems:'center',backgroundColor:'white',borderRadius:24,borderWidth:1,borderColor:'#E1E1E1',
marginRight:10},
b_list_image:{ width:'40%', height:100, 
//   flex:1,
  // resizeMode: "cover",
//   justifyContent: "center",
 //  overflow:'hidden',
   borderRadius:15,
  // position: 'absolute',
  marginLeft:-140
  },
  b_list_view3:{height:150,width:'50%',justifyContent:'space-around',flexDirection:'column',alignItems:'center'},
  b_list_view4:{flexDirection:'column',width:'150%',marginLeft:10,paddingLeft:50,marginTop:10,alignItems:'flex-start',justifyContent:'center',marginLeft:20},
b_list_text:{color:'black',fontSize:14,fontFamily:'Poppins-Regular'},
b_list_text1:{color:'grey',fontSize:12,fontFamily:'Poppins-Regular',marginLeft:5},
b_list_view5:{flexDirection:'row',width:'140%',paddingLeft:10,marginBottom:5,marginLeft:'50%',alignItems:'center',justifyContent:'space-between'},
b_list_view6:{flexDirection:'row',width:'70%',alignItems:'center',justifyContent:'flex-start'},
b_list_star:{color:'#F2C94C',fontSize:17},
b_list_text2:{color:'grey',fontWeight:'bold',fontSize:16,fontFamily:'Poppins-Regular'},
b_list_heart:{color:'#E0E0E0',fontSize:20},

//Favourities
f_cross_image:{height:20,width:20},
f_tab_text:{ color: '#4B4B4B', fontSize: 27},

//11
fv_main_container_view:{ height: '100%',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#F7F7F7' },


//search result
sr_main_container_view:{ height: '100%',width:'100%', backgroundColor: '#6D6D6D' },
sr_tab_view:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%', height: 40, marginTop: '2%' },
sr_bg_view:{height:'37%',width:'100%',marginTop:20,justifyContent:'flex-start',alignItems:'center'},
sr_view3:{height:220,width:'100%',alignSelf:'center',marginTop:20},
sr_list_text2:{color:'grey',fontSize:20,fontFamily:'Poppins-Regulor'},
sr_bg:{  borderTopRightRadius:30,
  borderTopLeftRadius:30,
  marginTop:12,
  width: '100%',
      height:220,
      overflow:'hidden',
     // alignSelf:'center',}
},
sr_bg_up:{  borderTopRightRadius:30,
  borderTopLeftRadius:30,
  marginTop:12,
  width: '100%',
      height:50,
      overflow:'hidden',
     // alignSelf:'center',}
},
sr_bg_view2:{width:'100%',height:'100%',justifyContent:'space-around',alignItems:'center',borderTopRightRadius:30,borderTopLeftRadius:30,marginTop:12},
sr_down_icon:{color:'#E0E0E0',fontSize:30,alignSelf:'center'},
sr_direction_img:{height:35,width:35,alignSelf:'flex-end',marginRight:'5%',marginBottom:'20%'},
sr_bg_text:{color:'white' ,fontSize:25,fontFamily:'Poppins-Regular',fontWeight:'bold',alignSelf:'flex-start',marginLeft:'5%',marginBottom:'2%'},
sr_view4:{height:'100%',width:'100%',backgroundColor:'#FAFAFA'},
sr_view5:{width:'90%',marginTop:10,flexDirection:'row',justifyContent:'space-between',alignSelf:'center',alignItems:'center'},
sr_star:{color:'#F2C94C',fontSize:25},
sr_view6:{flexDirection:'row',width:'80%',alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:10},
sr_img:{height:50,width:50},
sr_view7:{width:'80%',height:60,alignSelf:'center',justifyContent:'flex-start',alignItems:'center',marginTop:10},
sr_text:{fontFamily:'Poppins-Regular',color:'#929191',fontSize:10},
sr_view8:{flexDirection:'row',width:'80%',alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:10},

sr_view2_f:{ flexDirection: 'row', alignItems: 'center', justifyContent:'center', width: '100%', height: 40, marginTop: '2%' },


//fav 12
fav_main_container_bg:{ height: '100%',width:'100%'},
fav_main_container_view:{ height: '100%',width:'100%'},

  
})

export default styles;