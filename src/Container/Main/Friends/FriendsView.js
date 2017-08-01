import React, {Component} from 'react';
import {  Image, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux';
import { Container, View, Content, Card, Item,
  CardItem, Thumbnail, Text, Button, Icon, Left,
  Body, Right, H3, List, ListItem } from 'native-base';
import StarRating from 'react-native-star-rating';
import BookItem from '../../../Components/Common/BookItem';
import firebase from '../../../Lib/firebase';

const IMAGE_URL = 'https://www.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/e/veembangnoinho.jpg';

class FriendsView extends Component {

  constructor(props) {
    super(props)    
    this.state = {
      data:[]
    }
  }

  componentWillMount() {

    var data = [];
    // preload data
    let bookRef = firebase.database().ref('books');
    let friendsRef = firebase.database().ref('/users/'+ '8VV9hSvb9tS7jd2E6NDJ2mjBc152' + '/friends');
    // get list friends
    var friends = null;
    friendsRef.once('value').then((snapshotFriend)=> {
      if(snapshotFriend){
        friends = snapshotFriend.val();

        if(friends && friends.length > 0) {
          bookRef.once('value').then((snapshot)=>{
            if(snapshot) {                  
              let books = snapshot.val();
              if(books) {
                for (var key in books) {
                  let book = books[key];
                  if(book.reviews) {
                    this.insertDataWithReviewsAndFriends(book, book.reviews, friends);                        
                  }
                }
              }                  
            }
          });
        }
      }
    });
  }

  insertDataWithReviewsAndFriends(book, reviews, friends) {
    var matchReview = null;
    var matchFriend = null;
    reviews.forEach(function(review) {
      friends.forEach(function(friend) {
        if(review.userId == friend.id) {
          matchReview = review;
          matchFriend = friend;
          return;
        }
      });      
      if(matchReview) return;
    });

    if(matchReview) {
      var reviewRef = firebase.database().ref('/reviews/' + matchReview.id);
      reviewRef.once('value').then((snapshotReview) => {
        if(snapshotReview) {
          let reviewEntity = snapshotReview.val();
          var matchFriendRef = firebase.database().ref('/users/'+ matchFriend.id);
          matchFriendRef.once('value').then((snapshotFriend)=> {
            var newData = this.state.data.concat([{'book':book, 'friend': snapshotFriend.val(), 'review': reviewEntity }]);
            this.setState({
              data: newData
            })
          });
        }
      });
    }    
  }

  handleSelectUser = () => {
      this.props.navigation.navigate('Profile');
  }

  handlePressComment = () => {
      this.props.navigation.navigate('CommentView');
  }
  
  render() {
    return (
      <View style={styles.container}>

        <List dataArray={this.state.data}
            renderRow={(item) =>
              <ListItem>

                <Card>
                  <CardItem>
                    <Left>
                      <TouchableHighlight onPress={this.handleSelectUser}>
                        <Thumbnail style={{ width: 48, height: 48, borderRadius: 24}}
                                  source={{uri: item.friend.avatar}} />
                      </TouchableHighlight>
                      
                      <Item style={{ borderBottomColor: 'transparent'}}>
                        <Text>{item.friend.name}</Text>
                        {/*<Text note>{`rated a book `}</Text>
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
                        />*/}
                      </Item>
                      
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <BookItem uri={item.book.imageLinks ? item.book.imageLinks.thumbnail: null} />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent onPress={this.handlePressLike}>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                      </Button>
                    </Left>
                    <Body>
                    <Button transparent onPress = {this.handlePressComment}>
                      <Icon active name="chatbubbles" />
                      <Text>4 Comments</Text>
                    </Button>
                    </Body>
                    {/*<Right>
                      <Text>11h ago</Text>
                    </Right>*/}
                  </CardItem>
                </Card>

              </ListItem>
            }>
          </List>

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


// Any actions to map to the component?
const mapDispatchToProps = (dispatch) => ({
    addedNewComment: (comment) => dispatch(updateUserInfo(comment))
});

export default connect(null, mapDispatchToProps)(FriendsView);