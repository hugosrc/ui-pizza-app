import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { light } from './src/styles/theme/light';
import Routes from './src/routes'
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <StatusBar style="auto" />
        <Routes/>
      </ThemeProvider>
    </Provider>
  );
}
