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
    // this.dataRef.once("value", (snapshot) => {
    //   snapshot.forEach((childSnapshot) => {
    //     //console.log(childSnapshot);
    //     if(childSnapshot.val().userName == this.state.userName
    //       && childSnapshot.val().password == this.state.password){
    //       this.props.navigation.navigate('Main');
    //       return;
    //     }
    //     else {
    //       alert('User name or password does not exist!');
    //       return;
    //     }
    //   })
    // });
    this.props.navigation.navigate('Main');
  }

  handleRegisterButtonClicked = () => {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <View style={styles.container}>
        <Content contentContainerStyle={styles.formSignIn}>
          <Form >
            <Image
            style={styles.logo}
            resizeMode='stretch'
            source={require('./logo.png')} />
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
              <Text style={{color: 'white'}}>Sign In</Text>
            </Button>
          </Form>
          <Text style={styles.separationText}>
            —————OR—————
          </Text>
          <Button
            block
            bordered
            style={styles.button}
            onPress={this.handleRegisterButtonClicked}>
            <Text>Create New Account</Text>
          </Button>
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
  },
  formSignIn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: Dimensions.get('window').height/3,
    width: Dimensions.get('window').width/1.5,
    marginTop: 10,
    marginBottom: 20,
  },
  separationText: {
    marginTop: 80,
    color: 'grey',
  },
  button: {
    height: 30,
    marginTop: 20,
  },
};
