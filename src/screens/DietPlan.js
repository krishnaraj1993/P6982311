import React, { memo, useEffect, useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import AsyncStorage from '@react-native-community/async-storage';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useCountUp } from 'react-countup';
import { CardViewWithImage } from 'react-native-simple-card-view'

const DietPlan = ({ navigation }) => {
  handleClick =  async (id) => {
    await AsyncStorage.setItem('@planId', "plan"+id);
    navigation.navigate('PlanDetails',{id})
  };
  return (
    <DashboardHeader logout="off" title="Diet Plan">
      <CardViewWithImage
        width={300}
        content={'This sample plan teaches you how to fuel right to get the most out of your workouts.'}
        source={{ uri: 'https://static.toiimg.com/photo/msid-66476758/66476758.jpg' }}
        title={'2000 CALORIE DIET PLAN'}
        imageWidth={300}
        imageHeight={100}
        onPress={() => this.handleClick(2000)}
        roundedImage={false}
        roundedImageValue={50}
        imageMargin={{ top: 2 }}
      />
      <CardViewWithImage
        width={300}
        content={'This sample plan teaches you how to fuel right to get the most out of your workouts.!'}
        source={{ uri: 'https://static.toiimg.com/photo/msid-66476758/66476758.jpg' }}
        title={'1600 CALORIE DIET PLAN'}
        imageWidth={300}
        imageHeight={100}
        onPress={() => this.handleClick(1600)}
        roundedImage={false}
        roundedImageValue={50}
        imageMargin={{ top: 2 }}
      />
    </DashboardHeader>
  );
};

export default memo(DietPlan);

