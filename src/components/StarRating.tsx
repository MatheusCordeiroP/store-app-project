import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StarRatingComponent = ({
  count,
  rate,
  color = '#e4d323',
  size = 24,
}: {
  count: number;
  rate: number;
  color?: string | undefined;
  size?: number | undefined;
}) => {
  const fullStars = Math.round(rate);
  const emptyStars = 5 - fullStars;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Ionicons name="star" color={color} size={size} />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Ionicons name="star-outline" color={color} size={size} />);
  }

  return (
    <View style={styles.ratingContainer}>
      <Text style={[styles.rating, { fontSize: size - 4 }]}>{rate}</Text>
      {stars}
      <Text style={styles.ratingCount}>({count} avaliações)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  rating: {
    marginRight: 4,
    fontWeight: 'bold',
  },
  ratingCount: {
    marginLeft: 4,
  },
});

export default StarRatingComponent;
