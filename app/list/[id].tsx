import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useSearchParams } from "expo-router";
import { Platform } from "react-native";

const DetailsPage = () => {
  const { id } = useSearchParams();
  return (
    <View>
      <Text>DetailsPage: {id}</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default DetailsPage;
