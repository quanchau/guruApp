import React, {Component} from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import {
  Button,
  Content,
  Form,
  Item,
  Input,
  Thumbnail,Container,
} from 'native-base';

import * as firebase from 'firebase';

export default class LoginView extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      password: '',
    }
    this.dataRef = firebase.database().ref('users');
  }

  handleUserNameChange = (name) => {
    this.setState({
      userName: name,
    })
  }

  handlePasswordChange = (pw) => {
    this.setState({
      password: pw,
    })
  }

  handleSubmit = () => {
    const user = {
      userName: this.state.userName,
      password: this.state.password,
    }
    this.dataRef.push(user);
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <View style={styles.container}>
        <Content contentContainerStyle={styles.formSignIn}>
          <Form >
            <Image
            style={styles.logo}
            resizeMode='stretch'
            source={require('./2096.jpg')} />
            <Item>
              <Input
                onChangeText={this.handleUserNameChange}
                placeholder="Username" />
            </Item>
            <Item last>
              <Input
                onChangeText={this.handlePasswordChange}
                placeholder="Password" />
            </Item>
            <Button
              block
              style={styles.button}
              onPress={this.handleSubmit}>
              <Text style={styles.text}>Create</Text>
            </Button>
          </Form>
        </Content>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  formSignIn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: Dimensions.get('window').height/3,
    width: Dimensions.get('window').width,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    marginTop: 20,
    height: 30,
  },
};
