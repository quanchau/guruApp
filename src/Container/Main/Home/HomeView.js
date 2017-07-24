import React, {Component} from 'react';
import { Image, Modal, TouchableHighlight,  } from 'react-native';
import { Container, Button, View, DeckSwiper, Spinner, Card, CardItem, Thumbnail, Text, Left, Body, Icon} from 'native-base';
import ReviewItem from '../../../Components/Common/ReviewItem';
import firebase from '../../../Lib/firebase';
import StarRating from 'react-native-star-rating';

const IMAGE_URL = 'https://resizing.flixster.com/pN2StY3TGjz8dIs1VPjKN32I288=/206x305/v1.bTsxMTE2ODA5MjtqOzE3NDU0OzEyMDA7ODAwOzEyMDA';

export default class HomeView extends Component {

  constructor(props){
    super(props);
    this.bookRef = firebase.database().ref('books');
    this.state = {
      reviews: [],
      ready: false,
      modalVisible: false,
    }
  }
  setModalVisible = (visible) => {
    console.log(visible);
    this.setState({
      modalVisible: visible
    });
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

  onCommentPress = () => {
    this.props.navigation.navigate('CommentView');
  }

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
            ref={(c) => this._deckSwiper = c}
            renderItem={item =>
              <ReviewItem
                item={item}
                swipeLeft={() => this._deckSwiper._root.swipeLeft()}
                swipeRight={() => this._deckSwiper._root.swipeRight()}
                onCommentPress={this.onCommentPress}
                setModalVisible={this.setModalVisible}
              />
            }
          />
          <Modal
           animationType={"fade"}
           transparent={false}
           visible={this.state.modalVisible}
           >
           <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
             <StarRating
               starSize={70}
               disabled={false}
               emptyStar={'ios-star-outline'}
               fullStar={'ios-star'}
               halfStar={'ios-star-half'}
               iconSet={'Ionicons'}
               maxStars={5}
               rating={3.5}
               selectedStar={(rating) => {}}
               starColor={'gold'}
             />
             <View style={{marginTop:20}}>
               <Button
                bordered
                onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                 <Text>Rate</Text>
               </Button>
             </View>
          </View>
         </Modal>
        </View>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
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
