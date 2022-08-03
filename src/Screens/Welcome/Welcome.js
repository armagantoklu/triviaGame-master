import React, {useEffect} from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import styles from './Welcome.Styles';
import Button from './../../Components/Button';
import Input from './../../Components/Input';
import {Formik} from 'formik';
import * as yup from 'yup';
import {sign} from 'react-native-pure-jwt';
import auth from '@react-native-firebase/auth';

const Welcome = ({navigation}) => {
  useEffect(() => {
    {
      auth().currentUser && navigation.navigate('CategoryScreen');
    }
  });
  const welcomeSchema = yup.object().shape({
    email: yup
      .string()
      .email('Lütfen geçerli bir eposta adresi giriniz')
      .required('eposta adresi boş bırakılamaz'),
    pass: yup
      .string('Lütfen geçerli bir şifre giriniz')
      .min(6, 'Şifre minimum 6 karakterli olmalıdır')
      .required('Şifre boş bıraklamaz'),
  });
  const initialValues = {
    email: '',
    pass: '',
  };
  const onSubmit = async values => {
    await auth()
      .signInWithEmailAndPassword(values.email, values.pass)
      .then(() => navigation.navigate('CategoryScreen'))
      .catch(err => console.log(err));
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageInner}
          source={require('./../../../images/triviaWelcome.png')}
        />
      </View>
      <View style={styles.formContainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={welcomeSchema}>
          {({handleChange, values, handleSubmit, errors}) => (
            <>
              <View style={styles.inputContainer}>
                <Input
                  placeholder={'E-Posta Adresi Giriniz'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                {errors.email && <Text>{errors.email}</Text>}
                <Input
                  placeholder={'Şifrenizi Giriniz'}
                  value={values.pass}
                  onChangeText={handleChange('pass')}
                />
                {errors.pass && <Text>{errors.pass}</Text>}
              </View>
              <View style={styles.buttonContainer}>
                <Button title="Giriş Yap" onPress={handleSubmit} />
                <Button
                  title="Kayıt Ol"
                  onPress={() => navigation.navigate('SignScreen')}
                />
                <Button
                  title="Misafir Girişi"
                  onPress={() => navigation.navigate('CategoryScreen')}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};
export default Welcome;
