# Stack

## Install

`git clone`

`cd /Stack`

`npm install`

`npm install -g react-native-cli`

## Run on iOS simulator

`react-native run-ios`

## Run on Android

Download Android SDK at [the Android Developer website](https://developer.android.com/studio/index.html) -> Get just the command line tools

Create a file called local.properties in android/ folder and write:
`sdk.dir = /absolute/path/to/android/sdk`

Then run `react-native run-android`

## Environments

We use 4 different environments:

- Old (previous deprecated dev environment)
- Dev
- Staging
- Prod

Each of those has its own Firebase backend, and it's own configuration file found in the environments/ folder

To switch between environments, use the `bash switch_env.sh <one of [old | dev | staging | prod]` command.

## Test crendentials

Plaid:
`user_good`
`pass_good`

Stack Login (Firebase):
`hellov6world@email.com`
`1qaz1qaz1qaz`

# Firebase

## Install CLI tool

`npm install -g firebase-tools`

## Add a Firebase HTTP Trigger

Go to backend/functions/ and modify index.js to add a function

Test it locally

`firebase serve --only hosting,functions`

Push it to firebase

`firebase deploy`

Push only one function:

`firebase deploy --only functions:<name1>`

## Modify security rules

Modify backend/database.rules.json

Deploy with

`firebase deploy --only database`

## Crash monitoring

The iOS version is using crashlytics with Firebase to monitor crash logs.
Visit https://console.firebase.google.com/project/stack-fd4e6/crashlytics/app/ios:org.StackApp.ios/issues to see the errors.


### New update
`rm -rf node_modules`

`npm i`

`cd ios`

`rm -rf Pods`

`rm -rf Podfile.lock`

`pod install`

`cd ..`

`react-native run-ios` or `npm run ios-iphonex` if you want to run on iPhone X simulator