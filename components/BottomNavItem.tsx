import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../styles/variables";
import AppText from "./AppText";

export interface BottomNavItemProps {
  name: string;
  iconName: string;
}

const BottomNavItem: FC<BottomNavItemProps> = ({ name, iconName }) => {
  return (
    <View style={styles.container}>
      <AntDesign name={iconName as any} color={colors.textDarker} size={20} />
      <AppText style={styles.text} color="gray" size="sm" isBold>
        {name}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    marginTop: 4,
    textTransform: "uppercase",
  },
});

export default BottomNavItem;
