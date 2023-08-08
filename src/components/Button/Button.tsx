import React from 'react';
import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled: boolean;
  styleBg?: ViewStyle;
  styleColor?:TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  styleBg,
  styleColor
}) => {

  return (
    <Pressable style={[styles.buttonContainer, styleBg]} onPress={onPress}>
      <Text style={[styles.buttonText, styleColor ]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {    
    width: 300,
    height: 55,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    marginHorizontal: 32,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "PT Sans",
    textAlign: "center",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
  },
});

export default Button;
