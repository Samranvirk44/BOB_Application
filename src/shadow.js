import React, {Component} from 'react'
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Image,
	TouchableHighlight
} from 'react-native'

import {BoxShadow} from 'react-native-shadow'

export default class VideoCell extends Component {
	render = () => {
		const shadowOpt = {
			width:160,
			height:170,
			color:"#000",
			border:10,
			radius:50,
			opacity:0.5,
			x:0,
			y:0,
			style:{marginVertical:20}
		}

		return (
            <View style={{justifyContent:'center',alignItems:'center',}}>
			<BoxShadow setting={shadowOpt}>
				<View style={{
					position:"relative",
					width: '100%',
					height: '100%',
					backgroundColor: "red",
					// marginVertical:5,
					overflow:"hidden"}}>
				</View>
			</BoxShadow>


            </View>
		)
	}
}