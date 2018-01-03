#!/bin/sh


# draw the header
# drawHeader() {
#   name='Bot script'
#   if [[ $# -eq 1 ]] ; then
#     name=$1
#   fi
# printf "
#     /\═════════\™
#    /__\‸_____/__\‸   \e[38;5;105mHAPPYSTACK\e[39m
#   │    │         │   $name
#   │    │  \___/  │
#   ╰────┴─────────╯
# "
# }





# default step
defaultStep() {
  drawLineWith "$arrowIcon  $1" left
}




# in progress step
inProgressStep() {
  printf "\e[38;5;240m│\e[39m"
  drawBetween "$timeIcon  $1" " \e[38;5;105m[In progress]\e[39m"
  printf "\e[38;5;240m│\e[39m"
}



#in progress animated
inProgressStepAnimated() {
  printf "\e[38;5;240m│\e[39m"
  drawBetween "$1  $2" " \e[38;5;105m[In progress]\e[39m"
  printf "\e[38;5;240m│\e[39m"
}




# done step
doneStep() {
  printf "\e[38;5;240m│\e[39m"
  drawBetween "$successIcon  \e[32m$1" " \e[32m[Done]\e[39m"
  printf "\e[38;5;240m│\e[39m"
}




# error step
errorStep() {
  printf "\e[38;5;240m│\e[39m"
  drawBetween "$errorIcon  \e[31m$1" " \e[31m[Failed]\e[39m"
  printf "\e[38;5;240m│\e[39m"
}




# render lines
renderLines() {
  counter=0
  currentStep=$(( $1 ))
  steps="$2"
  stepsLength=${#steps[@]}

  while [  $counter -lt $stepsLength ]; do
    index=$(( $counter ))
    content="${steps[$index]}"

    if [ "$index" == "$currentStep" ]; then
      if [[ $# -eq 3 ]] ; then
        if [ "$3" == "--error" ]; then
          errorStep "$content"
        else
          inProgressStep "$content"
        fi
      else
        inProgressStep "$content"
      fi
    else
      if [  "$index" -lt "$currentStep" ]; then
        doneStep "$content"
      else
        defaultStep "$content"
      fi
    fi

    drawLine
    counter=$(( counter + 1 ))
  done
}




# erease N lines
# ereaseLine() {
#   COUNTER=0
#   while [  $COUNTER -lt $1 ]; do
#     printf "\033[1A"
#     let COUNTER=COUNTER+1
#   done
# }




# clear all screen
# clear() {
#   echo "\033c"
# }




# nudge down prompt N times
nudgeDown() {
  tput cud $1
}




# nudge up prompt N times
nudgeUp() {
  tput cuu $1
}




# clear line
clearLine() {
  echo `tput el1`
}




# progress bar
progressBar() {
  steps=$3
  currentStep=$(( $2 ))
  stepsLength=${#steps[@]}

  progress=$(echo "scale=1;($currentStep / $stepsLength)*100" | bc -l)

  # make one or two digit number take same width
  padding=5
  if [ ${#progress} -lt 2 ]; then
    padding=4
  fi
  if [ ${#progress} -gt 4 ]; then
    padding=6
  fi


  # maths
  barLength=$(( $1 - padding ))
  activeWidth=$(echo "($barLength / $stepsLength)*$currentStep" | bc -l)
  roundedActiveWidth=$(printf %.0f $activeWidth)
  emptyWidth=$(( barLength - roundedActiveWidth ))

  # limit progress to 100%
  if [ $currentStep -gt $stepsLength  ]; then
    progress=100
  fi

  # print the progress
  printf " %.0f%% " $progress

  # render the progress bar
  COUNTER=0
  while [  $COUNTER -lt $barLength ]; do
    if [[ $COUNTER -lt $roundedActiveWidth  ]]; then
      printf "\e[38;5;105m░\e[39m"
    else
      printf " "
    fi
    let COUNTER=COUNTER+1
  done
}




# draw box
drawBox() {
  padding=3
  label="Current version $currentVersion"
  progressWidth=$(( width - ${#label} - ( padding * 2 ) - 3 ))
  separatorPosition=$(( ${#label} + ( padding * 2 ) ))

  #draw top
  drawTop $separatorPosition
  printf "\e[38;5;240m│\e[39m"
  space $padding
  printf "$label"
  space $padding

  # draw progress
  printf "\e[38;5;240m│\e[39m"
  progressBar $progressWidth $1 $2

  #draw bottom
  printf "\e[38;5;240m│\e[39m"
  drawSeparator $separatorPosition

  #draw rest of box
  drawLine
  renderLines $1 $2
  drawBottom
}




# stop animation
# stopAnimation() {
#   kill "$!"
#   wait $! 2>/dev/null
# }




# # make cursor invisible
# hideCursor() {
#   tput civis
# }




# # make cursor visible
# unhideCursor() {
#   tput cvvis
# }
