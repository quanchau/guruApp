import React, {Component} from 'react';
import {  Image, TouchableHighlight } from 'react-native';
import { Container, View, Content, Card, Item,
  CardItem, Thumbnail, Text, Button, Icon, Left,
  Body, Right, H3 } from 'native-base';
import StarRating from 'react-native-star-rating';
import BookItem from '../../../Components/Common/BookItem';

const IMAGE_URL = 'https://www.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/e/veembangnoinho.jpg';

export default class FriendsView extends Component {

  handleSelectUser = () => {
      this.props.navigation.navigate('Profile');
  }

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <CardItem>
            <Left>
              <TouchableHighlight onPress={this.handleSelectUser}>
                <Thumbnail style={{ width: 48, height: 48, borderRadius: 24}}
                          source={{uri: IMAGE_URL}} />
              </TouchableHighlight>
              <Item style={{ borderBottomColor: 'transparent'}}>
                <Text>{`Khac Vy `}</Text>
                <Text note>{`rated a book `}</Text>
                <StarRating
                  starSize={16}
                  disabled={false}
                  emptyStar={'ios-star-outline'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  maxStars={5}
                  rating={3.5}
                  selectedStar={(rating) => {}}
                  starColor={'red'}
                />
              </Item>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <BookItem />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
};
