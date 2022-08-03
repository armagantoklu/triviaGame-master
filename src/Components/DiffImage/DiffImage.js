import React from 'react';
import {View, TouchableOpacity, Image, Dimensions} from 'react-native';

const DiffImage = ({source, onPress, borderWidth = 0}) => {
  return (
    <View style={{margin: 3, padding: 3, borderWidth: borderWidth,borderRadius:20}}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{
            width: Dimensions.get('window').width / 4,
            height: Dimensions.get('window').height / 12,
            resizeMode: 'contain',
          }}
          source={source}
        />
      </TouchableOpacity>
    </View>
  );
};
export default DiffImage;
