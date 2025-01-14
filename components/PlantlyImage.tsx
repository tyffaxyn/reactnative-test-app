import { Image, useWindowDimensions } from "react-native";

export function PlantlyImage({ size, imageUri }: { size?: number, imageUri?: string; }) {
  const { width } = useWindowDimensions();

  const imageSize = size || Math.min(width / 1.5, 400);

  return (
    <Image
      source={imageUri ? { uri: imageUri } : require("@/assets/images/plantly.png")}
      style={{ width: imageSize, height: imageSize, borderRadius: 6, }}
    />
  );
}
