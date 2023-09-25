import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  View,
} from 'react-native';
import Constants from '../../utils/constants';
import AppStyles from '../../styles/app.style';

import {useGetUpcomingMovies} from '../../services/hooks/movies.hooks.service';
import SimpleCard from '../../components/simpleCard.component';

const UpcomingMoviesScreen = ({route, navigation}) => {
  const {isLoading, data, error, execute} = useGetUpcomingMovies();
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    try {
      console.log('Get Upcoming Movies...');
      execute({page: 1, language: 'en-US'}, response => {
        console.log('Response: ' + JSON.stringify(response));
        setUpcomingMovies(response?.results);
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
      <View style={[AppStyles.container, AppStyles.appBackgroundColor]}>
        <SafeAreaView style={styles.sectionContainer}>
          <View style={{flex: 1}}>
            {isLoading ? (
              <ActivityIndicator
                size="large"
                color={Constants.Colors.PRIMARY}
              />
            ) : (
              <View style={{flex: 1}}>
                {upcomingMovies.length === 0 ? (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: Constants.Colors.PRIMARY,
                        fontSize: 24,
                        fontFamily: Constants.Fonts.FAMILY,
                      }}>
                      Sorry no data found
                    </Text>
                  </View>
                ) : (
                  <View>
                    <FlatList
                      data={upcomingMovies}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => (
                        <SimpleCard
                          style={AppStyles.appFont}
                          item={item}
                          customClick={() =>
                            moveTo(
                              Constants.NavigationItems.DetailMoviesScreen,
                              {movieId: item.id},
                            )
                          }
                        />
                      )}
                    />
                  </View>
                )}
              </View>
            )}
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default UpcomingMoviesScreen;
