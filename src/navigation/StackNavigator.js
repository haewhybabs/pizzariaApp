
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../components/auth/Login';
import Home from '../components/home/Home';
import {stackNavigatorConfig} from './Config';

export const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
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
    // Registration: {
    //   screen: Registration,
    // },
  },
  {
    ...stackNavigatorConfig,
    initialRouteName: 'Login',
  },
)