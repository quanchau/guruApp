import React, {Component} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Button,
  Text,
  Content,
  Form,
  Item,
  Input,
  Thumbnail,Container,
} from 'native-base';

export default class LoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Container>
        <Content contentContainerStyle={styles.formSignIn}>
          <Form >
            <Image
            style={styles.logo}
            source={require('./logoGuru.png')} />
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Main')}>
              <Text>Sign In</Text>
            </Button>
          </Form>
        </Content>
        </Container>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  formSignIn: {
    paddingTop: 20,
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: 200,
    marginTop: 10,
    marginBottom: 50,
  },
  button: {
    flex: 1,
    marginTop: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
};
