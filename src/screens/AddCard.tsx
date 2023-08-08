import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Form from "../components/Form/Form";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const image = {uri: './assets/background.png'};

interface FormData {
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  cvv: string;
}

const AddCardScreen: React.FC = () => {

  const handleFormSubmit = (data: FormData) => {
    console.log("Form data:", data);
    console.log(uuidv4())
    fetch('http://localhost:3000/cards', {
      method: 'POST',
      body: JSON.stringify({
        body: data,
        id: 234,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/background.png')} style={styles.imageBackground}>
        <Text style={styles.heading}>Wallet Test</Text>
        <Form onSubmit={handleFormSubmit} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  heading: {
    fontFamily: "PT Sans Caption",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 32,
    color: "#fff",
  },
});

export default AddCardScreen;
