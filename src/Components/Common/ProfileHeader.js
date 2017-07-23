import React from 'react';
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

  const index = navigation.state.index;
  if(navigation.state.routes[index].routeName === 'Activities'){
    focused = 'activities';
  }
  else {
    focused = 'wishlist';
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
        <Segment>
          <Button
            onPress={onActivitiesPress}
            first
            active={focused === 'activities'? true :false}>
            <Text>Activities</Text>
          </Button>
          <Button
            onPress={onWishListPress}
            last
            active={focused === 'wishlist'? true :false}
            >
            <Text>WishList</Text></Button>
        </Segment>
      </Body>
      <Right>
      </Right>
    </Header>
  );
};

export default ProfileHeader;
