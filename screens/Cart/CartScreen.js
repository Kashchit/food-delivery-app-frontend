import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';

const CartScreen = ({ navigation }) => {
  const cartItems = [{ name: 'Das Kitchen', price: 100 }, { name: 'Veg Fix Thali', price: 100 }];
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text>{item.name}</Text>
          <Text>₹{item.price}</Text>
        </View>
      ))}
      <Text style={styles.total}>Total: ₹{total}</Text>
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default CartScreen;
