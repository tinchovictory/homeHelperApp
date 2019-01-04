import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
  },
  rowDescription: {
    marginLeft: 20,
    flex: 1,
    justifyContent: 'center',
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

const SearchListItem = (props) => {
  const { name, navigation } = props;

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ProfileScreen')}
    >
      <Image
        style={styles.profilePicture}
        source={{ uri: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image' }}
      />
      <View style={styles.rowDescription}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

SearchListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SearchListItem;