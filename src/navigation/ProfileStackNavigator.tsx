import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileController from '../containers/Profile/profile.controller';

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileController}
        options={{ title: 'Perfil' }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
