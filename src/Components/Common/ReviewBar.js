import React from 'react';
import {
  Body,
  Button,
  Header,
  Left,
  Icon,
  Right,
  Title,
} from 'native-base';
import {
  TouchableOpacity,Text
} from 'react-native';

const ReviewToolbar = (props) => {
  const { navigation } = props;
  const goBack = () => navigation.goBack();
  return (
    <Header>
      <Left style={{flex: 0}}>
        <Button
          onPress={goBack}
          transparent>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
       <Title>Add Review</Title>
      </Body>
      <Right style={{flex: 0}}>
        <Button transparent>
          <Text>Post</Text>
        </Button>
      </Right>
    </Header>
  );
};

export default ReviewToolbar;
