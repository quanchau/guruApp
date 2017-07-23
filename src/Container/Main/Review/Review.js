import React, {Component} from 'react';
import { View, Image, Dimensions, Keyboard } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Item,
  Input,
} from 'native-base';

const IMAGE_URL = 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg';

export default class Review extends Component {
  handleTextInputChange = (text) => {
    //console.log(text);
    //Keyboard.dismiss();
  }
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: IMAGE_URL}} />
              <Body>
                <Text>Elon Musk</Text>
              </Body>
            </Left>
            <Right>
            </Right>
          </CardItem>
          <CardItem >
            <Body>
            <Item style={styles.textBox}>
              <Input
                style={styles.input}
                placeholder='Want to review a book, Elon?'
                onChangeText={this.handleTextInputChange}
                autoFocus={true}
              />
            </Item>
            <Item>
              <Icon name='camera' />
            </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
            </Left>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  textBox: {
    height: 200,
    width: Dimensions.get('window').width,
  },
  input: {
    height: 200,
    alignItems: 'flex-start',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
};
