import { FC } from "react";
import { Image, Route, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import Layout from "../components/Layout";

interface Props {
  route: Route;
}

const TakenPhoto: FC<Props> = ({ route }) => {
  const { takenPhoto } = route.params;

  if (!takenPhoto)
    return (
      <Layout>
        <AppText>No photo taken</AppText>
      </Layout>
    );

  const width = 160;
  const aspectRatio = takenPhoto.width / takenPhoto.height;

  return (
    <Layout>
      <View>
        {takenPhoto && (
          <Image
            source={{
              uri: takenPhoto.uri,
              width,
              height: width / aspectRatio,
            }}
          />
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default TakenPhoto;
