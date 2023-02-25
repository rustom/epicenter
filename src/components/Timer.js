import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Timer = ({ setPercent }) => {
  const initTime = 5;
  const [timeLeft, setTimeLeft] = useState(initTime); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft < 0) {
    setTimeLeft(0);
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  setPercent(timeLeft / initTime);

  return (
    <View>
      <Text style={styles.timerText}>{`${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 28,
    color: "#fff",
  },
});

export default Timer;
