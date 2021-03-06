import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import {
  Pressable,
  StyleSheet,
  TouchableHighlightProps,
  View,
} from "react-native";
import { colors } from "../styles/variables";
import AppText from "./AppText";

interface Props extends TouchableHighlightProps {
  title?: string;
  iconName?: string;
  isPrimary?: boolean;
}

const AppButton: FC<Props> = ({
  title,
  iconName,
  isPrimary = false,
  style,
  ...props
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        style,
        iconName && !title ? styles.iconOnlyButton : {},
        !isPrimary ? { backgroundColor: colors.backgroundShade } : {},
        pressed ? { opacity: 0.7 } : {},
      ]}
      {...props}
    >
      <View style={styles.wrapper}>
        {iconName && (
          <AntDesign name={iconName as any} color={colors.text} size={32} />
        )}
        {iconName && title && <View style={{ height: 8 }} />}
        {title && (
          <AppText isBold style={styles.text}>
            {title}
          </AppText>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 32,
  },
  iconOnlyButton: {
    paddingVertical: 32,
    borderRadius: 64,
  },
  wrapper: {
    alignItems: "center",
  },
  text: {
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default AppButton;
