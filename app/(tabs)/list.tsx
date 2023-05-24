import { Pressable, StyleSheet } from "react-native";
import EditScreenInfo from "components/EditScreenInfo";
import { Text, View } from "components/Themed";
import { Link } from "expo-router";
import { InformationCircleIcon } from "react-native-heroicons/solid";

export default function List() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Link href="/list/1">List 1</Link>
      <Link href="/list/2">List 2</Link>
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
