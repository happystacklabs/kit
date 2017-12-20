#!/bin/sh


welcome() {
  clear
  header
  # test
  startTests &
  finishTests
  kill "$!"
  wait $! 2>/dev/null
  # bump Version
  startBump
  finishBump
  # npm run build
  clear
  header
  startBuild &
  finishBuild
  kill "$!"
  wait $! 2>/dev/null
  # npm run lib
  startLib &
  finishLib
  kill "$!"
  wait $! 2>/dev/null
  # 200.html
  start200
  finish200
  # deploy surge
  startSurge &
  finishSurge
  kill "$!"
  wait $! 2>/dev/null
  # deploy npm package
  startPackage &
  finishPackage
  kill "$!"
  wait $! 2>/dev/null
  # success
  success
  exit 0
}

startTests() {
  local i sp n
  sp='🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛'
  n=${#sp}
  printf '\n\n\n\n\n'
  while sleep 0.2; do
    ereaseLine 8
    printf " ${sp:i++%${#sp}:1}  Test suite............... \e[38;5;105m[In progress]\e[39m\n"
    printf " ➡️  Bump version                                \n"
    printf " ➡️  Run build                                   \n"
    printf " ➡️  Run lib                                     \n"
    printf " ➡️  200.html                                    \n"
    printf " ➡️  Deploy Surge                                \n"
    printf " ➡️  Deploy package                            \n\n"
  done
}

finishTests() {
  if CI=true npm test > ./bash/out.log 2> ./bash/err.log ; then
    ereaseLine 5
  else
    ereaseLine 8
    printf " ❌  \e[31mTest suite.................... [Failed]\e[39m\n"
    printf " ➡️  Bump version                                \n"
    printf " ➡️  Run build                                   \n"
    printf " ➡️  Run lib                                     \n"
    printf " ➡️  200.html                                    \n"
    printf " ➡️  Deploy Surge                                \n"
    printf " ➡️  Deploy package                              \n"
    kill "$!"
    wait $! 2>/dev/null
    exited
    exit 1
  fi
}

startBump() {
  ereaseLine 3
  printf " ✅  \e[32mTest suite...................... \e[32m[Done]\e[39m\n"
  printf " 🕐  Bump version............. \e[38;5;105m[In progress]\e[39m \n"
  printf " ➡️  Run build                                   \n"
  printf " ➡️  Run lib                                     \n"
  printf " ➡️  200.html                                    \n"
  printf " ➡️  Deploy Surge                                \n"
  printf " ➡️  Deploy package                            \n\n"
  line
  bumpVersion
}

finishBump() {
  ereaseLine 8
}

startBuild() {
  local i sp n
  sp='🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛'
  n=${#sp}
  printf '\n\n\n\n\n'
  while sleep 0.2; do
    ereaseLine 8
    printf " ✅  \e[32mTest suite....................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mBump version..................... \e[32m[Done]\e[39m\n"
    printf " ${sp:i++%${#sp}:1}  Run build................. \e[38;5;105m[In progress]\e[39m \n"
    printf " ➡️  Run lib                                     \n"
    printf " ➡️  200.html                                    \n"
    printf " ➡️  Deploy Surge                                \n"
    printf " ➡️  Deploy package                            \n\n"
  done
}

finishBuild() {
  if npm run build > ./bash/out.log 2> ./bash/err.log ; then
    ereaseLine 5
  else
    ereaseLine 8
    printf " ✅  \e[32mTest suite....................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mBump version..................... \e[32m[Done]\e[39m\n"
    printf " ❌  \e[31mRun build...................... [Failed]\e[39m\n"
    printf " ➡️  Run lib                                     \n"
    printf " ➡️  200.html                                    \n"
    printf " ➡️  Deploy Surge                                \n"
    printf " ➡️  Deploy package                              \n"
    kill "$!"
    wait $! 2>/dev/null
    exited
    exit 1
  fi
}

startLib() {
  local i sp n
  sp='🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛'
  n=${#sp}
  printf '\n\n\n\n\n'
  while sleep 0.2; do
    ereaseLine 8
    printf " ✅  \e[32mTest suite....................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mBump version..................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mRun build........................ \e[32m[Done]\e[39m\n"
    printf " ${sp:i++%${#sp}:1}  Run lib................... \e[38;5;105m[In progress]\e[39m \n"
    printf " ➡️  200.html                                    \n"
    printf " ➡️  Deploy Surge                                \n"
    printf " ➡️  Deploy package                            \n\n"
  done
}

finishLib() {
  if npm run lib > ./bash/out.log 2> ./bash/err.log ; then
    ereaseLine 5
  else
    ereaseLine 8
    printf " ✅  \e[32mTest suite....................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mBump version..................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mRun build........................ \e[32m[Done]\e[39m\n"
    printf " ❌  \e[31mRun lib........................ [Failed]\e[39m\n"
    printf " ➡️  200.html                                    \n"
    printf " ➡️  Deploy Surge                                \n"
    printf " ➡️  Deploy package                              \n"
    kill "$!"
    wait $! 2>/dev/null
    exited
    exit 1
  fi
}

start200() {
  ereaseLine 3
  printf " ✅  \e[32mTest suite....................... \e[32m[Done]\e[39m\n"
  printf " ✅  \e[32mBump version..................... \e[32m[Done]\e[39m\n"
  printf " ✅  \e[32mRun build........................ \e[32m[Done]\e[39m\n"
  printf " ✅  \e[32mRun lib.......................... \e[32m[Done]\e[39m\n"
  printf " 🕐  200.html.................. \e[38;5;105m[In progress]\e[39m \n"
  printf " ➡️  Deploy Surge                                \n"
  printf " ➡️  Deploy package                            \n\n"
}

finish200() {
  if cp -rf ./build/index.html ./build/200.html > ./bash/out.log 2> ./bash/err.log ; then
    ereaseLine 5
  else
    ereaseLine 8
    printf " ✅  \e[32mTest suite....................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mBump version..................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mRun build........................ \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mRun lib.......................... \e[32m[Done]\e[39m\n"
    printf " ❌  \e[31m200.html....................... [Failed]\e[39m\n"
    printf " ➡️  Deploy Surge                                \n"
    printf " ➡️  Deploy package                              \n"
    exited
    exit 1
  fi
}

startSurge() {
  local i sp n
  sp='🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛'
  n=${#sp}
  printf '\n\n\n\n\n'
  while sleep 0.2; do
    ereaseLine 8
    printf " ✅  \e[32mTest suite....................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mBump version..................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mRun build........................ \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mRun lib.......................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32m200.html......................... \e[32m[Done]\e[39m\n"
    printf " ${sp:i++%${#sp}:1}  Deploy Surge.............. \e[38;5;105m[In progress]\e[39m \n"
    printf " ➡️  Deploy package                            \n\n"
  done
}

finishSurge() {
  if surge ./build  kit.happystack.io > ./bash/out.log 2> ./bash/err.log ; then
    ereaseLine 5
  else
    ereaseLine 8
    printf " ✅  \e[32mTest suite....................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mBump version..................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mRun build........................ \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mRun lib.......................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32m200.html......................... \e[32m[Done]\e[39m\n"
    printf " ❌  \e[31mDeploy Surge................... [Failed]\e[39m\n"
    printf " ➡️  Deploy package                              \n"
    kill "$!"
    wait $! 2>/dev/null
    exited
    exit 1
  fi
}

startPackage() {
  local i sp n
  sp='🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛'
  n=${#sp}
  printf '\n\n\n\n\n'
  while sleep 0.2; do
    ereaseLine 8
    printf " ✅  \e[32mTest suite....................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mBump version..................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mRun build........................ \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mRun lib.......................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32m200.html......................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mDeploy Surge..................... \e[32m[Done]\e[39m\n"
    printf " ${sp:i++%${#sp}:1}  Deploy package............ \e[38;5;105m[In progress]\e[39m \n\n"
  done
}

finishPackage() {
  if npm publish > ./bash/out.log 2> ./bash/err.log ; then
    ereaseLine 5
  else
    ereaseLine 8
    printf " ✅  \e[32mTest suite....................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mBump version..................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mRun build........................ \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mRun lib.......................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32m200.html......................... \e[32m[Done]\e[39m\n"
    printf " ✅  \e[32mDeploy Surge..................... \e[32m[Done]\e[39m\n"
    printf " ❌  \e[31mDeploy package................. [Failed]\e[39m\n"
    kill "$!"
    wait $! 2>/dev/null
    exited
    exit 1
  fi
}



# HELPERS

line() {
  printf "\e[38;5;240m-----------------------------------------\e[39m\n"
}

clear() {
  echo "\033c"
}

ereaseLine() {
  COUNTER=0
  while [  $COUNTER -lt $1 ]; do
    printf "\033[1A"
    let COUNTER=COUNTER+1
  done
}

header() {
printf "
   /\=========\™
 ./__\______/__\.
 |    |         |   \e[38;5;105mHAPPYSTACK KIT\e[39m
 |    |  \___/  |   Deploy Script
 |____|_________|

\e[38;5;240m===========================================\e[39m
\n\n\n
"
}

exited() {
printf "
\e[38;5;240m
.__________________________________________.
|                                          |
|                   ⚠️                      |
|          \e[31mDeploy script exited.\e[38;5;240m           |
|       Error log: cat bash/err.log        |
|                                          |
|__________________________________________|
\e[39m
"
}

success() {
  currentVersion=`npm view @happystack/kit version`
printf "
\n\n\n
.__________________________________________.
|                                          |
|      🎉_ Deployed to version \e[32m$currentVersion\e[39m!       |
|__________________________________________|
\n
"
}

# Operations
function bumpVersion {
  currentVersion=`npm view @happystack/kit version`

  # capture bumping version
  while ! [[ $newVersion =~ ^[0-9]+\.[0-9]+ ]] || [[ $newVersion == '' ]]
  do
    printf "Current version is \e[38;5;105m$currentVersion\e[39m.\n\n"
    printf "Bump version to : "
    read newVersion
    ereaseLine 3
  done

  # replace package.json
  search='("version":[[:space:]]*").+(")'
	replace="\1${newVersion}\2"
  sed -i ".tmp" -E "s/${search}/${replace}/g" package.json
	rm "package.json.tmp"

  # replace home index.js
  search="Version-${currentVersion}-"
	replace="Version-${newVersion}-"
  sed -i ".tmp" -E "s/${search}/${replace}/g" ./src/appComponents/Home/index.js
	rm "./src/appComponents/Home/index.js.tmp"
}



# launch script
welcome
