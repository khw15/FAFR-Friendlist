import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FriendList from './components/FriendList';
import FriendDetail from './components/FriendDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FriendList">
        <Stack.Screen name="FriendList" component={FriendList} options={{ title: 'Friends' }} />
        <Stack.Screen
          name="FriendDetail"
          component={FriendDetail}
          options={({ route }) => ({ title: route.params.friend.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
