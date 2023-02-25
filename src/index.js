import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import logo from "./assets/logo.png";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import React from "react";
import { WarningPage } from "./screens/WarningPage";
import { AlertsPage } from "./screens/AlertsPage";

// const [loaded] = useFonts({
//   Untitled: require("./assets/fonts/TestUntitledSans-Regular.otf"),
//   Untitled_Bold: require("./assets/fonts/TestUntitledSans-Bold.otf"),
//   Untitled_Medium: require("./assets/fonts/unbounded/TestUntitledSans-Medium.otf"),
// });

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: WarningPage,
  second: AlertsPage,
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F1F1F",
    flex: 1,
  },
  icon: {
    height: 20,
    width: "100px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  background: {
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#1F1F1F",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: 50,

    // borderBottomColor: "#fff",
  },
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    // tabStyle={{backgroundColor: 'red'}}
    labelStyle={{ textTransform: "none", fontSize: 16 }}
    indicatorStyle={{
      backgroundColor: "#F4B000",
      height: 5,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    }}
    style={{
      backgroundColor: "#1F1F1F",
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
    }}
  />
);

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Warning" },
    { key: "second", title: "Alerts" },
  ]);

  return (
    <>
      <View style={styles.background}>
        <Image styles={styles.icon} source={logo} />
      </View>
      <View style={styles.container}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </>
  );
}
