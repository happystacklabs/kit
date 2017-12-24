#!/bin/sh


# width and height of the window
width="$(tput cols)"
height="$(tput lines)"




#\
# draw empty line
# Ex: $ emptyLine 5
# \n\n\n\n\n # return 5 time \n
#\
emptyLine() {
  COUNTER=0
  while [  $COUNTER -lt $1 ]; do
    printf "\n"
    let COUNTER=COUNTER+1
  done
}



spaceLines() {
  COUNTER=0
  while [  $COUNTER -lt $1 ]; do
    space "$width"
    let COUNTER=COUNTER+1
  done
}




# draw a full width line
line() {
  COUNTER=0
  while [  $COUNTER -lt $width ]; do
    printf "\e[38;5;240m─\e[39m"
    let COUNTER=COUNTER+1
  done
}





# draw a full width thick line
thickLine() {
  COUNTER=0
  while [  $COUNTER -lt $width ]; do
    printf "\e[38;5;240m═\e[39m"
    let COUNTER=COUNTER+1
  done
}




# draw a space
space() {
  COUNTER=0
  while [  $COUNTER -lt $1 ]; do
    printf " "
    let COUNTER=COUNTER+1
  done
}




# draw top of box
drawTop() {
  # vars
  size=$(( width - 2 ))

  # draw left
  printf "\e[38;5;240m╭"

  # draw middle
  COUNTER=0
  while [  $COUNTER -lt $size ]; do
    if [[ $# -eq 1 ]] ; then
      if [ $COUNTER = $1 ]; then
        printf "┬"
      else
        printf "─"
      fi
    else
      printf "─"
    fi
    let COUNTER=COUNTER+1
  done

  # draw right
  printf "╮\e[39m"
}




# draw bottom of box
drawBottom() {
  # vars
  size=$(( width - 2 ))

  # draw left
  printf "\e[38;5;240m╰"

  # draw middle
  COUNTER=0
  while [  $COUNTER -lt $size ]; do
    if [[ $# -eq 1 ]] ; then
      if [ $COUNTER = $1 ]; then
        printf "┴"
      else
        printf "─"
      fi
    else
      printf "─"
    fi
    let COUNTER=COUNTER+1
  done

  # draw right
  printf "╯\e[39m"
}



# draw a line in box
drawLine() {
  # vars
  size=$(( width - 2 ))

  # draw left
  printf "\e[38;5;240m│"

  # draw middle
  COUNTER=0
  while [  $COUNTER -lt $size ]; do
    printf " "
    let COUNTER=COUNTER+1
  done

  # draw right
  printf "│\e[39m"
}




# draw a line in box
drawSeparator() {
  #vars
  size=$(( width - 2 ))

  # draw left
  printf "\e[38;5;240m├"

  # draw middle
  COUNTER=0
  while [  $COUNTER -lt $size ]; do
    if [[ $# -eq 1 ]] ; then
      if [ $COUNTER = $1 ]; then
        printf "┴"
      else
        printf "─"
      fi
    else
      printf "─"
    fi
    let COUNTER=COUNTER+1
  done

  # draw right
  printf "┤\e[39m"
}




#\
# draw a line with content in box
# ex: $ drawLineWith [content] [(default)center|left|right]
#\
drawLineWith() {
  # define default padding to center
  content="$1"
  paddingLeft=$(( (width - ${#content}) / 2 ))
  paddingRight=$(( width - 2 - paddingLeft - ${#1} ))

  # define padding based on aligment provided
  if [[ $# -eq 2 ]] ; then
    # align left
    if [ $2 = 'left' ]; then
      paddingLeft=3
      paddingRight=$(( width - 1 - paddingLeft - ${#1} ))
    fi
    # align right
    if [ $2 = 'right' ]; then
      paddingRight=3
      paddingLeft=$(( width - 1 - paddingRight - ${#1} ))
    fi
  fi

  # draw left
  printf "\e[38;5;240m│\e[39m"

  # draw left padding
  COUNTER=0
  while [  $COUNTER -lt $paddingLeft ]; do
    printf " "
    let COUNTER=COUNTER+1
  done

  # draw content
  printf "$content"

  # draw right padding
  COUNTER=0
  while [  $COUNTER -lt $paddingRight ]; do
    printf " "
    let COUNTER=COUNTER+1
  done

  # draw right
  printf "\e[38;5;240m│\e[39m\n"
}




#\
# draw left and right content with a dotted spacer
# ex: $ drawBetween [left content] [right content] [(default)dotted|space]
#\
drawBetween() {
  # vars
  contentLeft=$1
  contentRight=$2
  padding=3
  middleSize=$(( $width - ${#contentLeft} - ${#contentRight} + ( 2 * $padding ) + 4 ))

  # draw left
  space $padding
  printf "$contentLeft"

  # draw middle
  COUNTER=0
  while [  $COUNTER -lt $middleSize ]; do
    printf "."
    let COUNTER=COUNTER+1
  done


  # draw right
  printf "$contentRight"
  space $padding

}




# draw a text input
drawTextInput() {
  padding=3
  label=$1
  inputWidth=$(( width - ${#label} - ( padding * 2 ) - 3 ))
  separatorPosition=$(( ${#label} + ( padding * 2 ) ))
  local  __result=$2

  # draw top
  drawTop $separatorPosition
  printf "\e[38;5;240m│\e[39m"
  space $padding
  printf "\033[1m$label\033[0m"
  space $padding

  # draw middle
  printf "\e[38;5;240m│\e[39m"
  printf "\e[48;5;235m"
  COUNTER=0
  while [  $COUNTER -lt $inputWidth ]; do
    printf " "
    let COUNTER=COUNTER+1
  done
  printf "\e[0m"

  #draw bottom
  printf "\e[38;5;240m│\e[39m"
  drawBottom $separatorPosition

  # place prompt
  printf "\033[1A"
  nudge=$(( $inputWidth - 1 ))
  tput cub "$nudge"
  printf "\e[48;5;235m"
  printf "\e[38;5;105m"
  read newVersion
  printf "\e[39m"
  printf "\e[0m"
  emptyLine 2

  eval $__result="'$newVersion'"
}
