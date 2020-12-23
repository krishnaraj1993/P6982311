import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '../components/Button';
var t = require('tcomb-form-native');
var Form = t.form.Form;
var Person = t.struct({
  Disease: t.String,
});
var options = {};
export default class Disease extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  async componentDidMount() {
    const jsonValue = await AsyncStorage.getItem('@user');
    object = JSON.parse(jsonValue);
    id = object.id;
    let response = await fetch(
      "https://communist-technicia.000webhostapp.com/index.php?case=5&user=" + id,
      {
        method: "GET",
      }
    );
    let json = await response.json();
    this.setState({ data: json.data });
  }


  deleteProduct = async (item) => {
    let response = await fetch(
      "https://communist-technicia.000webhostapp.com/index.php?case=7&id=" + item.id,
      {
        method: "GET",
      }
    );
    let json = await response.json();
    Alert.alert(json.data);
  }

  onCreateDisese = async (item) => {
    var value = this.refs.form.getValue();
    console.log(value.Disease);
    if(value.Disease!==null){
    let response = await fetch(
      "https://communist-technicia.000webhostapp.com/index.php?case=7&id=" + item.id,
      {
        method: "GET",
      }
    );
    let json = await response.json();
    Alert.alert(json.data);
    }else{
      Alert.alert("Disease Name should not be empty");
    }
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Person}
          options={options}
        />
        <Button mode="contained" onPress={() => this.onCreateDisese()}>
          Save Disease
        </Button>
        <View style={styles.body}>
          <FlatList
            enableEmptySections={true}
            data={this.state.data}
            keyExtractor={(item) => {
              return (item.id).toString();
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => this.deleteProduct(item)}>
                  <View style={styles.box}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                    <Text style={styles.username}>{item.username}</Text>
                    <View style={styles.iconContent}>
                      <Image style={styles.icon} source={{ uri: "https://icons-for-free.com/iconfiles/png/512/minus+remove+icon-1320183421124253557.png" }} />
                    </View>
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
  container: {
    flex: 1,
    padding: 40,
    marginTop: 20,
    backgroundColor: "#ebf0f7"
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#ebf0f7"
  },
  text: {
    color: '#4f603c'
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#3399ff",
    fontWeight: 'bold'
  },
  image: {
    width: 60,
    height: 60,
  },
  body: {
    width: '100%',
    flex: 1,
    backgroundColor: "#E6E6FA",
  },
  box: {
    marginTop: 5,
    marginBottom: 5,
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
  },
  iconContent: {
    width: 60,
    height: 60,
    marginLeft: 'auto',
    alignItems: 'center'
  },
  icon: {
    top: 10,
    width: 40,
    height: 40,
  }
});
