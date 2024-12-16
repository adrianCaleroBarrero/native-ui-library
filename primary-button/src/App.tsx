import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  type ViewStyle,
  type StyleProp,
  SafeAreaView,
  type PressableProps,
} from 'react-native';

interface PrimaryButtonProps {
  title?: string;
  customStyle?: StyleProp<ViewStyle>;
  onPress: PressableProps['onPress'];
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title = 'Press',
  customStyle,
  onPress,
}) => {
  return (
    <SafeAreaView>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          customStyle,
          { backgroundColor: pressed ? 'lightgray' : 'white' },
        ]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
