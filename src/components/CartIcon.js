import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CartContext } from "../components/CartContext";

export const CartIcon = ({ navigation }) => {
  const { getItemsCount } = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        Carrinho ({getItemsCount()})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "orange",
    height: 32,
    padding: 4,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});
