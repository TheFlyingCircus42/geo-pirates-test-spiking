import { Text, View, ScrollView } from "react-native";

export default function TestPage() {
  const questList = [
    {
      title: "Tower Bridge Mystery",
      details: "Details details details details",
      distance: "0.6 miles",
      img: "",
      madeBy: "reactiveRATs",
    },
    {
      title: "Tower Bridge Mystery",
      details: "Details details details details",
      distance: "0.6 miles",
      img: "",
      madeBy: "reactiveRATs",
    },
    {
      title: "Tower Bridge Mystery",
      details: "Details details details details",
      distance: "0.6 miles",
      img: "",
      madeBy: "reactiveRATs",
    },
    {
      title: "Tower Bridge Mystery",
      details: "Details details details details",
      distance: "0.6 miles",
      img: "",
      madeBy: "reactiveRATs",
    },
    {
      title: "Tower Bridge Mystery",
      details: "Details details details details",
      distance: "0.6 miles",
      img: "",
      madeBy: "reactiveRATs",
    },
    {
      title: "Tower Bridge Mystery",
      details: "Details details details details",
      distance: "0.6 miles",
      img: "",
      madeBy: "reactiveRATs",
    },
  ];

  return (
    <View className="flex-1 flex-col items-center w-full h-screen">
      <View className="relative py-8 scale-x-[1.8]">
        <View className="bg-black w-20 h-20 rotate-45 rounded-lg " />
        <Text className="text-white font-semibold text-lg absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 scale-x-75">
          GeoPirate
        </Text>
      </View>
      <ScrollView className="quest-list w-full px-3">
        {questList.map((quest, index) => {
          return (
            <View
              key={quest.title + index}
              className="quest-card w-full h-20 my-2 p-2 bg-white rounded-xl flex flex-col justify-between"
            >
              <Text className="text-black text-xl font-semibold">
                {quest.title}
              </Text>
              <View className="flex flex-row justify-between">
                <Text className="text-black">{quest.details}</Text>

                <Text className="text-black">{quest.distance}</Text>

                <Text className="text-black">{quest.madeBy}</Text>
              </View>
              <View className="size-10 bg-blue-300 absolute right-0 rounded-full top-0 m-2" />
            </View>
          );
        })}
      </ScrollView>
      <Text className="py-2">🐀 By reactiveRATs</Text>
    </View>
  );
}
