import React, {Component} from 'react';
import { View, Image } from 'react-native';
import {
  Button,
  Text,
  H3,
  Container, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon,
  Spinner,
} from 'native-base';

import * as firebase from 'firebase';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../../Login/logoGuru.png'),
  },
  {
    text: 'Card One',
    name: 'One',
    image: require('../../Login/logoGuru.png'),
  },
];


export default class HomeView extends Component {
  constructor(props){
    super(props);
    this.dataRef = firebase.database().ref('books');
    this.state = {
      cards: [{
        text: 'Card One',
        name: 'One',
        image: require('../../Login/logoGuru.png'),
      },],
      ready: false,
    }
  }

  listenForProfiles(dataRef) {
       dataRef.on('value', (bookList) => {
         let books = [];
         bookList.forEach((child) => {
         const book = child.val();
          for(let id in book){
            books.push(book[id]);
          }
         });
         this.setState({
           cards: books,
           ready: true,
         });
       });
     }

  componentDidMount() {
    this.listenForProfiles(this.dataRef);
  };
  render() {
    if(!this.state.ready) {
      return <Spinner color='blue' />;
    }
    return (
      <Container >
         <View>
           <DeckSwiper
            ref={(c) => this._deckSwiper = c}
             dataSource={this.state.cards}
             renderItem={item =>
               <Card style={{ elevation: 3 }}>
                 <CardItem>
                   <Left>
                     <Thumbnail source={{uri: item.imageUrl}} />
                     <Body>
                       <Text>{item.title}</Text>
                       <Text note>{item.author}</Text>
                     </Body>
                   </Left>
                 </CardItem>
                 <CardItem cardBody>
                   <Image
                    style={{ height: 400, flex: 1 }} source={{uri: item.imageUrl}}
                    resizeMode='stretch'
                    />
                 </CardItem>
                 <CardItem>
                  <Button
                    onPress={() => this._deckSwiper._root.swipeLeft()}
                    transparent>
                   <Icon name="close-circle" style={{ color: '#ED4A6A' }} />
                  </Button>
                  <Button
                    onPress={() => this._deckSwiper._root.swipeRight()}
                    transparent>
                   <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  </Button>
                 </CardItem>
               </Card>
             }
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
