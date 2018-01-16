import React from 'react';
import { Icon } from 'native-base';
import {DrawerNavigator, StackNavigator, TabNavigator} from 'react-navigation';
import Placeholder from '@components/Common/PlaceHolder';
import NormalToolbar from '@components/Common/Toolbar';
import ReviewToolbar from '@components/Common/ReviewBar';
import ProfileHeader from '@components/Common/ProfileHeader';

//screen
import SplashView from '@container/Splash/SplashView';
import IntroView from '@container/Intro/IntroView';
import LoginView from '@container/Login/LoginView';
import RegisterView from '@container/Register/RegisterView';
import MainView from '@container/Main/MainView';
import HomeView from '@container/Main/Home/HomeView';
import HomeContainer from '@container/Main/Home/HomeContainer';
import CommentView from '@container/Main/Home/CommentView';
import FriendsView from '@container/Main/Friends/FriendsView';
import WishListView from '@container/Main/Profile/WishListView';
import SettingsView from '@container/Main/Profile/SettingsView';
import Activities from '@container/Main/Profile/FollowingView';
import Review from '@container/Main/Review/Review';
import BarcodeScanner from '@container/Demo/BarcodeScanner';

const ReviewView = StackNavigator({
   Review: {
     screen: Review,
     navigationOptions: {
       header: null,//ReviewToolbar,
     }
  }
})

const ProfileStackNavigator = StackNavigator({
  Activities: {
    screen: Activities,
    navigationOptions: {
      header: ProfileHeader,
    }
  },
  WishList: {
    screen: WishListView,
    navigationOptions: {
      header: ProfileHeader,
    }
  },
  Settings: {
  	  screen: SettingsView,
	  navigationOptions: {
	  	  header:ProfileHeader ,
	  }
  }
});

const HomeNav = StackNavigator({
  Home: {
    screen: HomeContainer,
  },
  CommentView: {
    screen: CommentView,
    navigationOptions: {
      header: NormalToolbar,
    }
  },
});

const MainNavigator = TabNavigator({
  Home: {
    screen: HomeNav,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" style={{ color : '#FFF'}}
        />
      ),
      header: null,
    }
  },
  Friends: {
    screen: FriendsView,
    navigationOptions: {
      title: 'Friends',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="people" style={{ color : '#FFF'}}
        />
      ),
    }
  },
  Add: {
    screen: ReviewView,
    navigationOptions: {
      title: 'Add Review',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="add" style={{ color : '#FFF'}}
        />
      ),
      header: null,
    }
  },
  Profile: {
    screen: ProfileStackNavigator,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="contact" style={{ color : '#FFF'}}
        />
      ),
      header: null,
    }
  },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#B48B41',
    inactiveTintColor: '#7D8388',
    // showIcon: false,
    labelStyle: {
      // flex: 1,
      // fontSize: 16,
      // marginTop: 12,
    },
    style: {
      backgroundColor: '#262C36',
    },
  },
});

const AppNavigator = StackNavigator({
  Splash: {
    screen: SplashView,
    header: null,
  },
  Intro: {
    screen: IntroView,
    navigationOptions: {
      header: null,
    }
  },
  Login: {
    screen: LoginView,
    header: null,
  },
  Register: {
    screen: RegisterView,
    navigationOptions: {
      header: NormalToolbar,
    }
  },
  Main: {
    screen: MainNavigator,
  },
  Barcode: {
    screen: BarcodeScanner,
    navigationOptions: {
      header: NormalToolbar,
    }
  },
}, {
  // headerMode: 'none',
  initialRouteName: 'Splash',
});

export default AppNavigator;
