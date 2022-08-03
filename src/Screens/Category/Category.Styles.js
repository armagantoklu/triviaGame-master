import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bigContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    justifyContent: 'space-around',
  },
  h2Container: {},
  flatlistContainer: {},
  buttonContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  h2: {fontSize: 20, fontWeight: 'bold', textAlign: 'center'},
  pageNumber: {textAlign: 'center', fontWeight: 'bold', fontSize: 20},
  difficultyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  diffChooseText: {textAlign: 'center', fontWeight: 'bold', fontSize: 20},
});
