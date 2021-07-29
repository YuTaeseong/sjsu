import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default function LoginScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login!</Text>
        <View style = {{
            width : "50%"
          }}>
        <Input
          placeholder='USERNAME'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
        />
        <Input
          placeholder='PASSWORD'
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
        />
        </View>
        <Button
            title="Go to MainScreen"
            onPress={() => navigation.navigate('Main')}
        />
      </View>
    );
}
  