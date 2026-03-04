import { Text, View } from "react-native";
import { Link } from "expo-router";


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

      <Link href="/" >
        <Text >
          Index Page Link
        </Text>
      </Link>


    </View>
  );
}