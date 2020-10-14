import { Provider, TextInput } from "react-native-paper";
import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Picker } from "react-native";
import { theme } from "../core/theme";

function DropDownlist({ parameters, change, ...props }) {
  const array = Object.values(parameters);
  const listItems = array.map((item, index) => (
    <Picker.Item
      key={index}
      label={item}
      value={index}
      style={{ borderColor: "#ffff" }}
    />
  ));
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#7b7777",
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: 10,
    height: 50,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default DropDownlist;
