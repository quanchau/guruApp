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
import { NavigationActions } from 'react-navigation';
const NormalToolbar = (props) => {
  const { navigation } = props;
  const goBack = () => {
    navigation.dispatch(NavigationActions.back())
  }
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
      </Body>
      <Right style={{flex: 0}}>
      </Right>
    </Header>
  );
};

export default NormalToolbar;
