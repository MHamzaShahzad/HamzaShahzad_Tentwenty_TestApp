import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  TextInput,
  useColorScheme,
  View,
  Image,
  ImageBackground,
} from 'react-native';


const GeneresMoviesScreen = ({route}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <SafeAreaView style={styles.sectionContainer}></SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
    },
});

export default GeneresMoviesScreen;
