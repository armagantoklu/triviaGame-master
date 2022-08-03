import React from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import Button from './../../Components/Button';
import Input from './../../Components/Input';
import styles from './Sign.Styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';

import database from '@react-native-firebase/database';
const Sign = ({navigation}) => {
  const signSchema = yup.object().shape({
    name: yup
      .string('Lütfen geçerli bir ad giriniz')
      .required('ad boş bırakılamaz'),
    lastname: yup
      .string('Lütfen geçerli bir soyad giriniz')
      .required('Soyad boş bırakılamaz'),
    email: yup
      .string()
      .email('Lütfen geçerli bir eposta giriniz')
      .required('Eposta boş bırakılamaz'),
    pass: yup
      .string('Lütfen geçerli bir isim giriniz')
      .min(6, 'Şifre minimum 6 karakterli olmalıdır')
      .required('Şifre boş bırakılamaz'),
    repass: yup
      .string('Lütfen geçerli bir isim giriniz')
      .min(6, 'Şifre minimum 6 karakterli olmalıdır')
      .required('Şifre boş bırakılamaz'),
  });

  const initialValues = {
    name: '',
    lastname: '',
    email: '',
    pass: '',
    repass: '',
  };
  const onSubmit = async values => {
    await auth()
      .createUserWithEmailAndPassword(values.email, values.pass)
      .then(() => {
        navigation.navigate('CategoryScreen');
      })
      .catch(err => console.log(err));
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.innerContainer}
          source={require('./../../../images/triviaSignup.png')}
        />
      </View>
      <View style={styles.formContainer}>
        <Formik
          initialValues={{Ad: ''}}
          onSubmit={onSubmit}
          validationSchema={signSchema}>
          {({values, handleChange, handleSubmit, errors}) => (
            <>
              <Input
                placeholder={'Ad'}
                value={values.name}
                onChangeText={handleChange('name')}
              />
              {errors.name && <Text>{errors.name}</Text>}
              <Input
                placeholder={'Soyad'}
                value={values.lastname}
                onChangeText={handleChange('lastname')}
              />
              {errors.lastname && <Text>{errors.lastname}</Text>}
              <Input
                placeholder={'Email'}
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {errors.email && <Text>{errors.email}</Text>}
              <Input
                placeholder={'Sifre'}
                value={values.pass}
                onChangeText={handleChange('pass')}
              />
              {errors.pass && <Text>{errors.pass}</Text>}
              <Input
                placeholder={'Tekrar Sifre'}
                value={values.repass}
                onChangeText={handleChange('repass')}
              />
              {errors.repass && <Text>{errors.repass}</Text>}
              <Button title={'Kayıt Ol'} onPress={handleSubmit} />
              <Button
                title={'Geri'}
                onPress={() => {
                  navigation.navigate('WelcomeScreen', {
                    screen: 'ResultScreen',
                    params: {name: values.name},
                  });
                }}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};
export default Sign;
