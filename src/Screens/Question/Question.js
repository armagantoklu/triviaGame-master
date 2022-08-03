import React, {useEffect, useState} from 'react';
import {Text, FlatList, View, Alert} from 'react-native';
import {CountDown} from 'react-native-customizable-countdown';
import Button from '../../Components/Button';
import styles from './Question.Styles';
import QuestionCard from '../../Components/QuestionCard';
import {MainContext, useContext} from './../../QuestionContext';
import {FatherContext} from '../../Router';
const Question = ({navigation, route}) => {
  const {questions, difficulty} = route.params;
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answer, setAnswer] = useState('');
  const [joker, setJoker] = useState(0);
  const [point, setPoint] = useState(0);
  const {counter, setCounter} = useContext(FatherContext);
  const [click, setClick] = useState(false);
  let CountRest;
  console.log(questions);
  const data = {
    questionNumber,
    setQuestionNumber,
    answer,
    setAnswer,
  };
  return (
    <MainContext.Provider value={data}>
      <View style={styles.bigContainer}>
        <View style={styles.countDown}>
          <CountDown
            ref={ref => (CountRest = ref)}
            initialSeconds={15}
            onTimeOut={() => {
              navigation.navigate('ResultScreen', {point: point});
            }}
            onChange={(hours, minute, seconds) => {
              if (click) {
                setClick(false);
                CountRest.resetCountDown();
                const sec = 15 - seconds;
                setCounter(sec + counter);
              }
            }}
            digitFontSize={30}
            width={250}
            height={75}
            hoursLabel={'hrs'}
            minutesLabel={'min'}
            backgroundColor={'white'}
            labelColor="black"
            labelFontWeight="bold"
            labelPosition="top"
          />
        </View>

        <FlatList
          data={[questions[questionNumber]]}
          renderItem={({item}) => (
            <QuestionCard
              question={item.question}
              correctAnswer={item.correct_answer}
              incorrectAnswer={
                joker == 1
                  ? item.incorrect_answers.splice(0, 1)
                  : item.incorrect_answers
              }
            />
          )}
        />
        <View style={styles.buttonContainer}>
          {joker == 0 && (
            <Button title={'%50 Joker'} onPress={() => setJoker(joker + 1)} />
          )}

          <Button
            onPress={() => {
              setClick(true);
              if (joker == 1) {
                setJoker(joker + 1);
              }
              if (questionNumber == 9) {
                if (answer == questions[questionNumber].correct_answer) {
                  setPoint(point + 10);
                  navigation.navigate('ResultScreen', {
                    point: 100,
                    difficulty: difficulty,
                  });
                } else {
                  navigation.navigate('ResultScreen', {
                    point: point,
                    difficulty: difficulty,
                  });
                }
              } else {
                if (answer == questions[questionNumber].correct_answer) {
                  setPoint(point + 10);
                  setQuestionNumber(questionNumber + 1);
                } else {
                  navigation.navigate('ResultScreen', {
                    point: point,
                    difficulty: difficulty,
                  });
                }
              }
            }}
            title={'Cevabı Onayla'}
          />
        </View>
      </View>
    </MainContext.Provider>
  );
};
export default Question;
