import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './QuestionCard.Styles';
import AnswerShuffle from './../../Helpers/AnswerShuffle';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {MainContext, useContext} from './../../QuestionContext';
const QuestionCard = ({question, incorrectAnswer, correctAnswer}) => {
  const {questionNumber, setAnswer} = useContext(MainContext);
  const [isChecked, setIsChecked] = useState([]);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    setQuestions(AnswerShuffle(incorrectAnswer, correctAnswer));
  }, [incorrectAnswer]);
  if (questions.length < 1) {
    return <Text>Sorular Yükleniyor</Text>;
  }
  return (
    <View style={styles.bigContainer}>
      <Text style={styles.questionNumber}>Soru : {questionNumber + 1}</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
      <View style={styles.answerContainer}>
        {questions.map((item, index) => {
          return (
            <Text key={index}>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                iconStyle={{borderColor: 'red'}}
                disableBuiltInState
                isChecked={isChecked.includes(item)}
                onPress={() => {
                  setIsChecked(item);
                  setAnswer(item);
                }}
              />
              {item}
            </Text>
          );
        })}
      </View>
    </View>
  );
};
export default QuestionCard;
/*
 
*/
