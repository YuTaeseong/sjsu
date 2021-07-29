import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import CarouselCards from './CarouselCards';
import { Header, Button, Text, Input, SearchBar } from 'react-native-elements'
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

function ChooseButtons({navigation}) {
    return (
        <View style={{flexDirection : 'row'}}>
            <Button
            title="By your items"
            type="outline"
            style = {{margin : 5}}
            onPress = {()=>{navigation.navigate('ByItem')}}
            />
            <Button
            title="By your body"
            type="outline"
            style = {{margin : 5}}
            onPress = {()=>{navigation.navigate('ByBody')}}
            />
        </View>
    )
}

export function HomeScreen({navigation}) {
    return (
        <SafeAreaProvider>
            <Header
            leftComponent={{ icon: 'shopping-basket', color: '#fff', iconStyle: { color: '#fff' } }}
            centerComponent={{ text: 'MYDESK', style: { color: '#fff' } }}
            rightComponent={{ icon: 'camera-alt', color: '#fff' }}
            />
        <SafeAreaView style={styles.container}>
            <View style={{flex : 1}}>
                <ChooseButtons navigation={navigation}/>
            </View>
            <View style={{flex : 4, justifyContent: 'center',}}>
                <View style={{flex : 1, justifyContent: 'center', alignItems : 'center'}}>
                    <Text h3>Recommend</Text>
                </View>
                <View style={{flex : 10, justifyContent: 'center',}}>
                    <CarouselCards/>
                </View>
            </View>
        </SafeAreaView>
        </SafeAreaProvider>
    );
}

function ModalByBodyScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Input
          placeholder='AGE'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
        />
        <Input
          placeholder='HEIGHT'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
        />
        <Input
          placeholder='WEIGHT'
          leftIcon={{ type: 'font-awesome', name: 'weight' }}
        />
        <Input
          placeholder='GENDER'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
        />
        <Input
          placeholder='BUDGET'
          leftIcon={{ type: 'font-awesome', name: 'money' }}
        />
        <Button onPress={() => navigation.goBack()} title="Submit" />
      </View>
    );
  }
  
function ModalByItemScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <SearchBar
        placeholder="add your items or drop photos"
        onChangeText={null}
        value={null}
        lightTheme={true}
        containerStyle ={
            {
                width : '90%'
            }
        }
      />
        <Button onPress={() => navigation.goBack()} title="Submit" />
      </View>
    );
  }

function ModalDetailsScreen({ navigation, route }) {
    const item = route.params?.item ?? 'defaultValue';
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Text> {item.title}</Text>
        <Button onPress={() => navigation.goBack()} title="Submit" />
      </View>
    );
  }


const RootStack = createStackNavigator();

export default function HomeRootStackScreen() {
    return (
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="ByItem" component={ModalByItemScreen} />
        <RootStack.Screen name="ByBody" component={ModalByBodyScreen} />
        <RootStack.Screen name="Details" component={ModalDetailsScreen} />
      </RootStack.Navigator>
    );
  }

const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
},
});