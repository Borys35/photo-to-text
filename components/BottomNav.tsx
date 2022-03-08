import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { colors, paddingHorizontal } from "../styles/variables";
import BottomNavItem, { BottomNavItemProps } from "./BottomNavItem";

const navItems: BottomNavItemProps[] = [
  {
    name: "Home",
    iconName: "home",
  },
  {
    name: "Photo",
    iconName: "camera",
  },
  {
    name: "Gallery",
    iconName: "picture",
  },
];

const BottomNav: FC = () => {
  return (
    <View style={styles.container}>
      {navItems.map((item, i) => (
        <BottomNavItem key={i} {...item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: colors.backgroundShade,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 8,
    paddingHorizontal,
  },
});

export default BottomNav;
