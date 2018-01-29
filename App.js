import React from 'react';
import { Provider } from 'react-redux';
import { Platform, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import NavigatorViewContainer from './src/Navigator/NavigatorViewContainer';
import store from './src/Redux/Store';
import firebase from './src/Lib/firebase';

export default class App extends React.Component {

  state = {fontsAreLoaded: false};

  async componentWillMount() {

    //configureAxios();
   /** const config = {
      apiKey: "AIzaSyDHOZk_tADJSgWecEw_RS8X9c55hu0rL1c",
      authDomain: "react-firebase-ebcf7.firebaseapp.com",
      databaseURL: "https://react-firebase-ebcf7.firebaseio.com",
      projectId: "react-firebase-ebcf7",
      storageBucket: "react-firebase-ebcf7.appspot.com",
      messagingSenderId: "101790074065"
    }; */

	var config = {
    apiKey: "AIzaSyDd91F9LFrLElsI1tkVkFPfw41WoQejREM",
    authDomain: "guruapp-c7b87.firebaseapp.com",
    databaseURL: "https://guruapp-c7b87.firebaseio.com",
    projectId: "guruapp-c7b87",
    storageBucket:  "guruapp-c7b87.appspot.com",
    messagingSenderId: "230893462217"
  };
   // firebase.initializeApp(config);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
	
    }
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({fontsAreLoaded: true});
  }

  componentDidMount = () => {
    this.initBackButton();
  };

  initBackButton = () => {
    if (Platform.OS !== 'android') return;
    BackHandler.addEventListener('hardwareBackPress', this.onBackButton);
  };

  onBackButton = () => {
    const state = store.getState();
    const navigationState = state.nav;   // < the name of your reducer

    if(navigationState && navigationState.index > 1) {
      store.dispatch(NavigationActions.back());
      return true;  // will not exit, just go back
    }
    else {
      return false;   // will exit
    }
  };

  render() {
    if(!this.state.fontsAreLoaded){
      return null;
    }
    return (
      <Provider store={store}>
        <NavigatorViewContainer />
      </Provider>
    );
  }
}
