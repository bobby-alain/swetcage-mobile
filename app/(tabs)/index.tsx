import { Pressable, Text, View } from "react-native";
import EditScreenInfo from "app/components/EditScreenInfo";
import { Link } from "expo-router";
import { useQuery } from "react-query";
import { API_KEY } from "@env";

export default function Home() {
  const { data, isLoading } = useQuery("home", async () => {
    const res = await fetch(API_KEY);
    return await res.json();
  });

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-bold">Home</Text>
      <Link
        asChild
        href="/list"
        style={{
          marginTop: 15,
          paddingVertical: 15,
        }}
      >
        <Pressable className="rounded-md px-4 py-2 bg-indigo-500">
          <Text className="text-gray-100">
            Click here to go to the list screen!
          </Text>
        </Pressable>
      </Link>

      <Text className=" text-indigo-600 text-3xl my-6">
        {isLoading ? "Loading..." : data.title}
      </Text>

      <View className="" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
