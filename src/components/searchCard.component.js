import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchCard = ({imageSource, title, content, customClick}) => {
  return (
    <TouchableOpacity onPress={customClick}>
      <View style={styles.cardContainer}>
        <Image source={{uri: imageSource}} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{title}</Text>
          <Text>{content}</Text>
        </View>
        <TouchableOpacity style={styles.moreOptions}>
          <Icon name="more-vert" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 10
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  moreOptions: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
};
export default SearchCard;
