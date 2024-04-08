import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {styles} from './Style';

const AnimatedIonicons = Animated.createAnimatedComponent(IoniconsIcon);
const AnimatedFontAwesome = Animated.createAnimatedComponent(FontAwesomeIcon);
const AnimatedFeather = Animated.createAnimatedComponent(FeatherIcon);
const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesignIcon);

const FloatingMenu = () => {
  const menuWidth = useSharedValue(0);
  const translateYValue = useSharedValue(70);
  const iconScale = useSharedValue(0);
  const closeIconRotate = useSharedValue('45deg');

  const menuStyle = useAnimatedStyle(() => ({
    width: menuWidth.value,
    transform: [{translateY: translateYValue.value}],
  }));

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{scale: iconScale.value}],
  }));

  const closeIconStyle = useAnimatedStyle(() => ({
    transform: [{rotate: closeIconRotate.value}],
  }));

  const toggleMenu = () => {
    if (menuWidth.value === 0) {
      menuWidth.value = withTiming(300, {duration: 300});
      translateYValue.value = withTiming(-50, {duration: 300});
      iconScale.value = withTiming(1, {duration: 400});
      closeIconRotate.value = withTiming('0deg', {duration: 300});
    } else {
      menuWidth.value = withTiming(0, {duration: 300});
      translateYValue.value = withTiming(70, {duration: 300});
      iconScale.value = withTiming(0, {duration: 100});
      closeIconRotate.value = withTiming('45deg', {duration: 300});
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.menuContainer, menuStyle]}>
        <AnimatedIonicons
          name="images"
          size={30}
          color={'white'}
          style={iconStyle}
        />
        <AnimatedFontAwesome
          name="folder-open"
          size={30}
          color={'white'}
          style={iconStyle}
        />
        <AnimatedFeather
          name="file-text"
          size={30}
          color={'white'}
          style={iconStyle}
        />
        <AnimatedFeather
          name="camera"
          size={30}
          color={'white'}
          style={iconStyle}
        />
      </Animated.View>
      <TouchableOpacity onPress={() => toggleMenu()} style={styles.button}>
        <AnimatedAntDesign
          name="close"
          size={35}
          color={'white'}
          style={closeIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingMenu;
