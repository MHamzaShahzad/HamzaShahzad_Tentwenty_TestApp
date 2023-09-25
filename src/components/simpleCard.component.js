import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import Constants from '../utils/constants';

const SimpleCard = props => {
  return (
    <TouchableOpacity onPress={props.customClick}>
      <View style={[styles.layout]}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: `${Constants.BASE_IMG_URI}original${props.item.backdrop_path}`,
          }}
          resizeMode="cover">
          <View style={styles.textView}>
            <Text style={styles.text}>{props.item?.title}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: 180,
    shadowOffset: {width: 1, height: 5},
    margin: 10,
    marginLeft: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textView: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'flex-end',
    margin: 15
  },
  text: {
    color: Constants.Colors.WHITE,
    fontFamily: Constants.Fonts.FAMILY,
  },
});
export default SimpleCard;
