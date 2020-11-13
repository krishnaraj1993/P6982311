import React, { memo, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Picker, Image } from 'react-native';
import DashboardHeader from '../components/DashboardHeader';
import AsyncStorage from '@react-native-community/async-storage';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useCountUp } from 'react-countup';
import DropDown from '../components/DropDownlist';
import { Avatar, Divider, Button, Card, Title, Paragraph } from 'react-native-paper';

const DietPlan = ({ navigation }) => {

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  return (
    <DashboardHeader logout="off" title="BMI and BMR Report">
      
    </DashboardHeader>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pageText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    width: '120%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    backgroundColor: '#edf1f5',
    height: 200,
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    width: '120%',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#edf1f5',
    borderWidth: 1,
    borderColor: 'red',
    height: 20,
  },
  text: {
    textAlign: 'center'
  }
});

export default memo(DietPlan);

