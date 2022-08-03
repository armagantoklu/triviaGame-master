import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './Category.Styles';
import CategoryFetch from './../../Helpers/CategoryFetch';
import CategoryCard from '../../Components/CategoryCard';
import Button from './../../Components/Button';
import {MainContext} from './../../CategoryContext';
import IconComp from '../../Components/IconComp';
import DiffImage from '../../Components/DiffImage';
import QuestionFetch from '../../Helpers/QuestionFetch';

const Category = ({route, navigation}) => {
  const [difficulty, setDifficulty] = useState('');
  const [categoryList, setCategoryList] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);

  const getCategories = async () => {
    const data = await CategoryFetch();
    setCategoryList(data);
  };
  useEffect(() => {
    if (!categoryList) {
      getCategories();
    }
  }, []);

  const data = {
    selectedCategories,
    setSelectedCategories,
  };
  const touched = {
    borderWidth: 3,
    shadowOpacity: 1,
  };
  if (!categoryList) {
    return <Text>Kategoriler Yükleniyor Lütfen Bekleyiniz</Text>;
  }
  return (
    <MainContext.Provider value={data}>
      <View style={styles.bigContainer}>
        <View style={styles.h2Container}>
          <Text style={styles.h2}>
            Lütfen soruları görmek istediğiniz kategoriyi seçiniz
          </Text>
        </View>
        <View style={styles.flatlistContainer}>
          <FlatList
            data={categoryList.slice(pageNumber * 5, pageNumber * 5 + 5)}
            renderItem={({item}) => <CategoryCard item={item.name} />}
          />
        </View>
        <View style={styles.buttonContainer}>
          <IconComp
            style={styles.pageArrow}
            iconName="arrowleft"
            onPress={() => {
              if (pageNumber > 0) {
                setPageNumber(pageNumber - 1);
              } else {
                return;
              }
            }}
          />
          <Text style={styles.pageNumber}>{pageNumber + 1}</Text>
          <IconComp
            style={styles.pageArrow}
            iconName="arrowright"
            onPress={() => {
              if (pageNumber < Math.ceil(categoryList.length / 5 - 1)) {
                setPageNumber(pageNumber + 1);
              } else {
                return;
              }
            }}
          />
        </View>
        <View>
          <Text style={styles.diffChooseText}>Lütfen Zorluk Seçiniz</Text>
        </View>
        <View style={styles.difficultyContainer}>
          <DiffImage
            onPress={() => {
              if (easy == 1) {
                setEasy(0);
                setDifficulty('');
              } else {
                setEasy(1);
                setDifficulty('easy');
                setMedium(0);
                setHard(0);
              }
            }}
            source={require('./../../../images/easy.png')}
            borderWidth={easy}
          />
          <DiffImage
            onPress={() => {
              if (medium == 1) {
                setMedium(0);
                setDifficulty('');
              } else {
                setMedium(1);
                setDifficulty('medium');
                setEasy(0);
                setHard(0);
              }
            }}
            source={require('./../../../images/medium.png')}
            borderWidth={medium}
          />
          <DiffImage
            onPress={() => {
              if (hard == 1) {
                setHard(0);
                setDifficulty('');
              } else {
                setHard(1);
                setDifficulty('hard');
                setEasy(0);
                setMedium(0);
              }
            }}
            source={require('./../../../images/hard.png')}
            borderWidth={hard}
          />
        </View>

        <View>
          <Button
            title={'Onayla'}
            onPress={async () => {
              {
                selectedCategories.length == 0 || difficulty == ''
                  ? null
                  : navigation.navigate('QuestionScreen', {
                      difficulty: difficulty,
                      questions: await QuestionFetch(
                        selectedCategories[0],
                        difficulty,
                      ),
                    });

                setSelectedCategories([]);
                setEasy(0);
                setMedium(0);
                setHard(0);
                setDifficulty('');
              }
            }}
          />
        </View>
      </View>
    </MainContext.Provider>
  );
};
export default Category;
