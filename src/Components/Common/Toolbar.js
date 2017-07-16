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

const NormalToolbar = (props) => {
  const { navigation } = props;
  const goBack = () => navigation.goBack();
  return (
    <Header>
      <Left style={{flex: 0}}>
        <Button onPress={goBack} transparent>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right style={{flex: 0}}>
      </Right>
    </Header>
  );
};

export default NormalToolbar;
