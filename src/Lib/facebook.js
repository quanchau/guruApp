import { Facebook } from 'expo';

const FACEBOOK_APP_ID = '238771403279310';

export const loginWithFB = () =>
  Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID);

export const getUserInfo = (token) =>
  fetch(`https://graph.facebook.com/me?fields=id,name,picture&access_token=${token}`);