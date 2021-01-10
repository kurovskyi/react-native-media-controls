import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
import {Slider as RNSlider} from "@miblanchard/react-native-slider";
import Icon from "react-native-vector-icons/Feather";
import styles from "./MediaControls.style";
import { humanizeVideoDuration } from "./utils";
import { Props as MediaControlsProps } from "./MediaControls";
import { PLAYER_STATES } from "./constants/playerStates";

export type CustomSliderStyle = {
  containerStyle: ViewStyle;
  trackStyle: ViewStyle;
  thumbStyle: ViewStyle;
  textStyle: TextStyle;
};

type Props = Pick<
  MediaControlsProps,
  | "progress"
  | "duration"
  | "mainColor"
  | "controlsColor"
  | "secondaryControlsSize"
  | "secondaryControlsPadding"
  | "onFullScreen"
  | "playerState"
  | "onSeek"
  | "onSeeking"
> & {
  onPause: () => void;
  customSliderStyle?: CustomSliderStyle;
};

const Slider = (props: Props) => {
  const {
    customSliderStyle,
    duration,
    mainColor,
    controlsColor,
    secondaryControlsSize,
    secondaryControlsPadding,
    onFullScreen,
    onPause,
    progress,
  } = props;

  const containerStyle = customSliderStyle?.containerStyle || {};
  const customTrackStyle = customSliderStyle?.trackStyle || {};
  const customThumbStyle = customSliderStyle?.thumbStyle || {};
  const customTextStyle = customSliderStyle?.textStyle || {};

  const dragging = ([value]: number[]) => {
    const { onSeeking, playerState } = props;
    onSeeking(value);

    if (playerState === PLAYER_STATES.PAUSED) {
      return;
    }

    onPause();
  };

  const seekVideo = (value: number) => {
    props.onSeek(value);
    onPause();
  };

  return (
    <View
      style={[
        styles.controlsRow,
        styles.progressContainer,
        { bottom: 0, left: secondaryControlsPadding },
        containerStyle,
      ]}
    >
      <Text
        style={[
          styles.timerLabel,
          { marginRight: secondaryControlsPadding / 2 },
          customTextStyle,
        ]}
      >
        {humanizeVideoDuration(progress)}
      </Text>
      <View style={styles.progressColumnContainer}>
        <RNSlider
          style={[styles.progressSlider]}
          onValueChange={dragging}
          onSlidingComplete={seekVideo}
          maximumValue={Math.floor(duration)}
          value={Math.floor(progress)}
          trackStyle={[styles.track, customTrackStyle]}
          thumbStyle={[
            styles.thumb,
            customThumbStyle,
            { borderColor: mainColor },
          ]}
          minimumTrackTintColor={mainColor}
        />
      </View>
      <Text
        style={[
          styles.timerLabel,
          { marginLeft: secondaryControlsPadding / 2 },
          customTextStyle,
        ]}
      >
        {humanizeVideoDuration(duration)}
      </Text>
      {Boolean(onFullScreen) && (
        <TouchableOpacity
          style={[
            styles.fullScreenContainer,
            {
              padding: secondaryControlsPadding,
              marginRight: -secondaryControlsPadding,
            },
          ]}
          onPress={onFullScreen}
          activeOpacity={0.5}
        >
          <Icon
            size={secondaryControlsSize}
            name="maximize"
            color={controlsColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export { Slider };
