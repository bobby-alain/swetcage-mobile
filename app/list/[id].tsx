import { View, Text } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";

const DetailsPage = () => {
  const { id } = useSearchParams();
  return (
    <View>
      <Text>DetailsPage: {id}</Text>
    </View>
  );
};

export default DetailsPage;
