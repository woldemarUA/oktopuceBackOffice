import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import ErrorBoundary from './components/ErrorBoundary';

import AppContextProvider from './context/AppContextProvider';
import HomeScreen from './Screens/HomeScreen';
import ClientsListScreen from './Screens/ClientsListScreen';
import ClientDetailScreen from './Screens/ClientDetailScreen';
import SiteListScreen from './Screens/SiteListScreen';
import SiteDetailScreen from './Screens/SiteDetailScreen';
import EquipmentDetailScreen from './Screens/EquipmentDetailScreen';
import InterventionsListScreen from './Screens/InterventionsListScreen';
import InterventionsDetailScreen from './Screens/InterventionsDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name='Home'
                component={HomeScreen}
              />
              <Stack.Screen
                name='ClientList'
                component={ClientsListScreen}
                options={{ title: 'Liste des Clients' }}
              />
              <Stack.Screen
                name='ClientDetail'
                component={ClientDetailScreen}
                options={{ title: 'Details de Client' }}
              />
              <Stack.Screen
                name='SiteList'
                component={SiteListScreen}
                options={{ title: 'Liste des Sites' }}
              />
              <Stack.Screen
                name='InterventionsList'
                component={InterventionsListScreen}
                options={{ title: 'Liste des Interventions' }}
              />
              <Stack.Screen
                name='InterventionDetail'
                component={InterventionsDetailScreen}
                options={{ title: "Details d'Interventions" }}
              />
              <Stack.Screen
                name='SiteDetail'
                component={SiteDetailScreen}
                options={{ title: 'Details de Site' }}
              />
              <Stack.Screen
                name='EquipmentDetail'
                component={EquipmentDetailScreen}
                options={{ title: "Details d'Equipment" }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </AppContextProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
