import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  View,
} from 'react-native';
import {useGetSearchMovies} from '../../services/hooks/movies.hooks.service';
import {Searchbar} from 'react-native-paper';
import Constants from '../../utils/constants';
import AppStyles from '../../styles/app.style';
import SearchCard from '../../components/searchCard.component';

const SearchMoviesScreen = ({route, navigation}) => {
  const {isLoading, data, error, execute} = useGetSearchMovies();

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => {
    setSearchQuery(query);
    try {
      console.log('Search Movie...');
      execute({query: query}, response => {
        console.log('Response: ' + JSON.stringify(response));
        setSearchedMovies(response?.results);
      });
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  const renderItem = ({item}) => (
    <SearchCard
      title={item?.name ?? item?.original_name}
      imageSource={`${Constants.BASE_IMG_URI}original${item.backdrop_path}`}
      customClick={() =>
        moveTo(Constants.NavigationItems.DetailMoviesScreen, {movieId: item.id})
      }
    />
  );

  const moveTo = (navigateTo, data) => {
    navigation.navigate(navigateTo, data);
  };

  return (
    <>
      <View style={[AppStyles.container, AppStyles.appBackgroundColor]}>
        <View style={{padding: 10, backgroundColor: Constants.Colors.WHITE}}>
          <Searchbar
            placeholder="TV shows, movies and more"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={[AppStyles.appBackgroundColor]}
          />
        </View>
        <SafeAreaView style={styles.sectionContainer}>
          <View style={{flex: 1}}>
            {isLoading ? (
              <ActivityIndicator
                size="large"
                color={Constants.Colors.PRIMARY}
              />
            ) : (
              <View style={{flex: 1}}>
                {searchedMovies.length === 0 ? (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[
                        AppStyles.appFont,
                        {
                          fontSize: 24,
                        },
                      ]}>
                      Sorry no data found
                    </Text>
                  </View>
                ) : (
                  <FlatList
                    data={searchedMovies}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                  />
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

export default SearchMoviesScreen;
