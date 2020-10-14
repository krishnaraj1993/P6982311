import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  WeightScreen,
  WeightScreenBMR,
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    WeightScreen,
    WeightScreenBMR,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
