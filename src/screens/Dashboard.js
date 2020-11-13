import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';
import DashboardHeader from '../components/DashboardHeader';
import AsyncStorage from '@react-native-community/async-storage';

const items = [
  { name: 'BMI & BMR Report', background: '#3498db', icon: 'gratipay' },
  { name: 'Diet Plan', background: '#ef0202', icon: 'gratipay' },
  //{ name: 'Lovely', background: '#efcf02', icon: 'heart' },
  //{ name: 'Team', background: '#02ef1d', icon: 'users' },
  //{ name: 'Friends', background: '#02cbef', icon: 'group' },
  //{ name: 'Calendars', background: '#ef5802', icon: 'calendar' },
];



const DashboardComponent = ({navigation}) => {
  _card = async el => {
    const jsonValue = await AsyncStorage.getItem('@user');
    jsonValue != null ? JSON.parse(jsonValue) : null;
    if (el.name === 'BMI & BMR Report') {
      navigation.navigate('WeightScreen')
    }
    if (el.name === 'Diet Plan') {
      navigation.navigate('DietPlan')
    }
  };
return(
  <DashboardHeader logout="off" title="SignUp">
    <Dashboard
      style={{ width: '100%' }}
      items={items}
      background={true}
      card={this._card}
      column={2}
    />
  </DashboardHeader>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000005',
  },
});

export default memo(DashboardComponent);
