import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SearchProvider, useSearch } from "@/context/SearchContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity, View } from "react-native";
import { withLayoutContext } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const Tab = createMaterialTopTabNavigator();
export const MaterialTabs = withLayoutContext(Tab.Navigator);

function TabContents() {
  const { searchText, setSearchText } = useSearch();

  const handleGeolocation = () => {
    setSearchText("Geolocation");
  };

  const insets = useSafeAreaInsets();

  return (
    <View className="flex flex-1 p-safe">
      <View className="flex-row py-2 px-3 bg-white items-center gap-2">
        <View className="flex-1 flex-row bg-[#f0f0f0] rounded-md pl-3 pr-6 items-center h-11">
          <Ionicons name="search" size={20} color="gray" />
          <TextInput className="flex ml-2 font-normal outline-0"
            placeholder="Search location..."
            value={searchText === "Geolocation" ? "" : searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity className="p-1" onPress={handleGeolocation}>
          <Ionicons name="location" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <MaterialTabs
        tabBarPosition="bottom"
        screenOptions={{
          tabBarIndicatorStyle: { height: 0 },
        }}
      >
        <MaterialTabs.Screen name="index" options={{ title: "Currently" }} />
        <MaterialTabs.Screen name="today" options={{ title: "Today" }} />
        <MaterialTabs.Screen name="weekly" options={{ title: "Weekly" }} />
      </MaterialTabs>
    </View>
  );
}

export default function TabLayout() {
  return (
    <SearchProvider>
      <TabContents />
    </SearchProvider>
  );
}
