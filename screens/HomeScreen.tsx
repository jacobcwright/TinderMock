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
import tinderLogo from "../assets/tinder-logo.png";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import { FullWindowOverlay } from "react-native-screens";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <Image style={styles.logo} source={tinderLogo} />
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
      {/* Body */}
      <View style={styles.swiperWrapper}>
        <Swiper
          cards={DUMMY_DATA}
          containerStyle={{ backgroundColor: "transparent" }}
          stackSize={2}
          cardIndex={0}
          animateCardOpacity={true}
          verticalSwipe={false}
          //@ts-ignore
          renderCard={(card) => (
            <View style={styles.card} key={card.id}>
              <Image source={{ uri: card.photoUrl }} style={styles.cardImg} />
            </View>
          )}
        />
      </View>
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
  swiperWrapper: {
    flex: 1,
    marginTop: -6,
  },
  card: {
    backgroundColor: "white",
    height: 500,
    borderRadius: 50,
  },
  cardImg: {
    flex: 1,
    borderRadius: 50,
  },
});

const DUMMY_DATA = [
  {
    firstName: "Elon",
    lastName: "Musk",
    occupation: "CEO",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/800px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    age: "56",
    id: 1,
  },
  {
    firstName: "2Elon2",
    lastName: "2Musk2",
    occupation: "CEO2",
    photoUrl:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    age: "562",
    id: 2,
  },
];

export default HomeScreen;
