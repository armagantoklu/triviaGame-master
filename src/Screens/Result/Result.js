import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import Button from './../../Components/Button';
import styles from './Result.Styles';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Leaderboard from './../../Components/LeaderBoard';
import {MainContext, useContext} from './../../QuestionContext';
import {FatherContext} from '../../Router';
const Result = ({navigation, route}) => {
  const {point, difficulty} = route.params;
  const {counter, setCounter} = useContext(FatherContext);
  const [leaderTab, setLeaderTab] = useState([]);
  const storage = async () => {
    const tableDatas = JSON.parse(
      await AsyncStorage.getItem(
        auth().currentUser
          ? `${auth().currentUser.email.split('@')[0]}`
          : `Misafir`,
      ),
    );
    if (!tableDatas) {
      if (counter != 0) {
        const newDatas = [];
        newDatas.push({point, difficulty, seconds: counter});
        await AsyncStorage.setItem(
          auth().currentUser
            ? `${auth().currentUser.email.split('@')[0]}`
            : `Misafir`,
          JSON.stringify(newDatas),
        );
      }
    } else {
      if (counter != 0) {
        tableDatas.push({point, difficulty, seconds: counter});
        await AsyncStorage.setItem(
          auth().currentUser
            ? `${auth().currentUser.email.split('@')[0]}`
            : `Misafir`,
          JSON.stringify(tableDatas),
        );
      }
    }
    const data = JSON.parse(
      await AsyncStorage.getItem(
        auth().currentUser
          ? `${auth().currentUser.email.split('@')[0]}`
          : `Misafir`,
      ),
    );
    const sortDatas = data.sort((a, b) => {
      return a.point - b.point;
    });
    setLeaderTab(sortDatas);
  };
  useEffect(() => {
    storage();
  }, [counter]);

  return (
    <View style={styles.bigContainer}>
      <Text style={styles.title}>Sonuç Ekranı</Text>
      <Text style={styles.currentScore}>
        Şu anki puan :{point} zorluk :
        {difficulty == 'easy'
          ? 'Kolay'
          : difficulty == 'medium'
          ? 'Orta'
          : 'Zor'}{' '}
        zaman:{counter}
      </Text>
      <View>
        <FlatList
          data={leaderTab}
          renderItem={({item, index}) => (
            <Leaderboard arr={item} key={index} />
          )}></FlatList>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Yeniden kategori seç ve başla"
          onPress={() => {
            setCounter(0);
            navigation.navigate('CategoryScreen');
          }}
        />
        <Button
          title="Hesaptan Çıkış Yap"
          onPress={() => {
            auth().signOut();
            setCounter(0);
            navigation.navigate('WelcomeScreen');
          }}
        />
      </View>
    </View>
  );
};
export default Result;
