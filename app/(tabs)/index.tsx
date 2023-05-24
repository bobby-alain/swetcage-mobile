import { Pressable, StyleSheet, Text } from "react-native";
import EditScreenInfo from "components/EditScreenInfo";
import { View } from "components/Themed";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Link
        asChild
        href="/list"
        style={{
          marginTop: 15,
          paddingVertical: 15,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#A020F0",
            padding: 8,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            Click here to go to the list screen!
          </Text>
        </Pressable>
      </Link>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
