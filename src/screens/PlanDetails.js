import React, { memo, useEffect, useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import { View, StyleSheet, Text, Picker, Image, ScrollView } from 'react-native';
import Button from '../components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useCountUp } from 'react-countup';
import { CardViewWithImage } from 'react-native-simple-card-view'


const PlanDetails = ({ navigation, route }) => {
  var id = 2;
  var imageurl = <Image source={require('../assets/2000.png')} style={{ width: 380, height: 1000 }} />
  if (Object.values(navigation.state.params)[0] == 1600) {
    id = 1;
    imageurl = <Image source={require('../assets/1600.png')} style={{ width: 380, height: 1000 }} />
  }
  handleClick = async () => {
    var plan = Object.values(navigation.state.params)[0];
    const jsonValue = await AsyncStorage.getItem('@user');
    object = JSON.parse(jsonValue);
    id = object.id;
    let response = await fetch(
      "https://communist-technicia.000webhostapp.com/index.php?planId=" +
      plan + "&case=4&user="+id,
      {
        method: "GET",
      }
    );
    let json = await response.json();
    if (json.status === 1) {
      //alert("Plan updated successfully");
      navigation.navigate('Congratulation')
    } else {
      return {
        error: "Invalid email address format.",
      };
    }
  };
  return (
    <DashboardHeader logout="off" title="Diet Plan">
      <View style={styles.container}>
        <ScrollView>

          {imageurl}

        </ScrollView>

      </View>
      <Button mode="contained" onPress={() => this.handleClick()} style={styles.button}>Subscribe</Button>
    </DashboardHeader>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 800,
  },
  button: {
    top: -10,
  },

})
export default memo(PlanDetails);

