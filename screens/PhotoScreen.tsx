import React, { FC } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Logo from "../assets/logo.svg";
import AppButton from "../components/AppButton";
import Layout from "../components/Layout";
import { paddingHorizontal } from "../styles/variables";

const PhotoScreen: FC = () => {
  return (
    <Layout navigation={false}>
      <View style={styles.container}>
        <Logo width={180} height={120} />
        <View style={styles.buttons}>
          <AppButton
            onPress={() => console.log("heey")}
            title="Take a photo"
            iconName="camera"
            style={styles.mainButton}
            isPrimary
          />
          <AppButton
            title="Gallery"
            iconName="picture"
            style={styles.secondButton}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttons: {
    alignSelf: "stretch",
    alignItems: "stretch",
    paddingHorizontal,
    width: Dimensions.get("screen").width,
  },
  mainButton: {
    height: 240,
  },
  secondButton: {
    paddingHorizontal: 64,
    marginTop: -16,
    alignSelf: "center",
  },
});

export default PhotoScreen;
