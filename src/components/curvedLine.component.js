import React from 'react';
import {View, StyleSheet} from 'react-native';

const CurvedLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rotatedBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    transform: [{rotate: '180deg'}],
    transformOrigin: '0 0',
  },
  rotatedBox: {
    width: '100%',
    height: '100%',
    backgroundColor: '#C4C4C4',
  },
});

export default CurvedLine;
