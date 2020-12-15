import React, { memo } from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, ScrollView } from "react-native";
import Background from "../components/Background";
//import { logoutUser } from "../api/auth-api";

const DashboardHeader = (props) => {
  const _handleMore = () => console.log("Shown more");
  const Logout = <Appbar.Action icon="logout" onPress={() => alert("logout")} />;
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
