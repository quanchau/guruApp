import React, {Component} from 'react';
import { Image  } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon} from 'native-base';
import ReviewItem from '../../../Components/Common/ReviewItem';

import { getListBooks, addBook } from '../../../Lib/firebase';

const IMAGE_URL = 'https://resizing.flixster.com/pN2StY3TGjz8dIs1VPjKN32I288=/206x305/v1.bTsxMTE2ODA5MjtqOzE3NDU0OzEyMDA7ODAwOzEyMDA';

import * as firebase from 'firebase';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../../Login/logo.png'),
  },
  {
    text: 'Card One',
    name: 'One',
    image: require('../../Login/logo.png'),
  },
];


export default class HomeView extends Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: [
        {
          text: 'Card One',
          name: 'One',
          image: { uri: IMAGE_URL},
        },
        {
          text: 'Card two',
          name: 'two',
          image: { uri: IMAGE_URL},
        },
        {
          text: 'Card three',
          name: 'three',
          image: { uri: IMAGE_URL},
        },
      ],
      ready: false,
    }
  }

  componentDidMount = () => {

  };


  render() {
    if(!this.state.ready) {
      return <Spinner color='blue' />;
    }
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={this.state.reviews}
            renderItem={item => <ReviewItem item={item} />}
          />
        </View>
      </Container>      
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
