import React from 'react';
import { Modal, TouchableHighlight, Image  } from 'react-native';
import {
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
  Icon,
  H3,
  Item,
  Button,
} from 'native-base';
import StarRating from 'react-native-star-rating';

const ReviewItem = (props) => {
  const { item } = props;
  const getBiggerImage = (url) => `${url}&zoom=7`;
  return (
    <Card style={{elevation: 3 }}>
      <CardItem cardBody>
        <Image
          style={{ height: 300, flex: 1 }}
          source={{uri : getBiggerImage(item.imageLinks.thumbnail)}} />
      </CardItem>
      <Body style={styles.info}>
        <H3>{item.title}</H3>
        <Text note>{item.authors[0]}</Text>
      </Body>
      <CardItem style={{marginTop:40}}>
        <Left>
          <StarRating
            starSize={18}
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
          <Text note>3.5</Text>
        </Left>
        <Item style={{borderBottomColor: 'transparent'}}>
          <Icon name="star" />
          <Text>12,323</Text>
        </Item>
        <Item style={{borderBottomColor: 'transparent'}}>
          <Icon name="chatbubbles" />
          <Text>13,000</Text>
        </Item>
      </CardItem>
      <Body style={styles.info}>
      </Body>
      <CardItem style={styles.actionWrapper}>
        <Button
          transparent
          onPress={props.swipeLeft}
        >
          <Icon name="close-circle" style={{ color: 'red' }} />
        </Button>
        <Button
          transparent
          onPress={props.swipeRight}
        >
          <Icon name="heart" style={{ color: 'red' }} />
        </Button>
        <Button
          transparent
          onPress={props.onCommentPress}
        >
          <Icon name="chatbubbles" style={{ color: 'red' }} />
        </Button>
        <Button
          onPress={() => {props.setModalVisible(true)}}
          transparent>
          <Icon name="star" style={{ color: 'red' }} />
        </Button>
      </CardItem>
    </Card>
  );
};


const styles = {
  info: {
    marginTop: 4,
  },
  actionWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  }
};

export default ReviewItem;
