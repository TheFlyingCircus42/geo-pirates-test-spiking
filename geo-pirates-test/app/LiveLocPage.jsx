import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";
// import MapDisplay from "./components/MapDisplay";
import LiveLocMap from "./components/LiveLocMap";


export default function LiveLocPage() {
  return (
    <View
      style={{
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Live Location Tracking Page!</Text>

      <Link href="/">
        <Text>Index Page Link</Text>
      </Link>

      <LiveLocMap/>

      {/* <LiveMapDisplay/> */}

      {/* <MapDisplay /> */}

    </View>
  );
}
