import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ListItem, Icon, Header } from 'react-native-elements'
import ProductItem from './Product';
import { SafeAreaProvider} from 'react-native-safe-area-context';

const list = [
  {
    uri : "https://snumall.com/data/goods/1/2015/09/479_tmp_1a2a9d0d6472d98538f23893def047010842view.jpg",
    name: 'pencil case',
    price: '$20'
  },
  {
    uri : "https://static.turbosquid.com/Preview/001210/790/VI/realistic-pencil-holder-3D-model_600.jpg",
    name: 'pencil holder',
    price: '$10'
  },
]

function FindScreen({navigation}) {
    return (
    <SafeAreaProvider>
      <Header
      leftComponent={{ icon: 'shopping-basket', color: '#fff', iconStyle: { color: '#fff' } }}
      centerComponent={{ text: 'MYDESK', style: { color: '#fff' } }}
      rightComponent={{ icon: 'search', color: '#fff' }}
      />
      <ProductItem items = {list} navigation = {navigation}/>);
    </SafeAreaProvider>)
}

function DetailScreen({route}) {
  console.log(route.params?.item ?? 'defaultValue');
  const item = route.params?.item ?? 'defaultValue';
  return <Text>{item.name}</Text>;
}

const FindStack = createStackNavigator();

export default function FindStackScreen() {
  return (
    <FindStack.Navigator>
      <FindStack.Screen options = {{headerShown : false}} name = "Products" component = {FindScreen}/>
      <FindStack.Screen name = "Details" component = {DetailScreen}/>
    </FindStack.Navigator>
  )
}