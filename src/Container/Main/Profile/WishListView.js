import React, {Component} from 'react';
import { View, Image, ScrollView } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  List,
  ListItem,
} from 'native-base';

const IMAGE_URL='https://images-na.ssl-images-amazon.com/images/I/51eKKDBOXHL._SX305_BO1,204,203,200_.jpg';
const AVATAR_URL = 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg';

export default class WishListView extends Component {
  render() {
    return (
    <ScrollView>
      <Card style={{flex: 0}}>
         <CardItem>
           <Left>
             <Thumbnail source={{uri: AVATAR_URL}} />
             <Body>
              <View style={{flexDirection: 'row'}}>
               <Text>Elon Musk</Text>
               <Text note> added this book</Text>
              </View>
               <Text note>July 23, 2017</Text>
             </Body>
           </Left>
         </CardItem>
         <CardItem>
           <Body>
             <Image source={{uri: IMAGE_URL}} style={{height: 300, width: 200}}/>
           </Body>
         </CardItem>
         <CardItem>
           <Left>
           <Button transparent textStyle={{color: '#87838B'}}>
            <Icon name="heart" style={{ color: 'red' }} />
                 <Text>3</Text>
           </Button>
           <Button transparent textStyle={{color: '#87838B'}}>
             <Icon name="chatbubbles" style={{ color: 'red' }} />
                 <Text>5</Text>
           </Button>
           </Left>
         </CardItem>
       </Card>
      <Card style={{flex: 0}}>
         <CardItem>
           <Left>
             <Thumbnail source={{uri: AVATAR_URL}} />
             <Body>
               <View style={{flexDirection: 'row'}}>
                <Text>Elon Musk</Text>
                <Text note> added this book</Text>
               </View>
               <Text note>July 23, 2017</Text>
             </Body>
           </Left>
         </CardItem>
         <CardItem>
           <Body>
             <Image source={{uri: IMAGE_URL}} style={{height: 300, width: 200}}/>
           </Body>
         </CardItem>
         <CardItem>
           <Left>
           <Button transparent textStyle={{color: '#87838B'}}>
            <Icon name="heart" style={{ color: 'red' }} />
                 <Text>3</Text>
           </Button>
           <Button transparent textStyle={{color: '#87838B'}}>
             <Icon name="chatbubbles" style={{ color: 'red' }} />
                 <Text>5</Text>
           </Button>
           </Left>
         </CardItem>
       </Card>
      <Card style={{flex: 0}}>
         <CardItem>
           <Left>
             <Thumbnail source={{uri: AVATAR_URL}} />
             <Body>
               <View style={{flexDirection: 'row'}}>
                <Text>Elon Musk</Text>
                <Text note> added this book</Text>
               </View>
               <Text note>July 23, 2017</Text>
             </Body>
           </Left>
         </CardItem>
         <CardItem>
           <Body>
             <Image source={{uri: IMAGE_URL}} style={{height: 300, width: 200}}/>
           </Body>
         </CardItem>
         <CardItem>
           <Left>
             <Button transparent textStyle={{color: '#87838B'}}>
              <Icon name="heart" style={{ color: 'red' }} />
                   <Text>3</Text>
             </Button>
             <Button transparent textStyle={{color: '#87838B'}}>
               <Icon name="chatbubbles" style={{ color: 'red' }} />
                   <Text>5</Text>
             </Button>
           </Left>
         </CardItem>
       </Card>
       </ScrollView>
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
