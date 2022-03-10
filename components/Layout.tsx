import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Platform, StatusBar as SBar, StyleSheet, View } from "react-native";
import Logo from "../assets/logo.svg";
import { colors } from "../styles/variables";

interface Props {
  showLogo?: boolean;
  navigation: any;
}

const Layout: FC<Props> = ({ children, navigation, showLogo = true }) => {
  return (
    <View style={styles.container}>
      {showLogo && <Logo onPress={() => navigation.navigate("Home")} />}
      <View style={styles.main}>{children}</View>
      {/* <BottomNav /> */}
      {/* <StatusBar /> */}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: (Platform.OS === "android" ? SBar.currentHeight || 0 : 0) + 16,
    paddingBottom: 60,
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  main: {
    flex: 1,
  },
});

export default Layout;
