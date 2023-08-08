import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  cvv: string;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: "",
    cardHolderName: "",
    expirationDate: "",
    cvv: "",
  });

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const isFormValid = () => {
    return (
      formData.cardNumber.trim().length > 0 &&
      formData.cardHolderName.trim().length > 0 &&
      formData.expirationDate.trim().length > 0 &&
      formData.cvv.trim().length > 0
    );
  };

  return (
    <View style={styles.container}>
      <InputField
        label="número do cartão"
        placeholder="1234 5678 9012 2345"
        value={formData.cardNumber}
        onChange={(text) => setFormData({ ...formData, cardNumber: text })}
      />
      <InputField
        label="nome do titular do cartão"
        placeholder="João Carlos Pereira"
        value={formData.cardHolderName}
        onChange={(text) => setFormData({ ...formData, cardHolderName: text })}
      />
      <InputField
        label="vencimento"
        placeholder="04/32"
        value={formData.expirationDate}
        onChange={(text) => setFormData({ ...formData, expirationDate: text })}
      />
      <InputField
        label="código de segurança"
        placeholder="777"
        value={formData.cvv}
        onChange={(text) => setFormData({ ...formData, cvv: text })}
      />
      <Button title="Avançar" onPress={handleSubmit} disabled={!isFormValid()} styleColor={{color: '#fff'}}
        styleBg={{backgroundColor: '#12C2E9'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default Form;
