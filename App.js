import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';

import store from './src/app/store';
import Mechanics from './src/features/mechanics/Mechanics'
import Cards from './src/features/cards/Cards'
import CardSearch from './src/features/cardSearch/cardSearch';
import CardDetail from './src/features/cardDetail/cardDetail'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  function Tabs() {
    return (
      <Tab.Navigator tabBarOptions={{ labelStyle: { fontSize: 18, fontWeight: '500', marginBottom: 'auto', marginTop: 'auto' } }}>
        <Tab.Screen name="CardSearch" component={CardSearch} options={{ title: 'Card Search' }} />
        <Tab.Screen name="Mechanics" component={Mechanics} />
      </Tab.Navigator>
    )
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerTitleStyle: { alignSelf: 'center' }, headerTitle: 'Hearthstone' }} />
          <Stack.Screen name="Cards" component={Cards} />
          <Stack.Screen name="CardDetail" component={CardDetail} options={{ headerTitle: 'Card Detail' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};

export default App;
