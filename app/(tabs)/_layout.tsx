import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("@/assets/images/home.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("@/assets/images/home.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("@/assets/images/home.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "me",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("@/assets/images/home.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
