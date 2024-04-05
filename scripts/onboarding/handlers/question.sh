#!/bin/bash

handle_question() {
  local question=$1
  local answer=$2
  local options=("${@:3}")

  while true; do
    echo "${COLOR_BLUE}$question${COLOR_DEFAULT} (Enter a number)"
    for ((i = 0; i < ${#options[@]}; i++)); do
      echo "  $((i + 1)). ${options[i]}"
    done
    read -ers -p "  " choice
    if [[ "$choice" =~ ^[1-9]+$ && "$choice" -ge 1 && "$choice" -le ${#options[@]} ]]; then
      eval "$answer='${options[choice - 1]}'"
      return 0
    else
      echo ""
      echo "${COLOR_RED}  Please enter the number of the desired option.${COLOR_DEFAULT}"
      echo ""
      echo ""
    fi
  done
}
