import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Button.Styles';

const Button = ({title, onPress}) => {
  return (
    <View style={styles.bigContainer}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
