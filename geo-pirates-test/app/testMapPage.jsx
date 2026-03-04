import React from "react";
import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function MapScreen() {
  return (
    <View style={pageStyles.fullPage}>
      <Text style={pageStyles.header}> GeoPirate </Text>
      <View style={pageStyles.mapBox}>
        <View style={pageStyles.fogCircle}>
          {/* <Image source={require("../")}></Image> */}
          <Text> Pin image </Text>
        </View>
        <Text style={pageStyles.questExplanation}></Text>
      </View>
      <View style={pageStyles.buttonRow}>
        <TouchableOpacity style={pageStyles.button}>
          <Text style={pageStyles.buttonText}> Save </Text>
        </TouchableOpacity>
        <TouchableOpacity style={pageStyles.button}>
          <Text style={pageStyles.buttonText}> Share </Text>
        </TouchableOpacity>
        <TouchableOpacity style={pageStyles.button}>
          <Text style={pageStyles.buttonText}> Navigate </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const pageStyles = StyleSheet.create({
  fullPage: {
    flex: 1,
    padding: 50,
    justifyContent: "space-between",
    backgroundColor: "light blue",
  },
  header: {
    fontSize: 40,
    fontWeight: "1000",
    textAlign: "center",
    marginTop: 10,
  },
  mapBox: {
    marginVertical: 1,
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  fogCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
    //marginBottom: 20,
  },
  questExplanation: {
    fontSize: 16,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 25,
  },
});
