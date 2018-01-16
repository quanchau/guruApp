import React, {Component} from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {
  Button,
  Text,
 Left, Body, Right, Thumbnail, Card, CardItem
} from 'native-base';
import {remove} from '../../../Lib/storage';
import StarRating from 'react-native-star-rating';
const AVATAR_URL = 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg';
export default class SettingsView extends Component {

	render() {
	const {navigation} = this.props;
	const onLogOutPress = () => {
		Alert.alert(
			'',
			'Are you sure?',
			[
				{text: 'Yes, log me out', onPress: ()=> {
					remove('USER_INFO');
					navigation.navigate('Login');
					console.log('Navigate to Login');
				}},
				{text: 'No', onPress: ()=> console.log("Stay")},
			],
			{cancelable: false}

		)
	};
		return (
		<ScrollView>
			<Card  style={{flex: 0}}> 
			<CardItem>
				<Left>
					<Thumbnail source={{uri: AVATAR_URL}} />
					<Body>
              <View style={{flexDirection: 'row'}}>
               <Text>Elon Musk</Text>
			   <View style={{flex:1,flexDirection: 'row',justifyContent:'flex-end'}}>
			    <StarRating
					starSize={18}
					disabled={false}
					emptyStar={'ios-star-outline'}
					fullStar={'ios-star'}
					halfStar={'ios-star-half'}
					iconSet={'Ionicons'}
					maxStars={5}
					rating={4}
					selectedStar={(rating) => {}}
					starColor={'red'}
				/>
				</View>
              </View>
               <Text note>Join date: June 30, 2017</Text>
             </Body>
				</Left>
			</CardItem>
			</Card>

					<View>
					<TouchableOpacity 
						onPress= {onLogOutPress}
						style={{alignItems: 'center', backgroundColor: 'red', padding: 10}}>
					<Text style={{fontWeight: '700', color: 'white'}}> LOG OUT </Text></TouchableOpacity>
					</View>
					
			
			
				
		</ScrollView>
		)
	}
}

