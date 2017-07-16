import {DrawerNavigator, StackNavigator, TabNavigator} from 'react-navigation';
import Placeholder from '@components/Common/PlaceHolder';
import NormalToolbar from '@components/Common/Toolbar';
//screen
import LoginView from '@container/Login/LoginView';
import HomeView from '@container/Home/HomeView';
import BarcodeScanner from '@container/Demo/BarcodeScanner';

const AppNavigator = StackNavigator({
  Login: {
    screen: LoginView,
    header: null,
  },
  Main: {
    screen: HomeView,
    navigationOptions: {
      header: NormalToolbar,
    }
  },
  Barcode: {
    screen: BarcodeScanner,
    navigationOptions: {
      header: NormalToolbar,
    }
  },
}, {
  // headerMode: 'none',
  initialRouteName: 'Login',
});

export default AppNavigator;