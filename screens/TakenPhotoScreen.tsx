import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import { FC } from "react";
import {
  Image,
  Route,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  View,
} from "react-native";
import { RootStackParamList } from "../App";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Layout from "../components/Layout";
import { paddingHorizontal } from "../styles/variables";

interface Props {
  route: Route;
}

const TakenPhoto: FC<Props> = ({ route }) => {
  const { takenPhoto } = route.params;
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Taken Photo">>();

  if (!takenPhoto)
    return (
      <Layout>
        <AppText>No photo taken</AppText>
      </Layout>
    );

  const width = 120;
  const aspectRatio = takenPhoto.width / takenPhoto.height;

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.top}>
          <View
            style={[
              styles.imageContainer,
              { width, height: width / aspectRatio },
            ]}
          >
            <Image
              style={styles.image}
              source={{
                uri: takenPhoto.uri,
                width,
                height: width / aspectRatio,
              }}
            />
            <AppButton
              // title="Try again"
              iconName="arrowleft"
              style={styles.imageButton}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>

          <View style={styles.buttons}>
            <AppButton
              isPrimary
              title="Copy to clipboard"
              style={styles.firstButton}
              onPress={() => {
                Clipboard.setString("helllo");
                ToastAndroid.show("Successfully copied", ToastAndroid.SHORT);
              }}
            />
            <AppButton title="Text to speech" />
          </View>
        </View>

        <ScrollView>
          <AppText style={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            laudantium rem reprehenderit minima sapiente sint, beatae quibusdam
            enim mollitia quas ab incidunt molestias doloremque. Necessitatibus
            alias saepe libero doloremque blanditiis laborum impedit magnam
            doloribus! Ipsam recusandae facilis reprehenderit explicabo
            assumenda magnam, accusamus amet eos quod, debitis nostrum minus,
            cupiditate minima. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quasi laudantium rem reprehenderit minima sapiente
            sint, beatae quibusdam enim mollitia quas ab incidunt molestias
            doloremque. Necessitatibus alias saepe libero doloremque blanditiis
            laborum impedit magnam doloribus! Ipsam recusandae facilis
            reprehenderit explicabo assumenda magnam, accusamus amet eos quod,
            debitis nostrum minus, cupiditate minima. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Quasi laudantium rem
            reprehenderit minima sapiente sint, beatae quibusdam enim mollitia
            quas ab incidunt molestias doloremque. Necessitatibus alias saepe
            libero doloremque blanditiis laborum impedit magnam doloribus! Ipsam
            recusandae facilis reprehenderit explicabo assumenda magnam,
            accusamus amet eos quod, debitis nostrum minus, cupiditate minima.
            alias saepe libero doloremque blanditiis laborum impedit magnam
            doloribus! Ipsam recusandae facilis reprehenderit explicabo
            assumenda magnam, accusamus amet eos quod, debitis nostrum minus,
            cupiditate minima. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quasi laudantium rem reprehenderit minima sapiente
            sint, beatae quibusdam enim mollitia quas ab incidunt molestias
            doloremque. Necessitatibus alias saepe libero doloremque blanditiis
            laborum impedit magnam doloribus! Ipsam recusandae facilis
            reprehenderit explicabo assumenda magnam, accusamus amet eos quod,
            debitis nostrum minus, cupiditate minima. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Quasi laudantium rem
            reprehenderit minima sapiente sint, beatae quibusdam enim mollitia
            quas ab incidunt molestias doloremque. Necessitatibus alias saepe
            libero doloremque blanditiis laborum impedit magnam doloribus! Ipsam
            recusandae facilis reprehenderit explicabo assumenda magnam,
            accusamus amet eos quod, debitis nostrum minus, cupiditate minima.
          </AppText>
        </ScrollView>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 16, paddingHorizontal },
  top: {
    flexDirection: "row",
    marginBottom: 16,
  },
  imageContainer: {
    width: 40,
    height: 320,
    marginRight: 16,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageButton: {
    position: "absolute",
    left: 4,
    right: 4,
    bottom: 4,
  },
  buttons: {
    flex: 1,
  },
  firstButton: {
    marginBottom: 8,
  },
  text: { marginBottom: 16, overflow: "scroll" },
});

export default TakenPhoto;
