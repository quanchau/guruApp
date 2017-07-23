import React, {Component} from 'react';
import { View } from 'react-native';
import {
  Button,
  Text,
  H3,
  List, ListItem, Left, Body, Right, Thumbnail,
} from 'native-base';
const URL = 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg';

export default class FollowingView extends Component {
  render() {
    return (
      <View >
        <List contentContainer={{flexDirection: 'column'}} >
          <ListItem avatar  >
            <Left>
              <Thumbnail source={{ uri: URL }} />
            </Left>
            <Body>
              <Text>Elon Musk</Text>
              <Text note>Commented on a review for book Blink . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: URL }} />
              </Left>
              <Body>
                <Text>Elon Musk</Text>
                <Text note>Commented on a review for book Blink . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: URL }} />
              </Left>
              <Body>
                <Text>Elon Musk</Text>
                <Text note>Commented on a review for book Blink . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: URL }} />
              </Left>
              <Body>
                <Text>Elon Musk</Text>
                <Text note>Commented on a review for book Blink . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
        </List>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 56,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
};
