import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CustomIcon from './CustonIcon';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  icon?: React.ReactNode; 
  onIconPress?: () => void; 
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, onChange, icon, onIconPress }) => {
      

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
        {icon && onIconPress && (
          <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>
            <CustomIcon size={24} />
          </TouchableOpacity>
        )}
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
          />
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#fff',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff'
      },
      input: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 8,
      },
      iconContainer: {
        marginRight: 8,
      },
  });

  
  export default InputField;