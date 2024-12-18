import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuScreen } from '@/screens/MenuScreen';
import { CartScreen } from '@/screens/CartScreen';
import { OrderSummaryScreen } from '@/screens/OrderSummaryScreen';
import { RootStackParamList } from '@/types';
import { COLORS } from '@/constants/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen}
          options={{ title: 'Food Menu' }}
        />
        <Stack.Screen 
          name="Cart" 
          component={CartScreen}
          options={{ title: 'Your Cart' }}
        />
        <Stack.Screen 
          name="OrderSummary" 
          component={OrderSummaryScreen}
          options={{ title: 'Order Summary' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}