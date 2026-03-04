import { Collapsible } from "@/components/ui/collapsible";
import { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

function QuestView() {
  const [firstClue, setFirstClue] = useState(
    "On the Thames bank there are many sights to see, but which one looks back at you",
  );
  const [intro, setIntro] = useState("Find the Treasure");
  const [drawing, setDrawing] = useState(
    require("../assets/images/tower-bridge.jpg"),
  );
  const [map, setMap] = useState(require("../assets/images/images.jpeg"));
  const [currentInput, setCurrentInput] = useState("");
  const [finalAnswer, setFinalAnswer] = useState("");

  const handleSubmit = () => {
    setFinalAnswer(currentInput.trim().toLowerCase());
  };
  return (
    <View style={{ flex: 1 }}>
      <Text>GeoPirate</Text>
      <Image
        source={map}
        style={{ width: 100, height: 100, alignSelf: "center" }}
      />
      <Text>This will be the map</Text>
      <Collapsible title="intro">
        <View>
          <Text>{intro}</Text>
        </View>
      </Collapsible>
      <Collapsible title="sketch">
        <View>
          <Image
            source={drawing}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
        </View>
      </Collapsible>
      <Collapsible title="clue">
        <View>
          <Text>{firstClue}</Text>
        </View>
      </Collapsible>
      <TextInput
        placeholder="enter the correct answer"
        value={currentInput}
        onChangeText={setCurrentInput}
        onSubmitEditing={handleSubmit}
      ></TextInput>
    </View>
  );
}

export default QuestView;
