import React, {FC, ReactNode} from 'react';
import styled from 'styled-components/native';

import {SafeAreaView} from './SafeAreaView';

export const GlobalStyles: FC<{children: ReactNode}> & {
  SafeAreaView: typeof SafeAreaView;
} = ({children}) => {
  return <>{children}</>;
};

export const Column = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;

GlobalStyles.SafeAreaView = SafeAreaView;
