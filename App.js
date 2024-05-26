import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>
        My name is <Text style={styles.fontBold}>Sarah Sarfo</Text>
      </Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  textSize: {
    fontSize: 24,
  },
  fontBold: {
    fontWeight: "bold",
  },
});
