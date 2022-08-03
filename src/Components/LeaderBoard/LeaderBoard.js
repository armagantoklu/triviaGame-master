import React from 'react';
import {View, Text} from 'react-native';
import styles from './LeaderBoard.Styles';
const LeaderBoard = ({arr}) => {
  return (
    <View style={styles.bigContainer}>
      <Text style={styles.pointContainer}>Puan : {arr.point}</Text>
      <Text style={styles.difficultyContainer}>
        Zorluk :{' '}
        {arr.difficulty == 'easy'
          ? 'Kolay'
          : arr.difficulty == 'medium'
          ? 'Orta'
          : 'Zor'}
      </Text>
      <Text style={styles.timeContainer}>Zaman : {arr.seconds}</Text>
    </View>
  );
};
export default LeaderBoard;
