import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { GlobalStyle } from './styles/global-style';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#161819',
    // color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    // width: 100,
    // height: 100,
    resizeMode: 'contain',
  },
  logoContainer: {
    height: 50, 
    backgroundColor: 'white',
  }, 
});

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    // <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image styles={styles.stretch} source={require('./assets/splash.png')} />
        </View>
        <Text style={{ color: '#adadad' }}>Open up App.js to start working on your app!</Text>
        {/* <StatusBar style="auto" /> */}
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
      </View>
    // </>
  );
}

