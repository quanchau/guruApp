import React, {PropTypes, Component} from 'react';
import { View, Platform } from 'react-native';
import { Constants } from 'expo';
import {addNavigationHelpers} from 'react-navigation';

import AppNavigator from './Navigator';

class NavigatorView extends Component {
  static displayName = 'NavigationView';

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigatorState: PropTypes.shape({
      index: PropTypes.number.isRequired,
      routes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        routeName: PropTypes.string.isRequired
      }))
    }).isRequired
  };

  render() {

    const AppStyle = {
      flex: 1,
      marginTop: Platform.OS === 'android' ? Constants.statusBarHeight/2 : 0
    };

    return (
      <View style={AppStyle}>
        <AppNavigator
          navigation={
            addNavigationHelpers({
              dispatch: this.props.dispatch,
              state: this.props.navigatorState
            })
          }
        />
      </View>
    );
  }
}

export default NavigatorView;
