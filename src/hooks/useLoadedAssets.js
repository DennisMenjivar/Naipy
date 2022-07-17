import Ionicons from '@expo/vector-icons/Ionicons';
import * as Font from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from 'react';
import { LogBox } from 'react-native';
import cards from '../json/cards';

export function useLoadedAssets() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [leftCard, setLeftCard] = useState({});
  const [rightCard, setRightCard] = useState({});
  const [counter, setCounter] = useState(1);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHideAsync();
        setLeftCard({
          card: cards[Math.floor(Math.random() * cards.length)],
          hide: false,
        });
        setRightCard({
          card: cards[Math.floor(Math.random() * cards.length)],
          hide: true,
        });
        // Load fonts
        await Font.loadAsync(Ionicons.font);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        // console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return {
    isLoadingComplete,
    leftCard,
    setLeftCard,
    rightCard,
    setRightCard,
    counter,
    setCounter,
  };
}
