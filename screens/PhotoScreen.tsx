import {
  NavigationProp,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import { Camera } from "expo-camera";
import React, { FC, useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../App";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Layout from "../components/Layout";
import { paddingHorizontal } from "../styles/variables";

const PhotoScreen: FC = () => {
  const [granted, setGranted] = useState<boolean>();
  const cameraRef = useRef<Camera>(null);
  const isFucused = useIsFocused();
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Photo">>();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setGranted(status === "granted");
    })();
  }, []);

  return (
    <Layout>
      <View style={styles.container}>
        {granted === false ? (
          <AppText>Permission's not granted</AppText>
        ) : granted === undefined ? (
          <View />
        ) : (
          <>
            {isFucused && (
              <Camera style={styles.camera} ref={cameraRef}></Camera>
            )}
            <AppButton
              iconName="camera"
              isPrimary
              style={styles.button}
              onPress={async () => {
                const picture = await cameraRef.current?.takePictureAsync();
                if (!picture) return;

                navigation.navigate("Taken Photo", { takenPhoto: picture });
              }}
            />
          </>
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 16,
    marginBottom: 16,
  },
  camera: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    top: 0,
    bottom: 0,
    padding: 16,
    alignItems: "flex-end",
    paddingHorizontal,
    borderRadius: 16,
  },
  button: {
    position: "absolute",
    zIndex: 9999,
    bottom: 16,
  },
});

export default PhotoScreen;
