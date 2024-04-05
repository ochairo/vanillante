#!/bin/bash -eu

if [ "$(uname -s)" != "Linux" ] && [ "$(uname -s)" != "Darwin" ]; then
  handle_error 1 "This is only for Mac/Linux/WSL"
fi

question="Do you want to continue?"
responseRef="selectedValue"
option1="Yes"
option2="No"
handle_question "$question" "$responseRef" "$option1" "$option2"

echo "> Your selection: $selectedValue"
case "$selectedValue" in
"$option1") ;;
"$option2")
  echo ""
  echo "${COLOR_BLUE}"
  echo "________________________________________________________________________________"
  echo "                              PROCESS CANCELED!"
  echo "${COLOR_DEFAULT}"
  exit 0
  ;;
esac
