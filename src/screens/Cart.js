// Cart.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const Cart = ({ items, clearCart }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.product.name}</Text>
            <Text>Quantidade: {item.qty}</Text>
            <Text>Preço: ${item.product.price * item.qty}</Text>
          </View>
        )}
      />
      <Button title="Limpar Carrinho" onPress={clearCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
});

export default Cart;
