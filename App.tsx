import React from 'react';
import ContactUs from './screens/ContactUs';
import LinkViewer from './components/LinkViewer';
import BookmarkNews from './screens/BookmarkNews';
import InshortsTabs from './components/InshortsTabs';
import TermsOfService from './screens/TermsOfService';
import { BookmarkProvider } from './API/BookmarkContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <BookmarkProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={InshortsTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LinkViewer"
          component={LinkViewer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TermsOfService"
          component={TermsOfService}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookmarkNews"
          component={BookmarkNews}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </BookmarkProvider>
  );
}

export default App;
