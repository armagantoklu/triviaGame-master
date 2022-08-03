import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.Styles';

const Input = ({placeholder, value, onChangeText}) => {
  return (
    <View style={styles.bigContainer}>
      <TextInput
        style={styles.inputContainer}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={'white'}
      />
    </View>
  );
};
export default Input;
