import React from "react";
import { TouchableOpacity, View, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./MediaControls.style";
import { getPlayerStateIcon } from "./utils";
import { Props } from "./MediaControls";
import { PLAYER_STATES } from "./constants/playerStates";

type ControlsProps = Pick<
  Props,
  | "isLoading"
  | "controlsColor"
  | "mainControlsSize"
  | "secondaryControlsPadding"
  | "playerState"
  | "onReplay"
  | "endedElement"
> & {
  onPause: () => void;
};

const Controls = (props: ControlsProps) => {
  const {
    isLoading,
    playerState,
    controlsColor,
    mainControlsSize,
    secondaryControlsPadding,
    onReplay,
    onPause,
    endedElement,
  } = props;
  const icon = getPlayerStateIcon(playerState);
  const pressAction = playerState === PLAYER_STATES.ENDED ? onReplay : onPause;

  const content = isLoading ? (
    <ActivityIndicator size="large" color={controlsColor} />
  ) : (
    <>
      <>
        <TouchableOpacity
          style={[styles.playButton, { padding: secondaryControlsPadding }]}
          onPress={pressAction}
          accessibilityLabel={
            PLAYER_STATES.PAUSED ? "Tap to Play" : "Tap to Pause"
          }
          accessibilityHint={"Plays and Pauses the Video"}
          activeOpacity={0.5}
        >
          <Icon
            size={mainControlsSize}
            name={icon}
            color={controlsColor}
            style={icon === "play" && { marginLeft: 5 }}
          />
        </TouchableOpacity>
      </>
      {icon === "rotate-ccw" && endedElement}
    </>
  );

  return <View style={[styles.controlsRow, { flex: 1 }]}>{content}</View>;
};

export { Controls };
