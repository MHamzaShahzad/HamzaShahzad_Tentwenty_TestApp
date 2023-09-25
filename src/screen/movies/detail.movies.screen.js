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
  ScrollView,
} from 'react-native';
import moment from 'moment';

import {useGetMovieDetail} from '../../services/hooks/movies.hooks.service';
import Constants from '../../utils/constants';
import CustomButton from '../../components/button.component';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppStyles from '../../styles/app.style';

const DetailMoviesScreen = ({route, navigation}) => {
  const {isLoading, data, error, execute} = useGetMovieDetail();
  const [movieDetail, setMovieDetail] = useState({});
  const {movieId} = route.params;

  useEffect(() => {
    try {
      console.log('Get Movie Details...');
      execute(movieId, response => {
        console.log('Response: ' + JSON.stringify(response));
        setMovieDetail(response);
      });
    } catch (error) {
      console.log('Error: ' + error);
    }
    return () => {};
  }, [null]);

  const moveTo = (navigateTo, data) => {
    navigation.navigate(navigateTo, data);
  };



  return (
    <>
      <View style={{flex: 1}}>
        <SafeAreaView style={styles.sectionContainer}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{flex: 1}}>
              {isLoading ? (
                <ActivityIndicator
                  size="large"
                  color={Constants.Colors.PRIMARY}
                />
              ) : (
                <View style={{flex: 1}}>
                  <ImageBackground
                    style={styles.image}
                    source={{
                      uri: `${Constants.BASE_IMG_URI}original${movieDetail.backdrop_path}`,
                    }}
                    resizeMode="cover">
                    <View style={styles.textView}>
                      {/* <Image
                        source={{
                          uri: `${Constants.BASE_IMG_URI}original${movieDetail.production_companies[1]?.logo_path}`,
                        }}
                      /> */}
                      <Text style={styles.text}>
                        In Theaters{' '}
                        {moment(movieDetail.release_date).format(
                          'MMMM D, YYYY',
                        )}
                      </Text>
                      <CustomButton
                        style={{
                          borderRadius: 10,
                          width: '60%',
                          backgroundColor: Constants.Colors.BUTTON,
                          height: 45,
                        }}
                        tColor={Constants.Colors.WHITE}
                        tFF={Constants.Fonts.FAMILY}
                        tfz={14}
                        title="Get Ticket"
                        customClick={() =>
                          moveTo(Constants.NavigationItems.SeatBookingScreen, {
                            title:
                              movieDetail?.title ?? movieDetail?.original_title,
                          })
                        }
                      />
                      <CustomButton
                        style={{
                          flexDirection: 'row',
                          borderRadius: 10,
                          width: '60%',
                          borderWidth: 2,
                          borderColor: Constants.Colors.BORDER_COLOR,
                        }}
                        tColor={Constants.Colors.WHITE}
                        tFF={Constants.Fonts.FAMILY}
                        tfz={14}
                        title="Watch Trailer"
                        child={
                          <Icon name="play-arrow" size={30} color="#000" />
                        }
                      />
                    </View>
                  </ImageBackground>
                  <View style={{margin: 30}}>
                    <Text
                      style={[
                        AppStyles.appFont,
                        {color: Constants.Colors.BLACK},
                      ]}>
                      Genres
                    </Text>
                    <FlatList
                      style={{height: 50}}
                      horizontal
                      data={movieDetail.genres}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => (
                        <CustomButton
                          style={{
                            borderRadius: 20,
                            backgroundColor: 'green',
                            height: 35,
                          }}
                          tColor={Constants.Colors.WHITE}
                          tFF={Constants.Fonts.FAMILY}
                          tfz={11}
                          title={item.name}
                        />
                      )}
                    />
                    <Text
                      style={[
                        AppStyles.appFont,
                        {color: Constants.Colors.BLACK},
                      ]}>
                      Overview
                    </Text>
                    <Text
                      style={[
                        AppStyles.appFontLight,
                        {color: Constants.Colors.BLACK},
                      ]}>
                      {movieDetail.overview}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 359,
  },
  textView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  text: {
    color: Constants.Colors.WHITE,
    fontFamily: Constants.Fonts.FAMILY,
  },
});

export default DetailMoviesScreen;
