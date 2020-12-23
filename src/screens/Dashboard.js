import React, { memo } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Dashboard from 'react-native-dashboard';
import DashboardHeader from '../components/DashboardHeader';
import AsyncStorage from '@react-native-community/async-storage';

const items = [
  { name: 'Profile', background: '#efcf02', icon: 'users' },
  { name: 'BMI & BMR Report', background: '#3498db', icon: 'gratipay' },
  { name: 'Diet Plan', background: '#ef0202', icon: 'gratipay' },
  { name: 'Disease', background: '#02ef1d', icon: 'calendar' },
  //{ name: 'Friends', background: '#02cbef', icon: 'group' },
  //{ name: 'Calendars', background: '#ef5802', icon: 'calendar' },
];



const DashboardComponent = ({ navigation }) => {
  _card = async el => {
    const jsonValue = await AsyncStorage.getItem('@user');
    jsonValue != null ? JSON.parse(jsonValue) : null;
    if (el.name === 'BMI & BMR Report') {
      navigation.navigate('WeightScreen')
    }
    if (el.name === 'Diet Plan') {
      navigation.navigate('DietPlan')
    }
    if (el.name === 'Profile') {
      navigation.navigate('Profile')
    }
    if(el.name === 'Disease'){
      navigation.navigate('Disease')
    }
  };
  const onlogout = (navigation) => {
    navigation.navigate('Login')
  };
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../assets/icon.png')}/>
      <Dashboard
        style={{ width: '150%' }}
        items={items}
        background={true}
        card={this._card}
        column={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:100,
    backgroundColor: '#00000005',
  },
});

export default memo(DashboardComponent);
