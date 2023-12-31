import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

interface StyledTextProps extends TextProps {
  color?: string;
  size?: number;
  height?: number;
  children?: React.ReactNode;
}

const StyledText: React.FC<StyledTextProps> = ({
  color = '#202434',
  size = 16,
  height = 20,
  children,
  ...otherProps
}) => {
  const styles = StyleSheet.create({
    text: {
      color,
      fontSize: size,
      lineHeight: height,
      fontFamily: 'GmarketSansTTFMedium',
    },
  });

  return (
    <Text style={styles.text} {...otherProps}>
      {children}
    </Text>
  );
};

export default StyledText;
