import React, {Component} from 'react';
import { View, StyleShee } from 'react-native';
import {
  Button,
  Text,
} from 'native-base';

export default class LoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigation.navigate('Main')}>
          <Text>Go !</Text>
        </Button>
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
