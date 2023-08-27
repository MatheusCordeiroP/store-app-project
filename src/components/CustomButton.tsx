import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomButton = ({
  text,
  icon,
  styles,
  onPressItem,
}: {
  text?: string | undefined;
  icon?: 'add-outline' | 'remove-outline' | 'trash-outline' | undefined;
  styles?: any;
  onPressItem: () => any;
}) => {
  return (
    <TouchableOpacity onPress={onPressItem}>
      <View style={[defaultStyle.container, styles?.container]}>
        {icon && <Ionicons name={icon} color={'#444444'} size={24} />}
        {text && <Text style={[defaultStyle.text, styles?.text]}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 4,
    borderWidth: 1,
    borderColor: '#c4c4c4',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default CustomButton;
