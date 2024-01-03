import React, {PropsWithChildren} from 'react';
import {useTheme} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import styled from 'styled-components/native';

export function ModalComponent({children}: PropsWithChildren) {
  const theme = useTheme();
  return <StyledModal theme={theme}>{children}</StyledModal>;
}

const StyledModal = styled.View<{theme: ThemeProp}>`
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  background-color: ${({theme}) => theme.colors?.background};
  display: flex;
  flex-direction: column;
  width: 328px;
`;
