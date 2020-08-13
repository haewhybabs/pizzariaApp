import {createSwitchNavigator} from 'react-navigation';
import {AuthStack} from './StackNavigator';
import {DrawerNavigator} from './DrawerNavigator';
import Splash from '../components/Splash';

export const SwitchNavigator = createSwitchNavigator(
  {
    Splash: {screen: Splash},
    // Intro: { screen: IntroSlider },
    App: DrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Splash',
  },
);
