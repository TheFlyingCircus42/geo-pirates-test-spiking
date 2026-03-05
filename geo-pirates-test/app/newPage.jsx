import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import MapDisplay from "./Components/MapDisplay";

export default function NewPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>NEW PAGE!</Text>

      <Link href="/">
        <Text>Index Page Link</Text>
      </Link>

      <MapDisplay />
    </View>
  );
}
