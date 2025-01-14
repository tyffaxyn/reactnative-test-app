import { StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useUserStore } from "@/store/userStore";
import { router } from "expo-router";
import { CoolButton } from "@/components/CoolButton";
import { LinearGradient } from "expo-linear-gradient";
import { PlantlyImage } from "@/components/PlantlyImage";
import { tintColorDark } from "@/constants/Colors"; 

export default function OnboardingScreen() {
  const toggleHasOnboarded = useUserStore(
    (state) => state.toggleHasOnboarded,
  );

  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/");
  }

  return (
    <LinearGradient 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["rgb(83,1,155)", "rgb(110,0,146)", "rgb(195,157,192)"]}
      style={styles.container}
    >
      <StatusBar style="light" /> 
      <Text style={styles.text}>Greetings!</Text> 
      <PlantlyImage />
      <CoolButton  title="Let me in!" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
    color: tintColorDark,
    fontFamily: "Caveat"
  },
});