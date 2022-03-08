import { FC } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { colors, fontFamilies } from "../styles/variables";

interface Props extends TextProps {
  color?: "white" | "gray";
  size?: "sm" | "md" | "lg";
  isBold?: boolean;
}

const AppText: FC<Props> = ({
  children,
  color = "white",
  size = "md",
  isBold = false,
  style,
  ...props
}) => {
  const colorStyle = {
    color:
      color === "white"
        ? colors.text
        : color === "gray"
        ? colors.textDarker
        : colors.text,
  };

  const sizeStyle = {
    fontSize: size === "sm" ? 12 : size === "md" ? 16 : size === "lg" ? 20 : 16,
  };

  return (
    <Text
      style={[
        style,
        styles.text,
        colorStyle,
        sizeStyle,
        isBold && { fontFamily: fontFamilies.bold },
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamilies.regular,
  },
});

export default AppText;
