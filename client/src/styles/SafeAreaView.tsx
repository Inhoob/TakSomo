import React, {FC, memo, ReactNode} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaView: FC<{children: ReactNode}> = memo(({children}) => {
  return (
    <SafeArea>
      <View style={{paddingHorizontal: 20}}>{children}</View>
    </SafeArea>
  );
});

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export type SafeAreaType = {SafeAreaView: typeof SafeAreaView};
