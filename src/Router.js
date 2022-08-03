import React, {useContext, createContext, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './Screens/Welcome';
import Sign from './Screens/Sign';
import Result from './Screens/Result';
import Question from './Screens/Question';
import Category from './Screens/Category';
export const FatherContext = createContext();
const App = () => {
  const [counter, setCounter] = useState(0);
  const Stack = createNativeStackNavigator();

  const data = {counter, setCounter};
  return (
    <FatherContext.Provider value={data}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="WelcomeScreen" component={Welcome} />
          </Stack.Group>
          <Stack.Screen name="CategoryScreen" component={Category} />
          <Stack.Screen name="SignScreen" component={Sign} />
          <Stack.Screen name="QuestionScreen" component={Question} />
          <Stack.Screen name="ResultScreen" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </FatherContext.Provider>
  );
};
export default App;
