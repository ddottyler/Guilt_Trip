import { Alert } from "react-native";

export function alertsFunction(
  lastLogin,
  today,
  previousPopulation,
  todayPopulation
) {
  let date1 = new Date(lastLogin);
  let date2 = new Date(today);
  let diffTime = Math.abs(date2 - date1);
  let dateDifference2 = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (lastLogin === "") {
    Alert.alert("Welcome to Sloth!", "Walk to grow your Sloth family");
  } else if (dateDifference2 > 6) {
    Alert.alert("GAME OVER!", "You are a lazy loser!");
  } else if (dateDifference2 === 1 && previousPopulation < todayPopulation) {
    Alert.alert(
      "Good job!",
      "You hit your target yesterday!, come meet your new sloth"
    );
  } else if (dateDifference2 === 1 && previousPopulation > todayPopulation) {
    Alert.alert("Oh dear!", "You lazy loser, you killed a sloth");
  } else if (dateDifference2 > 1 && previousPopulation < todayPopulation) {
    Alert.alert(
      "Good job!",
      `You've gained ${todayPopulation - previousPopulation} sloths!`
    );
  } else if (dateDifference2 > 1 && previousPopulation > todayPopulation) {
    Alert.alert(
      "Shame on you!",
      `You lazy loser. You killed ${
        previousPopulation - todayPopulation
      } adorable sloth's`
    );
  } else if (dateDifference2 - 1 === 0) {
    Alert.alert(
      "Welcome back!",
      "Check your steps - have you hit today's target yet?"
    );
  }
}
