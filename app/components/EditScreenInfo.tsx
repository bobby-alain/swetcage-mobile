import React from "react";
import { StyleSheet, Image } from "react-native";
import Colors from "app/constants/Colors";
import { ExternalLink } from "./ExternalLink";
import { Text, View } from "./Themed";

export default function EditScreenInfo({ path }: { path: string }) {
  const logo = require("assets/images/favicon.png");
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <View>
          <Image source={logo} alt={"logo"} style={{ width: 64, height: 64 }} />
        </View>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink style={styles.helpLink} href="https://majad.xyz">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Developer Website
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
