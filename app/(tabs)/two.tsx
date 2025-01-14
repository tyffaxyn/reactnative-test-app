import { Button, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useUserStore } from "@/store/userStore";
import { router } from "expo-router";

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore(
    (state) => state.toggleHasOnboarded,
  );

  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/");
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Button title="Back to onboarding" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
