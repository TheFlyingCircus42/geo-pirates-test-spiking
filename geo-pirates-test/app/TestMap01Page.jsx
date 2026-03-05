import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";
// import MapDisplay from "./components/MapDisplay";
import TestMap01Comp from "./components/TestMap01Comp";


export default function TestMap01Page() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> TEST MAP 01 PAGE</Text>

      <Link href="/">
        <Text>Index Page Link</Text>
      </Link>

     <TestMap01Comp/>

      {/* <MapDisplay /> */}

    </View>
  );
}
