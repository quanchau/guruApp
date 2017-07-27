import React, {Component} from 'react';
import { View } from 'react-native';
import {
  Button,
  Text,
  H3,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Item,
  Input
} from 'native-base';
import {Keyboard, KeyboardAvoidingView, ScrollView} from 'react-native';
import {connect} from 'react-redux';

const URL = 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg';

class CommentView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textTyping:''
    }
  }

  handlePressPost = () => {
    this.setState({
      textTyping:''
    });
    Keyboard.dismiss();
  }

  handleTextChange = (text) => {
    this.setState({
      textTyping:text
    });
  }

  render() {
    return (

      <View >
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={64}>
        <ScrollView>
        <List contentContainer={{flexDirection: 'column'}} >
          <ListItem avatar  >
            <Left>
              <Thumbnail source={{ uri: URL }} />
            </Left>
            <Body>
              <Text>Elon Musk</Text>
              <Text note>Commented on a review for book Blink . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: URL }} />
              </Left>
              <Body>
                <Text>Elon Musk</Text>
                <Text note>Commented on a review for book Blink . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: URL }} />
              </Left>
              <Body>
                <Text>Elon Musk</Text>
                <Text note>Commented on a review for book Blink . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: URL }} />
              </Left>
              <Body>
                <Text>Elon Musk</Text>
                <Text note>Commented on a review for book Blink . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: URL }} />
              </Left>
              <Body>
                <Text>Elon Musk</Text>
                <Text note>Commented on a review for book Blink . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: URL }} />
              </Left>
              <Body>
                <Text>Elon Musk</Text>
                <Text note>Commented on a review for book Blink . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
        </List>
        <Item regular>
           <Input
            autoFocus={false}
            autoCorrect={false}
            placeholder='Add a comment'
            value={this.state.textTyping} 
            onChangeText={this.handleTextChange}>
            </Input>
            <Button transparent onPress={this.handlePressPost}>
             <Text>Post</Text>
            </Button>
        </Item>
        </ScrollView>
        </KeyboardAvoidingView>
      </View>
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

// Any actions to map to the component?
const mapDispatchToProps = (dispatch) => ({
    addNewComment: (comment) => dispatch(updateUserInfo(comment))
});

export default connect(null, mapDispatchToProps)(CommentView);