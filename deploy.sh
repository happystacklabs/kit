#!/usr/bin/env bash
# The MIT License (MIT)
# Copyright (c) Happystack


# variables
# shellcheck disable=SC2034
tasks=()
tasksCommand=()


################################################################################
# Your custom content for the display, title and subtitle
################################################################################
currentVersion=$(grep -m1 version package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g')
display="Current Version: ${currentVersion}"
title='Happystack Kit'
subtitle='Deploy'


################################################################################
# Task 1
################################################################################
task1() {
  CI=true npm test
}
tasks[0]='Test suite'
tasksCommand[0]="task1"


################################################################################
# Task 2
################################################################################
tasks[1]='Linter'
tasksCommand[1]='npm run lint'


################################################################################
# Task 3
################################################################################
# tasks[2]='Snyk security audit'
# tasksCommand[2]='snyk test'


################################################################################
# Task 4
################################################################################

task4() {
  # get the user input
  getInput " ⚠️  Current version is ${currentVersion}" "Bumb to version"
  local newVersion="${inputResponse}"

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

}
tasks[2]='Bump version'
tasksCommand[2]="task4"


################################################################################
# Task 5
################################################################################
tasks[3]='Run lib'
tasksCommand[3]='npm run lib'

################################################################################
# Task 6
################################################################################
tasks[4]='Run build'
tasksCommand[4]='npm run build'

################################################################################
# Task 7
################################################################################
tasks[5]='Run 200.html'
tasksCommand[5]='cp -rf ./build/index.html ./build/200.html'


################################################################################
# Task 8
################################################################################
tasks[6]='Deploy to Surge'
tasksCommand[6]='surge ./build  kit.happystack.io'


################################################################################
# Task 9
################################################################################
tasks[7]='Deploy package to NPM'
tasksCommand[7]='npm publish'
