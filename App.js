// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from "expo-font";
import Icon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import Transactions from './components/transactions/Transactions';
import AddTransaction from './components/addTransaction/AddTransaction';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function App() {

  const [fontsLoaded] = useFonts({
    SourceSansProRegular: require("./assets/fonts/source-sans-pro.regular.ttf"),
    SourceSansProSemiBold: require("./assets/fonts/source-sans-pro.semibold.ttf"),
    SourceSansProBold: require("./assets/fonts/source-sans-pro.bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const TransactionsStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsOverview" component={Transactions} options={
        {
          title: 'Transactions',
          headerShadowVisible: false,
        }
      } />
      <Stack.Screen name="AddTransaction" component={AddTransaction} options={
        {
          title: 'Add Transaction',
          headerShadowVisible: false,
        }
      } />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Transactions" component={TransactionsStack} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="arrow-switch" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Budgets" component={HomeScreen} options={{
          tabBarLabel: 'Budgets',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="piggy-bank-outline" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Insights" component={DetailsScreen} options={{
          tabBarLabel: 'Insights',
          tabBarIcon: ({ color, size }) => (
            <Icon name="light-bulb" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Categories" component={DetailsScreen} options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size }) => (
            <Icon name="stack" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;