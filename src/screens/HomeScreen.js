import React, { memo, useEffect } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({ navigation }) => {
  useEffect(function() {
    async function checkLogin() {
      const jsonValue = await AsyncStorage.getItem('@user');
      jsonValue != null ? JSON.parse(jsonValue) : null;

      if (jsonValue != null) {
        object = JSON.parse(jsonValue);
        if(object.id!=null){
          navigation.navigate('Dashboard')
        }
      }
    }
    checkLogin();
  }, []);

  return (
    <Background>
      <Logo />
      <Header>Login Template</Header>

      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  );
};

export default memo(HomeScreen);
