import React from 'react';
import { Image  } from 'react-native';
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
  return (
    <Card style={{ elevation: 3 }}>
      <CardItem cardBody>
        <Image style={{ height: 300, flex: 1 }} source={item.image} />
      </CardItem>
      <Body style={styles.info}>
        <H3>Gone with the wind</H3>
        <Text note>Margaret Mitchell</Text>
      </Body>
      <CardItem>
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
        <H3>Rate it !</H3>
        <StarRating
          starSize={32}
          //buttonStyle={{height: 24}}
          // starStyle={{height: 24}}
          disabled={false}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          rating={0}
          selectedStar={(rating) => {}}
          starColor={'red'}
        />
      </Body>
      <CardItem style={styles.actionWrapper}>
        <Button transparent>
          <Icon name="chatbubbles" style={{ color: 'red' }} />
        </Button>

        <Button transparent>
          <Icon name="heart" style={{ color: 'red' }} />
        </Button>
      </CardItem>
    </Card>
  );
};


const styles = {
  info: {
    marginTop: 16,
  },
  actionWrapper: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
  }
};

export default ReviewItem;
