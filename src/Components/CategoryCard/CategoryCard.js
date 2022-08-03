import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './CategoryCard.Styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {MainContext, useContext} from './../../CategoryContext';

const CategoryCard = ({item}) => {
  const {selectedCategories, setSelectedCategories} = useContext(MainContext);
  return (
    <View style={styles.bigContainer}>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={25}
          fillColor="red"
          unfillColor="#FFFFFF"
          iconStyle={{borderColor: 'red'}}
          disableBuiltInState
          isChecked={selectedCategories.includes(item)}
          onPress={() => {
            setSelectedCategories([item]);
          }}
        />
      </View>
      <Text style={styles.textContainer}>{item}</Text>
    </View>
  );
};
export default CategoryCard;
