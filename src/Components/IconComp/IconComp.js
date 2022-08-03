import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const IconComp = ({iconName, onPress}) => {
  return (
    <View style={styles.bigContainer}>
      <TouchableOpacity onPress={onPress} style={styles.touchContainer}>
        <Icon name={iconName} size={30} />
      </TouchableOpacity>
    </View>
  );
};
export default IconComp;
