import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Chat"
        onPress={() => {
          navigation.navigate("Chat" as any);
        }}
      />
      <Button title="Logout" onPress={() => {}} />
    </View>
  );
}

export default HomeScreen;
