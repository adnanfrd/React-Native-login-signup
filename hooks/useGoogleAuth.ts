// hooks/useGoogleAuth.ts
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../config/firebaseConfig';

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_CLIENT_ID,
    iosClientId: process.env.IOS_CLIENT_ID,
    androidClientId: process.env.ANDRIOD_CLIENT_ID,
    webClientId: process.env.WEB_CLIENT_ID,
  });

 useEffect(() => {
    if (response?.type === 'success' && response.authentication?.idToken) {
      const idToken = response.authentication.idToken;
      const credential = GoogleAuthProvider.credential(idToken);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return { promptAsync, request };
}
