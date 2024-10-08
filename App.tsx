import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditNoteScreen } from './screens/EditNoteScreen';
import { RootStackParamList } from './types';
import { NewNoteButton } from './components/NewNoteButton';

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name='Home' component={HomeScreen} options={({ navigation }) => ({
          title: 'Saved Notes',
          headerRight: () => (<NewNoteButton />)
        })} />
        <Stack.Screen name='EditNote' component={EditNoteScreen} options={{ title: 'New Note' }} />
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
