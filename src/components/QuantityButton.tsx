import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const QuantityButton = ({
  text,
  icon,
  onPressItem,
  roundLeftBorders = 0,
  roundRightBorders = 0,
}: {
  text?: string | undefined;
  icon?: 'add-outline' | 'remove-outline' | 'trash-outline' | undefined;
  onPressItem: () => any;
  roundLeftBorders?: number;
  roundRightBorders?: number;
}) => {
  return (
    <TouchableOpacity onPress={onPressItem}>
      <View
        style={[
          styles.container,
          roundLeftBorders && {
            borderTopLeftRadius: roundLeftBorders,
            borderBottomLeftRadius: roundLeftBorders,
          },
          roundRightBorders && {
            borderTopRightRadius: roundRightBorders,
            borderBottomRightRadius: roundRightBorders,
          },
        ]}
      >
        {icon && <Ionicons name={icon} color={'#444444'} size={24} />}
        {text && <Text>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 6,
    borderWidth: 1,
    borderColor: '#444444',
    backgroundColor: '#dfdfdf',
  },
});

export default QuantityButton;
