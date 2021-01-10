import { StyleSheet } from "react-native";

const containerBackgroundColor = "rgba(0, 0, 0, 0.3)";
const white = "#fff";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: containerBackgroundColor,
    bottom: 0,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  controlsRow: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  fullScreenContainer: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  playButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  progressColumnContainer: {
    flex: 1,
    flexDirection: "row",
  },
  progressContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  progressSlider: {
    flex: 1,
    alignSelf: "stretch",
  },
  thumb: {
    backgroundColor: white,
    borderRadius: 50,
    borderWidth: 3,
    height: 20,
    width: 20,
  },
  timeRow: {
    alignSelf: "stretch",
  },
  timerLabel: {
    color: white,
    fontSize: 12,
  },
  timerLabelsContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: -7,
  },
  toolbar: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  toolbarRow: {
    position: "absolute",
    zIndex: 99,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  track: {
    borderRadius: 1,
    height: 5,
  },
});
