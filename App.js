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

import Categories from './components/categories/Categories';
import AddCategory from './components/addCategory/AddCategory';

import Budgets from './components/budgets/Budgets';
import AddBudget from './components/addBudget/AddBudget';

import Insights from './components/insights/Insights';


function App({ navigation }) {

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
          presentation: 'modal',
        }
      } />
    </Stack.Navigator>
  );

  const CategoriesStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="CategoriesOverview" component={Categories} options={
        {
          title: 'Categories',
          headerShadowVisible: false,
        }
      } />
      <Stack.Screen name="AddCategory" component={AddCategory} options={
        {
          title: 'Add Category',
          headerShadowVisible: false,
          presentation: 'modal',
          headerBackTitle: 'Cancel',
        }
      } />
    </Stack.Navigator>
  );

  const BudgetsStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="BudgetsOverview" component={Budgets} options={
        {
          title: 'Budgets',
          headerShadowVisible: false,
        }
      } />
      <Stack.Screen name="AddBudget" component={AddBudget} options={
        {
          title: 'Add Budget',
          headerShadowVisible: false,
          presentation: 'modal',
          headerBackTitle: 'Cancel'
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
        <Tab.Screen name="Budgets" component={BudgetsStack} options={{
          headerShown: false,
          tabBarLabel: 'Budgets',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="piggy-bank-outline" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Insights" component={Insights} options={{
          tabBarLabel: 'Insights',
          tabBarIcon: ({ color, size }) => (
            <Icon name="light-bulb" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Categories" component={CategoriesStack} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="stack" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;