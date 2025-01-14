import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from "@/constants/Colors";
import useGetColorScheme from "@/components/useColorScheme";

export default function Layout() {
  const colorScheme = useGetColorScheme();
  return (
    <Stack>
      <Stack.Screen name="index"options={{
        title: "Home",
        headerRight: () => (
          <Link href="/modal" asChild>
            <Pressable hitSlop={16}>
              {({ pressed }) => (
                <FontAwesome
                name="plus-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 8, opacity: pressed ? 0.5 : 1 }}
                />
              )}
          </Pressable>
          </Link>
        ),
      }} />
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
          headerBackVisible: true,
        }}
      />
    </Stack>
  );
}
