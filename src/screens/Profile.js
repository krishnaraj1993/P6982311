import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    const jsonValue = await AsyncStorage.getItem('@user');
    jsonValue != null ? JSON.parse(jsonValue) : null;
    subscribedPlan = object.subscribedPlan == null ? 'No Plan' : object.subscribedPlan;
    height = object.height;
    weight = object.weight;
    moilenumber = object.moilenumber;
    username = object.username;
    data = [
      { id: 1, image: "https://img.icons8.com/color/70/000000/administrator-male.png", title: "Profile Username: "+username },
      { id: 2, image: "https://img.icons8.com/color/70/000000/cottage.png", title: "Subscipption Plan: "+subscribedPlan },
      { id: 3, image: "https://img.icons8.com/color/70/000000/filled-like.png", title: "Height : "+height },
      { id: 4, image: "https://img.icons8.com/color/70/000000/filled-like.png", title: "Weight : "+weight },
      { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxG5Ul5Em_I2mjT70vRCZmqkGcICShh0XF3g&usqp=CAU", title: "Mobile Number : "+moilenumber },
    ],
      this.setState({ data: data });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar} source={require('../assets/men.jpg')} />
          </View>
        </View>

        <View style={styles.body}>
          <FlatList
            style={styles.container}
            enableEmptySections={true}
            data={this.state.data}
            keyExtractor={(item) => {
              return (item.id).toString();
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  <View style={styles.box}>
                    <Image style={styles.icon} source={{ uri: item.image }} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                  </View>
                </TouchableOpacity>
              )
            }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#8282ee",
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#1a1abe",
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
    color: "#1a1abe",
    marginLeft: 4
  },
  btn: {
    marginLeft: 'auto',
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor: "#E6E6FA",
  },
  box: {
    padding: 5,
    marginBottom: 2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2
  },
  username: {
    color: "#20B2AA",
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10
  }
});