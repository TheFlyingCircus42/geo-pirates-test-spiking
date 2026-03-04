import { View, Text, Button } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        padding: 40,
      }}
    >
      <Text style={{ fontSize: 39, fontWeight: "bold" }}>Success!</Text>

      <View
        style={{
          borderWidth: 2,
          padding: 20,
          width: "90%",
          borderRadius: 10,
        }}
      >
        <Text>Congradulations!! The Quest has been solved!</Text>
      </View>

      <View
        style={{
          borderWidth: 2,
          padding: 20,
          width: "90%",
          borderRadius: 10,
        }}
      >
        <Text>You received X gold coins. Your current total is X.</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 20 }}>
        <Button title="Achievements" onPress={() => {}} />
        <Button title="Start New Quest" onPress={() => {}} />
      </View>
    </View>
  );
}
