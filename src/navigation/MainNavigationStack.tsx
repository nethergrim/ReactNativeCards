import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Search } from '@screens/search';
import { CardDetails } from '@screens/cardDetails';

const Stack = createNativeStackNavigator();

export const MainNavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: 'Card Search' }}
        />
        <Stack.Screen
          name="CardDetails"
          component={CardDetails}
          options={({ route }) => ({ title: route.params.card.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
