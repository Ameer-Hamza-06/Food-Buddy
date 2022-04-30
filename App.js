import React, { useState, useEffect } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { LogBox } from 'react-native';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'; 
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { Navigation } from './src/infrastructure/navigation';

const firebaseConfig = {
  apiKey: "AIzaSyDGfGFoPXazE76KQrKNLlaAZXWs_65G_5c",
  authDomain: "foodbuddy-202b7.firebaseapp.com",
  projectId: "foodbuddy-202b7",
  storageBucket: "foodbuddy-202b7.appspot.com",
  messagingSenderId: "165660438878",
  appId: "1:165660438878:web:b05de01d980d1a59ad5fcf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default function App() {	
  
  LogBox.ignoreLogs(['Remote debugger']);
 
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
       <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
       </AuthenticationContextProvider>
       </ThemeProvider>     
      <ExpoStatusBar style="auto" />
      </>
  );
}

