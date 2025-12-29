import { SearchProvider, useSearch } from "@/context/SearchContext";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();
export const MaterialTabs = withLayoutContext(Tab.Navigator);

function TabContents() {
  const { searchText, setSearchText } = useSearch();

  const handleGeolocation = () => {
    setSearchText("Geolocation");
  };

  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: insets.bottom,
        paddingTop: insets.top,
        paddingEnd: insets.right,
        paddingStart: insets.left,
      }}
    >
      {/* --- TOP BAR SECTION --- */}
      <View style={styles.topBar}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Search location..."
            value={searchText === "Geolocation" ? "" : searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity style={styles.geoButton} onPress={handleGeolocation}>
          <Ionicons name="location" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* --- TABS SECTION --- */}
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

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 16,
    backgroundColor: "white",
    alignItems: "center",
    gap: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    height: 45,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    outlineWidth: 0,
  },
  geoButton: {
    padding: 5,
  },
});

export default function TabLayout() {
  return (
    <SearchProvider>
      <TabContents />
    </SearchProvider>
  );
}

// import '@/global.css';
// import { Ionicons } from "@expo/vector-icons";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { withLayoutContext } from "expo-router";
// import { useState } from "react";
// import { TextInput, TouchableOpacity, View } from "react-native";

// const { Navigator } = createMaterialTopTabNavigator();
// export const MaterialTabs = withLayoutContext(Navigator);

// export default function TabLayout() {
//   const [searchText, setSearchText] = useState("");
//   const handleGeolocation = () => {
//     setSearchText("Geolocation");
//   };
//   return (
//     <View style={{ flex: 1 }} >
//       {/* <View style={{ flexDirection: "row" }} > */}
//       <View className="flex-row font-extrabold">
//         <Ionicons name="search" size={20} color="gray" />
//         <TextInput
//           placeholder="search location..."
//           value={searchText === "Geolocation" ? "" : searchText}
//           onChangeText={setSearchText}>
//         </TextInput>
//         <TouchableOpacity onPress={handleGeolocation}>
//           <Ionicons name="location" size={24} color="#007AFF" />
//         </TouchableOpacity>
//       </View>

//       <MaterialTabs
//         tabBarPosition="bottom"
//         screenOptions={{
//           tabBarActiveTintColor: 'black',
//           tabBarInactiveTintColor: 'grey',
//           tabBarIndicatorStyle: { height: 0 },
//           tabBarStyle: {
//             backgroundColor: 'white',
//             borderTopWidth: 1,
//             borderTopColor: '#e2e2e2',
//           },
//         }}
//       >
//         <MaterialTabs.Screen
//           name="index"
//           options={{
//             title: "Currently",
//             tabBarIcon: ({ color }: { color: string }) => <Ionicons name="caret-down-outline" size={20} color={color} />,
//           }}
//           initialParams={{ searchText }}
//           />
//         <MaterialTabs.Screen
//           name="today"
//           options={{
//             title: "Today",
//             tabBarIcon: ({ color }: { color: string }) => <Ionicons name="today-outline" size={20} color={color} />,
//           }}
//           initialParams={{ searchText }}
//           />
//         <MaterialTabs.Screen
//           name="weekly"
//           options={{
//             title: "Weekly",
//             tabBarIcon: ({ color }: { color: string }) => <Ionicons name="calendar-outline" size={20} color={color} />,
//           }}
//           initialParams={{ searchText }}
//         />
//       </MaterialTabs>
//     </View>
//   );
// }

// import { Ionicons } from "@expo/vector-icons";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { withLayoutContext } from "expo-router";
// import React, { useRef } from "react";
// import { Animated, I18nManager, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// const Tab = createMaterialTopTabNavigator();
// export const MaterialTopTabs = withLayoutContext(Tab.Navigator);

// // Define your tab metadata here to match your file names
// const TABS_CONFIG = {
//   index: { label: "Currently", icon: "sunny-outline", iconActive: "sunny" },
//   today: { label: "Today", icon: "calendar-outline", iconActive: "calendar" },
//   weekly: { label: "Weekly", icon: "stats-chart-outline", iconActive: "stats-chart" },
// };

// function MyTabBar({ state, navigation, position }) {
//   const layoutWidth = useRef(0);

//   return (
//     <View
//       style={styles.tabsContainer}
//       onLayout={(e) => (layoutWidth.current = e.nativeEvent.layout.width)}
//     >
//       {state.routes.map((route, index) => {
//         const isFocused = state.index === index;
//         const config = TABS_CONFIG[route.name as keyof typeof TABS_CONFIG];

//         const onPress = () => {
//           const event = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true });
//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const inputRange = state.routes.map((_, i) => i);
//         const translateX = (isText = false) => {
//           return Animated.multiply(
//             position.interpolate({
//               inputRange,
//               outputRange: inputRange.map((i) => {
//                 const diff = i - index;
//                 const x = layoutWidth.current / state.routes.length;
//                 const value = diff > 0 ? x : diff < 0 ? -x : 0;
//                 return !isText ? value : -value;
//               }),
//             }),
//             I18nManager.isRTL ? -1 : 1
//           );
//         };

//         return (
//           <TouchableOpacity key={route.key} onPress={onPress} style={{ flex: 1, overflow: "hidden" }}>
//             {/* Background State (Inactive) */}
//             <View style={styles.iconTextContainer}>
//               <Ionicons name={config.icon as any} size={20} color="grey" />
//               <Text style={{ color: "grey", fontWeight: "600" }}>{config.label}</Text>
//             </View>

//             {/* Sliding Pill (Active State) */}
//             <Animated.View style={[styles.pillMask, { transform: [{ translateX: translateX() }] }]}>
//               <Animated.View style={[styles.iconTextContainer, { transform: [{ translateX: translateX(true) }] }]}>
//                 <Ionicons name={config.iconActive as any} size={20} color="black" />
//                 <Text style={{ color: "black", fontWeight: "bold" }}>{config.label}</Text>
//               </Animated.View>
//             </Animated.View>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// export default function TabLayout() {
//   return (
//     <MaterialTopTabs
//       tabBarPosition="bottom"
//       tabBar={(props) => <MyTabBar {...props} />}
//     >
//       {/* Screens match your file names: index.tsx, today.tsx, weekly.tsx */}
//       <MaterialTopTabs.Screen name="index" />
//       <MaterialTopTabs.Screen name="today" />
//       <MaterialTopTabs.Screen name="weekly" />
//     </MaterialTopTabs>
//   );
// }

// const styles = StyleSheet.create({
//   tabsContainer: {
//     flexDirection: "row",
//     margin: 16,
//     backgroundColor: "#E2E2E2",
//     borderRadius: 100,
//     height: 50,
//   },
//   iconTextContainer: {
//     ...StyleSheet.absoluteFillObject,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 8,
//   },
//   pillMask: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "white",
//     borderRadius: 100,
//     overflow: "hidden",
//   },
// });
