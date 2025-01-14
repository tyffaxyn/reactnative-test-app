import { Pressable, StyleSheet, Text } from "react-native";
import useGetColorScheme from "./useColorScheme";
import { PlantType } from "@/store/plantsStore";
import { PlantlyImage } from "./PlantlyImage";
import Colors from "@/constants/Colors";
import { Text as MyText, View } from "@/components/Themed";
import { Link } from "expo-router";

export function PlantCard({ plant }: { plant: PlantType }) {
  const theme = useGetColorScheme();
  return (
    <Link href={`/plants/${plant.id}`} asChild>
      <Pressable>
        <View style={[styles.plantCard, { shadowColor: Colors[theme].shadowColor }]}>
          <PlantlyImage imageUri={plant.imageUri} size={100} />
          <View style={styles.details}>
            <MyText numberOfLines={1} style={styles.plantName}>
              {plant.name}
            </MyText>
            <Text style={{ color: Colors[theme].colorLightGrey }}>
              Water every {plant.wateringFrequencyDays} days
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  plantCard: {
    flexDirection: "row",
    borderRadius: 6,
    padding: 8,
    marginBottom: 24,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
  details: {
    padding: 14,
    justifyContent: "center",
  },
  plantName: {
    fontSize: 18,
    marginBottom: 4,
  },
});