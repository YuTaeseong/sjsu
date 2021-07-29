import React from 'react';
import { Card, Button } from 'react-native-elements';
import { StyleSheet, Text} from 'react-native';

export default function ProductItem({ items, navigation }) {
    return items.map((item, index)=>(
      <Card key ={index}>
        <Card.Image source = {{uri : item.uri}}>

        </Card.Image>
        <Text style={{marginBottom: 10, marginTop: 20 }} h2>
        {item.name}
        </Text>
        <Text style={styles.price} h4>
        {item.price}
        </Text>
        <Text h6 style={styles.description}>
        added 1d ago
        </Text>
        <Button type="clear" title='Buy now'
        onPress={() => navigation.navigate('Details', {item : item})} />
        </Card>
    ))
  }

const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    }
}); 