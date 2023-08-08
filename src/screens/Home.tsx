import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button/Button";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  AddCardScreen: undefined;
  CardListScreen: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/background.png')} style={styles.imageBackground}>
      <Text style={styles.heading}>Wallet Test</Text>
      <Button
        title="meus cartões"
        onPress={() => navigation.navigate("CardListScreen")}
        disabled={false}
        styleColor={{color: '#fff'}}
        styleBg={{backgroundColor: '#12C2E9'}}
      />
      <Button
        title="cadastrar cartão"
        onPress={() => navigation.navigate("AddCardScreen")}
        disabled={false}
        styleColor={{color: '#142995'}}
        styleBg={{backgroundColor: '#A5FF32'}}
      />
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

export default HomeScreen;
