import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  imageContainer: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 5,
    margin: 10,
    alignItems: 'center',
  },
  innerContainer: {flex: 1, resizeMode: 'contain'},
  inputContainer: {marginBottom: 10},
});
