# Getting Started
Learning how to build iOS and Android app with EAS

## 1. Install EAS Globally
```npm install -g eas-cli```

## 2. Login to Expo Account
```eas login```

## 3. Configure Project (Create eas.json file)
```eas build:configure```

## 4. Run Build Android
Development (The app can be installed on android emulator, because it will produce .apk file)
```eas build --platform android --profile preview```
or
Production (The app can't be installed on android emulator, because it will produce .abb file)
```eas build --platform android```

## 5. Run Build iOS
Development (The app can be installed on iOS simulator)
```eas build --platform ios --profile preview```
or
Production (The app can't be installed on iOS simulator, but you should buy apple developer account)
```eas build --platform ios```

## Notes
Full Tutorial to build iOS and Android app:
https://docs.expo.dev/build/setup/