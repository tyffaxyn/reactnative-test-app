import { StyleSheet, Text, Pressable } from "react-native";
import useGetColorScheme from "./useColorScheme";
import Colors from "@/constants/Colors";
import * as Haptics from "expo-haptics";

type Props = {
  title: string;
  onPress: () => void;
};

export function CoolButton({ title, onPress }: Props) {
  const theme = useGetColorScheme();
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <Pressable onPress={handlePress} style={({ pressed }) => {
      if (pressed) {
        return [styles.button, { backgroundColor: Colors[theme].darkGreenColor }]
      }
      return [styles.button, { backgroundColor: Colors[theme].greenColor }]
    }}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
});
