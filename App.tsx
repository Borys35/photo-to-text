import {
  NotoSans_400Regular,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
import AppLoading from "expo-app-loading";
import { Dimensions, StyleSheet, View } from "react-native";
import Logo from "./assets/logo.svg";
import AppButton from "./components/AppButton";
import Layout from "./components/Layout";
import { paddingHorizontal } from "./styles/variables";

export default function App() {
  const [fontsLoaded] = useFonts({ NotoSans_400Regular, NotoSans_700Bold });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Layout showLogo={false}>
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
}

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
