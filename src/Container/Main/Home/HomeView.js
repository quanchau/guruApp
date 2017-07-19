import React, {Component} from 'react';
import { Image  } from 'react-native';
import { Container, View, DeckSwiper, Spinner, Card, CardItem, Thumbnail, Text, Left, Body, Icon} from 'native-base';
import ReviewItem from '../../../Components/Common/ReviewItem';
import firebase from '../../../Lib/firebase';

const IMAGE_URL = 'https://resizing.flixster.com/pN2StY3TGjz8dIs1VPjKN32I288=/206x305/v1.bTsxMTE2ODA5MjtqOzE3NDU0OzEyMDA7ODAwOzEyMDA';

export default class HomeView extends Component {

  constructor(props){
    super(props);
    this.bookRef = firebase.database().ref('books');
    this.state = {
      reviews: [],
      ready: false,
    }
  }

  componentDidMount = () => {
    this.bookRef.once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          let reviews = [];
          const books = snapshot.val();
          for (let book in books) {
            if (books.hasOwnProperty(book)) {
              reviews.push(books[book]);
            }
          }
          this.setState({
            ready: true,
            reviews,
          });
        }
      })
  };


  render() {
    if(!this.state.ready) {
      return <Spinner color='blue' />;
    }
    console.log('[HomeView.js] render');
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
