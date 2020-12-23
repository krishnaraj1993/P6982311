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
  DietPlan,
  PlanDetails,
  Profile,
  Congratulation,
  Disease,
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
    DietPlan,
    PlanDetails,
    Profile,
    Congratulation,
    Disease,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
