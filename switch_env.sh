#!/usr/bin/env bash

ENVIRONMENT_DIR=environments
BACKEND_DIR=backend

if [ "$1" == "old" ] || [ "$1" == "dev" ] || [ "$1" == "staging" ] || [ "$1" == "prod" ];
then
  echo "Switching to Firebase environment: $1"
  echo ""

  echo "Writing ios Firebase config file"
  CMD="yes | cp -rf $ENVIRONMENT_DIR/$1/GoogleService-Info.plist ios/Stack/"
  echo "Running         $CMD"
  eval $CMD
  echo ""

  echo "Writing env config file"
  CMD="yes | cp -rf $ENVIRONMENT_DIR/$1/config .env"
  echo "Running         $CMD"
  eval $CMD
  echo ""

  echo "Switching Firebase CLI environments"
  CMD="cd $BACKEND_DIR/ && firebase use $1 && cd ../"
  echo "Running         $CMD"
  eval $CMD
  echo ""

  echo "/!\\ REMINDER /!\\"
  echo "----------------"
  echo "If security rules have changed, update with: firebase deploy --only database"
  echo "If cloud functions have changed, update with: firebase deploy --only functions"


else
  echo "Need one of [old | dev | staging | prod] as argument"
fi
