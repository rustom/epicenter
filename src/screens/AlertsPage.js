import { StyleSheet, Text, View, ScrollView } from "react-native";

const alerts = [
  {
    number: 1,
    title: "Earthquake Alert",
    body: "A strong earthquake has been detected in your area. Please take immediate shelter under a sturdy piece of furniture or in a doorway until the shaking stops. Stay away from windows and be prepared for aftershocks.",
  },
  {
    number: 2,
    title: "Urgent Earthquake Warning",
    body: "An earthquake with a magnitude of 8.0 has just occurred in your vicinity. If you are indoors, drop to the ground, take cover under a table or desk, and hold on. If you are outdoors, move to an open area away from buildings and other structures. Follow all emergency instructions and be prepared for additional seismic activity.",
  },
  {
    number: 3,
    title: "Earthquake Advisory",
    body: "A minor earthquake has been recorded in your area. Please stay alert and be prepared for potential aftershocks. If you experience any damage to your property or see any signs of damage to infrastructure, report it immediately to local authorities. Stay safe and stay informed.",
  },
];

export const AlertsPage = () => (
  <ScrollView style={{ flex: 1 }}>
    <View style={{ flex: 1, backgroundColor: "#161819", paddingBottom: 10 }}>
      {alerts.map((alert) => (
        <View style={styles.container} key={alert.number}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{alert.title}:</Text>
            <Text style={styles.cardBody}>{alert.body}</Text>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    color: "white",
    borderTopWidth: 0,
    borderColor: "#4B4B4B",
  },
  card: {
    backgroundColor: "#1F1F1F",
    padding: 16,
    borderWidth: 1,
    borderColor: "#4B4B4B",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  cardBody: {
    fontSize: 15,
    color: "#9D9D9D",
  },
});
