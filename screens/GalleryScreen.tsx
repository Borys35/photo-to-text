import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../App";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Layout from "../components/Layout";
import { paddingHorizontal } from "../styles/variables";

const GalleryScreen: FC = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Gallery">>();

  return (
    <Layout>
      <View style={styles.container}>
        <AppText style={styles.text}>
          You can also check text on already taken photo
        </AppText>
        <AppButton
          title="Open gallery"
          isPrimary
          onPress={async () => {
            const result = await ImagePicker.launchImageLibraryAsync();

            if (result.cancelled) return;
            navigation.navigate("Taken Photo", { takenPhoto: result });
          }}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingHorizontal,
  },
  text: {
    textAlign: "center",
    marginBottom: 24,
  },
});

export default GalleryScreen;
