import React, { memo } from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, ScrollView } from "react-native";
import Background from "../components/Background";
import AsyncStorage from '@react-native-community/async-storage';

const DashboardHeader = (props) => {
  const logout = async (props) => {
    //await AsyncStorage.setItem('@user', "");
    props.logoutClick;
  };
  const Logout = <Appbar.Action icon="logout" onPress={() => logout(props)} />;
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title={props.title} />
        {props.logout === 'off' ? null : Logout}
      </Appbar.Header>
      <Background>
        {props.children}
      </Background>
    </>
  );
};
export default memo(DashboardHeader);
