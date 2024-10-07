import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { NoteTakingIntput } from './components/NoteTakingInput';
import { useState } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditNoteScreen } from './screens/EditNoteScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component = {HomeScreen}/>
        <Stack.Screen name = 'NewNote' component = {EditNoteScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
