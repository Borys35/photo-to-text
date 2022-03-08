import {
  NotoSans_400Regular,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import HomeScreen from "./screens/HomeScreen";
import PhotoScreen from "./screens/PhotoScreen";
import { colors, fontFamilies } from "./styles/variables";

export type RootStackParamList = {
  Home: undefined;
  Photo: undefined;
};

export default function App() {
  const [fontsLoaded] = useFonts({ NotoSans_400Regular, NotoSans_700Bold });

  if (!fontsLoaded) return <AppLoading />;

  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator();

  const tabBarIcon =
    (route: RouteProp<ParamListBase, string>) =>
    ({ focused, color, size }: any) => {
      let iconName;

      if (route.name === "Home") iconName = "home";
      else if (route.name === "Photo") iconName = "camera";

      return <AntDesign name={iconName as any} size={size} color={color} />;
    };

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Photo" component={PhotoScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.text,
          tabBarInactiveTintColor: colors.textDarker,
          tabBarIcon: tabBarIcon(route),
          tabBarStyle: {
            backgroundColor: colors.backgroundShade,
            height: 60,
            borderTopWidth: 0,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            position: "absolute",
          },
          tabBarLabelStyle: {
            fontFamily: fontFamilies.bold,
            textTransform: "uppercase",
            marginBottom: 4,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Photo" component={PhotoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
