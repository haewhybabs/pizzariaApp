
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Home from '../components/home/Home';
import Order from '../components/order/Order';
import Profile from '../components/profile/Profile';
import {stackNavigatorConfig} from './Config';


export const AppStack = createStackNavigator(
  {
    Home: {
      screen:Home,
    },
    Order:{
      screen:Order,
    },
    Profile:{
      screen:Profile
    }
  },
  {
    ...stackNavigatorConfig,
    initialRouteName: 'Home',
  },
);

export const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
  },
  {
    ...stackNavigatorConfig,
    initialRouteName: 'Login',
  },
)