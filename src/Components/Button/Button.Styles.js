import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  bigContainer: {
    margin: 2,
    padding: 5,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 13,
  },
  buttonContainer: {
    backgroundColor: 'aqua',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonTitle: {textAlign: 'center'},
});
