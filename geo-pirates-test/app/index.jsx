import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500">Hello</Text>

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
