import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  imageContainer: {
    width: Dimensions.get('window').width / 1,
    height: Dimensions.get('window').height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageInner: {flex: 1, resizeMode: 'contain'},
  formContainer: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {marginBottom: 10},
});
