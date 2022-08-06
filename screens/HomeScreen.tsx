import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import pfp from "../assets/favicon.png";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {/* Header */}
      <View style={{ alignItems: "center", position: "relative" }}>
        <TouchableOpacity
          style={styles.pfpWrapper}
          onPress={() => {
            navigation.navigate("Login" as any);
          }}
        >
          <Image style={styles.pfp} source={pfp} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.logo} source={pfp} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.chatIcon}
          onPress={() => {
            navigation.navigate("Chat" as any);
          }}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color="red" />
        </TouchableOpacity>
      </View>

      {/* <Text>Home Screen</Text>
      <Button
        title="Go to Chat"
        onPress={() => {
          navigation.navigate("Chat" as any);
        }}
      />
      <Button title="Logout" onPress={() => {}} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pfp: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  pfpWrapper: {
    position: "absolute",
    left: 20,
    top: 12,
  },
  logo: {
    height: 56,
    width: 56,
    borderRadius: 100,
  },
  chatIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});

export default HomeScreen;
