// hooks/useFacebookAuth.ts
import * as Facebook from 'expo-auth-session/providers/facebook';
import { FacebookAuthProvider, signInWithCredential } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../config/firebaseConfig';

export function useFacebookAuth() {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: process.env.FB_CLIENT_ID,
  });

  useEffect(() => {
  if (response?.type === 'success' && response.authentication?.accessToken) {
    const accessToken = response.authentication.accessToken;
    const credential = FacebookAuthProvider.credential(accessToken);
    signInWithCredential(auth, credential);
  }
}, [response]);

  return { promptAsync, request };
}
