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
import firebase from '../../Lib/firebase';

export default class LoginView extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleUserNameChange = (name) => {
    this.setState({
      email: name,
    })
  }

  handlePasswordChange = (pw) => {
    this.setState({
      password: pw,
    })
  }

  handleSubmit = () => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    firebase.register(user)
      .then((response) => {
        console.log('[RegisterView.js] register success', response);
        this.navigation.navigate('Main');
      })
      .catch(error => {
        console.log('[RegisterView.js] register error', error);
        alert(error.message)
      })
  };

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
                autoCorrect={false}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={this.handleUserNameChange}
                placeholder="Email" />
            </Item>
            <Item last>
              <Input
                autoCorrect={false}
                secureTextEntry
                autoCapitalize="none"
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
