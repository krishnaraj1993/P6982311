import React, { memo, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Picker,Image } from 'react-native';
import DashboardHeader from '../components/DashboardHeader';
import AsyncStorage from '@react-native-community/async-storage';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useCountUp } from 'react-countup';
import DropDown from '../components/DropDownlist';
import { DataTable, Divider, Card} from 'react-native-paper';


const WeightScreen = ({ navigation }) => {
  const [bmiNa, setBMINa] = useState({ value: 0 });
  const [bmiLa, setBMILa] = useState({ value: 0 });
  const [bmiMa, setBMIMa] = useState({ value: 0 });
  const [bmiVa, setBMIVa] = useState({ value: 0 });
  const [bmiEa, setBMIEa] = useState({ value: 0 });
  const [selectedValue, setSelectedValue] = useState({ value: 0 });
  const { countUp } = useCountUp({ end: 1234567 });

  const [bmi, setBMI] = useState({ value: 0 });
  const [dsc, setBMIDsc] = useState({ value: 0 });

  useEffect(function () {
    i = 0;
    async function getUsers() {
      const jsonValue = await AsyncStorage.getItem('@user');
      jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log(jsonValue);
      object = JSON.parse(jsonValue);
      gender = object.gender;
      weight = object.weight;
      height = object.height;
      dob = object.dob;
      calculate(height, weight);
      //==================================================

      if (gender === 'M') {
        console.log('in');
        var BMR =
          66 + 6.23 * weight + 12.7 * height - 6.8 * this.calculate_age(dob);
        if ('noActivity') {
          BMR = BMR * 1.2;
          setBMINa({ value: BMR });
        }
        if ('lightActivity') {
          BMR = BMR * 1.37;
          setBMILa({ value: BMR });
        }
        if ('moderateActivity') {
          BMR = BMR * 1.55;
          setBMIMa({ value: BMR });
        }
        if ('veryActivite') {
          BMR = BMR * 1.725;
          setBMIVa({ value: BMR });
        }
        if ('extremelyActivite') {
          BMR = BMR * 1.9;
          setBMIEa({ value: BMR });
        }
      } else {
        var BMR =
          655 + 4.35 * weight + 4.7 * height - 4.7 * this.calculate_age(dob);
        if ('noActivity') {
          BMR = BMR * 1.2;
          setBMINa({ value: BMR });
        }
        if ('lightActivity') {
          BMR = BMR * 1.37;
          setBMILa({ value: BMR });
        }
        if ('moderateActivity') {
          BMR = BMR * 1.55;
          setBMIMa({ value: BMR });
        }
        if ('veryActivite') {
          BMR = BMR * 1.725;
          setBMIVa({ value: BMR });
        }
        if ('extremelyActivite') {
          BMR = BMR * 1.9;
          setBMIEa({ value: BMR });
        }
      }
      //=================================================
    }

    calculate = (height, weight) => {
      //calculation
      var result = (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
      result = result.toFixed(2);

      //display result
      setBMI({ value: result })
      if (result < 18.5) {
        setBMIDsc({ value: 'Underweight' })
      }
      else if (result >= 18.5 && result < 25) {
        setBMIDsc({ value: 'Normal weight' })
      }
      else if (result >= 25 && result < 30) {
        setBMIDsc({ value: 'Overweight' })
      }
      else if (result >= 30) {
        setBMIDsc({ value: 'Obese' })
      }
      else {
        alert('Incorrect Input!');
        setBMIDsc({ value: '' })
      }
    }

    calculate_age = dob1 => {
      var today = new Date();
      var birthDate = new Date(dob1);
      var age_now = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age_now--;
      }
      console.log(age_now);
      return age_now;
    };
    getUsers();
  }, []);

  return (
    <DashboardHeader logout="off" title="BMI and BMR Report">
      
      <Text style={styles.pageText}>Are you healty ?</Text>
      <View style={styles.container}>
      <Text  style={styles.text}>Know your BMR</Text>
        <DropDown parameters="">
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue({ value: itemValue })
            }
          >
            <Picker.Item label="Your Activity status" value="0" />
            <Picker.Item label="No Activity" value="noActivity" />
            <Picker.Item label="Light Activity" value="lightActivity" />
            <Picker.Item label="Moderate Activity" value="moderateActivity" />
            <Picker.Item label="Very Activity" value="veryActivite" />
            <Picker.Item label="Extremely Activity" value="extremelyActivite" />
          </Picker>
        </DropDown>
        {selectedValue.value === '0' ? (
          <Text style={styles.titleText}>Please select sctivity status</Text>
        ) : null}
        {selectedValue.value === 'noActivity' ? (
          <Text style={styles.titleText}>Your BMR {bmiNa.value}</Text>
        ) : null}
        {selectedValue.value === 'lightActivity' ? (
          <Text style={styles.titleText}>Your BMR {bmiLa.value}</Text>
        ) : null}
        {selectedValue.value === 'moderateActivity' ? (
          <Text style={styles.titleText}>Your BMR {bmiMa.value}</Text>
        ) : null}
        {selectedValue.value === 'veryActivite' ? (
          <Text style={styles.titleText}>Your BMR {bmiVa.value}</Text>
        ) : null}
        {selectedValue.value === 'extremelyActivite' ? (
          <Text style={styles.titleText}>Your BMR {bmiEa.value}</Text>
        ) : null}
      
      </View>
      
      <Divider />
      <View style={styles.container_bmi}>
      <Text style={styles.text}>Know your BMI</Text>
      <Divider />
      <Text style={styles.titleText}>Your BMI {bmi.value}</Text>

      <Image source = {require('../assets/chart.jpg')} style = {{ width: 350, height: 150 }}/>
      </View>
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
  pageText:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    width:'120%',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    backgroundColor:'#edf1f5',
    height:200,
    justifyContent: 'center',
  },
  container_bmi: {
    flex: 1,
    width:'120%',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    backgroundColor:'#edf5ed',
    height:200,
    justifyContent: 'center',
  },
  text:{
    textAlign: 'center'
  }
});

export default memo(WeightScreen);

