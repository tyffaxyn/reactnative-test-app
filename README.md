# Install

```sh
yarn install
```

# Android

```sh
# Generate the `android/` directory
npx expo prebuild -p android

# Compile with Gradle
npx expo run:android
# Alternatively, start the dev server and manually open in Android Studio and build
npx expo start
```

# iOS

```sh
# Generate the `ios/` directory
npx expo prebuild -p ios

# Compile with xcodebuild and run on simulator.
npx expo run:ios
# Alternatively, start the dev server and manually open Xcode and build
npx expo start
```
