import React from 'react';
import { Image } from 'react-native';
import {
  Body,
  Button,
  Header,
  Left,
  Icon,
  Right,
  Title,
  View,
  H3,
  Text,
} from 'native-base';
import StarRating from 'react-native-star-rating';

const IMAGE_URL = 'https://www.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/e/veembangnoinho.jpg';

const BookItem = (props) => {
  var imageLink = props.uri ? props.uri :  IMAGE_URL;
  return (
    <View padder style={styles.container}>
      <Image
        source={{uri : imageLink}}
        style={styles.thumbnail} />
      <View padder >
        <Text numberOfLines={5}>Vẽ em bằng màu nỗi nhớ</Text>
        <Text note numberOfLines={3}>Phạm Hải</Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    height: 200,
  },
  thumbnail: {
    width: 120, height: 200,
  }
};

export default BookItem;
