import { FC } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Logo from "../assets/logo.svg";
import { colors } from "../styles/variables";
import BottomNav from "./BottomNav";

interface Props {
  showLogo?: boolean;
}

const Layout: FC<Props> = ({ children, showLogo = true }) => {
  return (
    <SafeAreaView style={styles.container}>
      {showLogo && <Logo />}
      <View style={styles.main}>{children}</View>
      <BottomNav />
      <StatusBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  main: {
    flex: 1,
  },
});

export default Layout;
