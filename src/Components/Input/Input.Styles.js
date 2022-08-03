import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  bigContainer: {
    backgroundColor: '#0096FF',
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 13,
    margin: 2,
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    padding: 5,
    fontSize: 15,
    color: 'white',
  },
});
