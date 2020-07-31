import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { light } from './src/styles/theme/light';
import Routes from './src/routes'

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <StatusBar style="auto" />
      <Routes/>
    </ThemeProvider>
  );
}
