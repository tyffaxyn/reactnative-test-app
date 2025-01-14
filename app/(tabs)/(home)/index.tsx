import { FlatList, StyleSheet, View } from "react-native";
import { usePlantStore } from "@/store/plantsStore";
import { CoolButton } from "@/components/CoolButton";
import { useRouter } from "expo-router";
import { PlantCard } from "@/components/PlantCard";
import useGetColorScheme from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

export default function App() {
  const router = useRouter();
  const theme = useGetColorScheme();
  const plants = usePlantStore((state) => state.plants);

  return (
    <FlatList
      style={[styles.container, { backgroundColor: Colors[theme].background }]}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <View style={styles.empty}>
          <CoolButton
            title="Add your first plant"
            onPress={() => {
              router.navigate("/modal");
            }}
          />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  empty: {
    marginTop: 64,
    marginHorizontal: 24,
  }
});
