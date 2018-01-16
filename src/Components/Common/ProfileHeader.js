import React from 'react';
import {View} from 'react-native';
import {
  Body,
  Button,
  Header,
  Left,
  Icon,
  Right,
  Title,
  Segment,
  Text,
  Tabs
} from 'native-base';

const ProfileHeader = (props) => {
  let focused = 'activities';
  const { navigation } = props;
  const goBack = () => navigation.goBack();
  const onActivitiesPress = () => {
    focused = 'activities';
    navigation.navigate('Activities');
  };
  const onWishListPress = () => {
    focused = 'wishlist';
    navigation.navigate('WishList');
  };

  const onSettingsPress = () => {
    focused = 'settings';
    navigation.navigate('Settings');
  };

  const index = navigation.state.index;
  if(navigation.state.routes[index].routeName === 'Activities'){
    focused = 'activities';
  }
  else if (navigation.state.routes[index].routeName ==='WishList') {
    focused = 'wishlist';
  } else {
  	 focused = 'settings';
  }
  return (
    <Header hasTabs>
      <Left>
        <Button
          onPress={goBack}
          transparent>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
	  <View style={{alignItems:'center'}}>
        <Segment>
          <Button
            onPress={onActivitiesPress}
            first
            active={focused === 'activities'? true :false}>
            <Text>Activities</Text>
          </Button>
          <Button
            onPress={onWishListPress}
            active={focused === 'wishlist'? true :false}
            >
            <Text>WishList</Text></Button>
		<Button
            onPress={onSettingsPress}
            last
            active={focused === 'settings'? true :false}
            >
            <Text>Settings</Text></Button>
        </Segment>
		</View>
      </Body>

      <Right>
      </Right>
    </Header>
  );
};

export default ProfileHeader;
