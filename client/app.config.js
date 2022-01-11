/* eslint-disable no-undef */
import 'dotenv/config';

export default {
  name: 'approt',
  slug: 'approt',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    package: 'com.saas.approt',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    config: {
      googleMaps: {
        apiKey: 'AIzaSyDmEjOEY1y3ygIos8Qvpv-oQjsAFtD3xpk',
      },
    },
    permissions: ['VIBRATE'],
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    env: process.env.ENV,
    baseurl: process.env.BASEURL,
    googlePlacesApiKey: process.env.GOOGLE_PLACES_API_KEY,
  },
};
