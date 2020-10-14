import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Picker } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../core/utils';
import InputScrollView from 'react-native-input-scroll-view';
import DashboardHeader from '../components/DashboardHeader';
import DatePicker from 'react-native-datepicker';
import DropDown from "../components/DropDownlist";
import Toast from "../components/Toast";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [dob, setDob] = useState({ value: '', error: '' });
  const [gender, setGender] = useState({ value: '', error: '' });
  const [height, setHeight] = useState({ value: '', error: '' });
  const [weight, setWeight] = useState({ value: '', error: '' });
  const [mobile, setMobile] = useState({ value: '', error: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <DashboardHeader logout="off" title="SignUp">
      <View style={{ width: '100%' }}>
        <InputScrollView style={{ width: '100%' }}>
          <Text style={styles.label}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
          <TextInput
            label="Name"
            returnKeyType="next"
            value={name.value}
            onChangeText={text => setName({ value: text, error: '' })}
            error={!!name.error}
            errorText={name.error}
          />
          <TextInput
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={text => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={text => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
            autoCapitalize="none"
          />

          <DropDown parameters="">
            <Picker
              selectedValue={selectedValue}
              style={styles.input}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </DropDown>
          <DatePicker
            style={{
              width: '100%',
              backgroundColor: '#ffff',
              padding: 5,
              borderRadius: 5,
              borderColor: '#130a0a',
              borderWidth: 1,
            }}
            date={dob.value}
            mode="date"
            placeholder="Date of Birth"
            format="YYYY-MM-DD"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={date => {
              setDob({ value: date, error: '' });
            }}
          />

          <TextInput
            label="Height (Cm)"
            returnKeyType="next"
            value={height.value}
            onChangeText={text => setHeight({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
          />
          <TextInput
            label="Weight (Kg)"
            returnKeyType="next"
            value={weight.value}
            onChangeText={text => setWeight({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
          />
          <TextInput
            label="Mobile Number"
            returnKeyType="next"
            value={mobile.value}
            onChangeText={text => setMobile({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
          />
          <Button
            loading={loading}
            mode="contained"
            onPress={_onSignUpPressed}
            style={styles.button}
          >
            Sign Up
          </Button>
        </InputScrollView>
      </View>

      <Toast message={error} onDismiss={() => setError('')} />
    </DashboardHeader>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);