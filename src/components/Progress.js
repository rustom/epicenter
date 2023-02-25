import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Timer from "./Timer";

export const Progress = ({ setTimeout }) => {
  const [percent, setPercent] = useState(1);

  setTimeout(percent === 0);

  return (
    <View>
      <View style={styles.timerContainer}>
        <Text style={styles.ringText}>Your phone will ring in</Text>
        <Timer setPercent={setPercent} />
      </View>

      <View style={styles.progressBarWrapper}>
        <View style={styles.outerProgressBar}>
          <View
            style={[styles.innerProgressBar, { width: percent * 100 + "%" }]}
          ></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    alignItems: "flex-end",
  },
  ringText: {
    fontSize: 15,
    color: "#fff",
    width: "92%",
    fontWeight: "bold",
    bottom: 5,
    flexGrow: 1,
  },
  progressBarWrapper: {
    paddingTop: 10,
  },
  outerProgressBar: {
    width: "100%",
    height: 18,
    backgroundColor: "#4B4B4B",
    borderRadius: 9,
  },
  innerProgressBar: {
    height: 18,
    backgroundColor: "#F4B000",
    borderRadius: 9,
  },
});
