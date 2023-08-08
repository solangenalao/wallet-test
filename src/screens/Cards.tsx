import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const image = {uri: './assets/background.png'};

interface FormData {
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  cvv: string;
}

const CardsListScreen: React.FC = () => {
  const handleFormSubmit = (data: FormData) => {
    console.log("Form data:", data);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/background.png')} style={styles.imageBackground}>
        <Text style={styles.heading}>Wallet Test</Text>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
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

export default CardsListScreen;
