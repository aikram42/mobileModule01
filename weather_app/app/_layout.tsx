import { SafeAreaListener } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Uniwind } from 'uniwind'
import React from "react";
import '../global.css';


export default function RootLayout() {
  return (
    <SafeAreaListener
      onChange={({ insets }) => {
        Uniwind.updateInsets(insets)
      }}
    >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaListener>
  );
}
