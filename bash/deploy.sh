#!/bin/sh


#imports
source bash/BashKitLibrary.sh
source bash/helpers.sh




# icons
arrowIcon='➡️'
timeIcon='🕐'
timeSequence='🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛'
errorIcon='❌'
successIcon='✅'





# steps
steps[0]='Test suite'
steps[1]='Bump version'
steps[2]='Run build'
steps[3]='Run lib'
steps[4]='Run 200.html'
steps[5]='Deploy to Surge'
steps[6]='Deploy package to NPM'





# vars
currentVersion=`npm view @happystack/kit version`
currentStep=0
name='Kit deployment script'
start=`date +%s`




# in progress animation
inProgress() {
  stepsLength=${#steps[@]}
  totalLength=$(( ( $stepsLength * 2 ) + 2 - ( 2 * $currentStep ) ))
  nudgeDown 2
  while sleep 0.2; do
    nudgeUp "$totalLength"
    clearLine
    nudgeUp 1
    content="${steps[$currentStep]}"
    inProgressStepAnimated "${timeSequence:i++%${#timeSequence}:1}" "$content"
    nudgeDown "$totalLength"
  done
}




# run tests
runTests() {
  runTask 'CI=true npm test'
}




# bumb version
bumbVersion() {
  # draw box
  drawBox "$currentStep" "$steps"

  # capture bumping version
  emptyLine 2
  unhideCursor
  while ! [[ $newVersion =~ ^[0-9]+\.[0-9]+ ]] || [[ $newVersion == '' ]]
  do
    printf " ⚠️  Current version is \e[38;5;105m$currentVersion\e[39m"
    emptyLine 1
    drawTextInput "Bump version to" newVersion
    hideCursor
    ereaseLine 5
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

  # replace README.md
  search="Version-${currentVersion}-"
	replace="Version-${newVersion}-"
  sed -i ".tmp" -E "s/${search}/${replace}/g" README.md
	rm "README.md.tmp"

  # increment currentStep
  currentStep=$(( $currentStep + 1 ))

  #
  hideCursor
  clear
  hideCursor
  drawHeader "$name"
}




# run build
runBuild() {
  runTask 'npm run build'
}




# run lib
runLib() {
  runTask 'npm run lib'
}




# run 200.html
run200() {
  runTask 'cp -rf ./build/index.html ./build/200.html'
}




# deploy to surge
deploySurge() {
  runTask 'surge ./build  kit.happystack.io'
}




# deploy package
deployPackage() {
  runTask 'npm publish'
}




runTask() {
  # draw box
  drawBox "$currentStep" "$steps"

  # start animation
  inProgress &

  # run command
  if eval $1 > ./bash/out.log 2> ./bash/err.log; then
    #place prompt
    nudgeDown 2
    clearLine

    # increment currentStep
    currentStep=$(( $currentStep + 1 ))

    # kill animation
    stopAnimation

    # clear previous box
    stepsLength=${#steps[@]}
    totalLength=$(( ( $stepsLength * 2 ) + ( 3 * 2 ) + 2 + 2 ))
    clearLine
    ereaseLine $totalLength
  else
    # kill animation
    stopAnimation

    # render error box
    stepsLength=${#steps[@]}
    totalLength=$(( ( $stepsLength * 2 ) + 3 ))
    clearLine
    ereaseLine $totalLength
    renderLines "$currentStep" "$steps" "--error"
    errorBox

    # place prompt
    nudgeDown 2
    clearLine

    # exit program
    exit 1
  fi
}




# success box
successBox() {
  message="🎉  Deployed to version $currentVersion in $1 seconds!"
  clearLine
  nudgeUp "2"
  drawLine
  drawSeparator
  drawLine
  drawLineWith "$message"
  drawLine
  drawBottom
}




# error box
errorBox() {
  clearLine
  nudgeUp "1"
  drawLine
  drawSeparator
  drawLine
  drawLineWith "💩  Error log: cat bash/err.log"
  drawLine
  drawBottom
}




run() {
  # init
  hideCursor
  clear
  hideCursor
  drawHeader "$name"

  # step 1: run tests
  runTests

  # step 2: bumb version
  bumbVersion

  # step 3: run build
  runBuild

  # step 4: run lib
  runLib

  # step 5: run 200
  run200

  # step 6: deploy to Surge
  deploySurge

  # step 7: deploy package
  deployPackage

  # deploy succeed
  currentStep=$(( $currentStep + 1 ))
  drawBox "$currentStep" "$steps"
  end=`date +%s`
  runtime=$((end-start))
  successBox $runtime

  # end: exit program
  nudgeDown 5
  clearLine
  unhideCursor
  exit 0
}

run
