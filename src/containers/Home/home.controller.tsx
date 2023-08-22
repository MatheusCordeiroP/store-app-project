import React from 'react';
import HomeScreen from './home.screen';
import { useNavigation } from '@react-navigation/native';

const HomeController = ({}) => {
  const navigation = useNavigation();

  const handlers = { navigation };
  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
