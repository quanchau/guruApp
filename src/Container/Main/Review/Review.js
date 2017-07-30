import React, {Component} from 'react';
import { View, Image, Dimensions, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import {connect} from 'react-redux';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Header,
  Left,
  Body,
  Right,
  Title,
  Item,
  Input,
  Textarea,
  Form
} from 'native-base';
import { ImagePicker } from 'expo';
import ReviewToolbar from '@components/Common/ReviewBar';
import firebase from '../../../Lib/firebase';

const IMAGE_URL = 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg';

let {width, height} = Dimensions.get('window')

class Review extends Component {  
  state = {
    image: null,
    noImage: require('./icon/no-image-box.png'),
    comment:'',
    bookName:'',
    authorName:''
  };

  handleTextInputChangeComment = (text) => {
    this.setState({
      comment:text
    });
  }

  handleTextInputChangeBookName = (text) => {
    this.setState({
      bookName:text
    });
  }

  handleTextInputChangeAuthorName = (text) => {
    this.setState({
      authorName:text
    });
  }

  handlePressPost = () => {
    Keyboard.dismiss();


    if(this.validateInfo()) {      
      var newBookRef = firebase.database().ref('books').push();
      var key = newBookRef.key;
      newBookRef.set({
        id: key,
        title: this.state.bookName,
        authors: [this.state.authorName],

        ///// need add more info of book  ///////

      }).then((error)=>{
        if(error) {
          alert('Fail to submit new book, please try again!')
        } else {
          this.setState({
            image:null,
            comment:'',
            authorName:'',
            bookName:''
          })
        }
      }) ;
    }
  }

  validateInfo = () => {
    if(this.state.image == null) {
      alert('Please input image for book');
      return false;
    }
    if(this.state.comment.length == 0) {
      alert('Please input your opinion about book');
      return false;
    }
    if(this.state.bookName.length == 0){
      alert('Please input name book');
      return false;      
    }
    if(this.state.bookName.length == 0){
      alert('Please input author book');
      return false;      
    }

    return true;
  }

  _pickImage = async () => {
   let result = await ImagePicker.launchImageLibraryAsync({
     allowsEditing: true,
     aspect: [4, 3],
   });

   if (!result.cancelled) {
     this.setState({ image: result.uri });
   }
 };

  render() {
    let { image } = this.state;
    return (
      <View style={styles.container} >
        <Header>
          <Left style={{flex: 0}}>
          
          </Left>
          <Body>
          <Title>Add Review</Title>
          </Body>
          <Right style={{flex: 0}}>
            <Button transparent onPress={this.handlePressPost}>
              <Title>Post</Title>
            </Button>
          </Right>
        </Header>
    
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={64}>        
        <ScrollView>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: IMAGE_URL}} />
              <Body>
                <Text>Elon Musk</Text>
              </Body>
            </Left>
            <Right>
            </Right>
          </CardItem>
          <CardItem >
            <Body>
            <Item style={styles.textBox}>
              <Input
                style={styles.input}
                multiline={true}
                enablesReturnKeyAutomatically= {true}
                numberOfLines={10}
                value={this.state.comment}
                placeholder='Want to review a book, Elon?'
                onChangeText={this.handleTextInputChangeComment}
                autoFocus={true}
              />
            </Item>
            <Item style={{marginTop:4, marginBottom:4}}>
              <Button
                transparent
                onPress={this._pickImage}
                style={{marginBottom:4, height: 200 }}
              >
                  <Image source={ image?{ uri: image }: this.state.noImage} style={{ width: '100%', height: 200 }} />
              </Button>
            </Item>
            </Body>
          </CardItem>
          <CardItem style={{flex:1, flexDirection:'column', alignItems:'flex-start'}}>
            <Item>
              <View style={{left:0, right:0, width:'100%'}}>
                <Text>Book Name:</Text>
                  <Input 
                  placeholder="Name of your book"
                  autoCorrect={false}
                  value={this.state.bookName}
                  onChangeText={this.handleTextInputChangeBookName}
                />            
             
                <Text>Author Name:</Text>
                <Input 
                  placeholder="Name of author"
                  autoCorrect={false}
                  value={this.state.authorName}
                  onChangeText={this.handleTextInputChangeAuthorName}
                />
              </View>    
            </Item>
          </CardItem>          
          <CardItem>          
          </CardItem>          
        </Card>
        </ScrollView>
        </KeyboardAvoidingView>        
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  textBox: {
    height: 200,    
  },
  input: {
    height: 200,
    alignItems: 'flex-start',
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
    addedNewBook: (newBook) => dispatch(addedNewBook(newBook))
});

export default connect(null, mapDispatchToProps)(Review);