import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import colors from '../config/colors';

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  console.log(listing);
  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>
          $
          {listing.price}
        </AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/Peter.jpg')}
            title="Peter Biro"
            subTitle="5 Listings"
          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
