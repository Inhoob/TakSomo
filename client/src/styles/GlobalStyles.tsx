import React, {FC, ReactNode} from 'react';

import {SafeAreaView} from './SafeAreaView';

export const GlobalStyles: FC<{children: ReactNode}> & {
  SafeAreaView: typeof SafeAreaView;
} = ({children}) => {
  return <>{children}</>;
};

GlobalStyles.SafeAreaView = SafeAreaView;
