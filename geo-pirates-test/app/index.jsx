import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { Button } from "react-native";
import * as Location from "expo-location";

export default function Index() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="flex flex-col w-full h-full gap-3"
    >
      <Text className="text-red-500 text-5xl">Hello</Text>
      <Text className="text-blue-600 font-bold">Your location is</Text>
      <Text className="break-all max-w-60"> {text}</Text>

      <Link href="/newPage">
        <Text>New Page Link</Text>
      </Link>
      <Link
        href="/testpage"
        className="bg-teal-600 text-white px-3 py-1 rounded-xl active:scale-110 font-semibold"
      >
        <Text>Screen no. 1</Text>
      </Link>
    </View>
  );
}
