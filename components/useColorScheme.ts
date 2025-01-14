import { useColorScheme } from "react-native";

const useGetColorScheme =  () => {
  const theme = useColorScheme() ?? "light";
  return theme;
}

export default useGetColorScheme;
