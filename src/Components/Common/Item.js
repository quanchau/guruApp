import React from 'react';
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

const RItem = (props) => {
  const {item, reviewBook, starCount} = props;


  const getBiggerImage = (url) => `${url}&zoom=7`;

  const likes = () => {
    if(item.likes){
      const numOfLike = item.likes.length;
      if(numOfLike === 1){
        return '1 like';
      }else {
        return `${numOfLike} likes`;
      }
    }
    return '';
  };

  const reviews = () => {
    if(item.reviews){
      const numOfReview = item.reviews.length;
      if(numOfReview === 1){
        return '1 review';
      }else {
        return `${numOfReview} reviews`;
      }
    }
    return '';
  };

  return (
    <Card style={styles.container}>
      <CardItem cardBody style={{ flexDirection: 'column'}}>
        <View style={styles.body}>
          <View style={styles.leftColumn}>
            <Thumbnail
              square
              source={{uri: getBiggerImage(item.imageLinks.thumbnail)}}
              style={styles.cover}
            />
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.author}>{`by ${item.authors[0]}`}</Text>

            <Item style={styles.ratingWrapper}>
              <StarRating
                starSize={14}
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={starCount}
                selectedStar={(rating) => {
                }}
                starColor={'#FD8603'}
              />
              <Text style={styles.vote}>14k voters</Text>
            </Item>
            <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
          </View>
        </View>
      </CardItem>

      <View style={styles.line}/>

      <CardItem>
        <Left>
          <Button transparent>
            <Icon name="thumbs-up" />
            <Text>{likes()}</Text>
          </Button>
        </Left>
        <Left>
          <Button onPress={() => reviewBook(item.id, item.title)} transparent>
            <Icon name="chatbubbles" />
            <Text>{reviews()}</Text>
          </Button>
        </Left>
      </CardItem>
    </Card>
  );
};


const styles = {
  container: {
    padding: 8,
    elevation: 3,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    height: 160,
  },
  leftColumn: {
    flex: 1,
  },
  cover: {
    flex: 1,
    width: null,
    height: null,
  },
  rightColumn: {
    flex: 2,
    paddingLeft: 8,
  },
  title: {
    fontWeight: '600',
    color: '#202A34',
  },
  author: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  vote: {
    fontSize: 10,
    color: '#8A8A8A',
    marginLeft: 8,
  },
  ratingWrapper: {
    marginTop: 16,
    borderBottomColor: 'transparent',
  },
  description: {
    marginTop: 16,
    fontSize: 12,
    color: '#8A8A8A',
  },
  line: {
    height: 1,
    marginTop: 16,
    backgroundColor: '#F1F1F1',
  }
};

export default RItem;
