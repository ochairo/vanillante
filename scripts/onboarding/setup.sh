#!/bin/bash -eu

SETUPS=(
  "$PATH_SETTINGS/vscode.sh"
  "$PATH_SETTINGS/node.sh"
)

for SETUP in "${SETUPS[@]}"; do
  echo ""
  echo "${COLOR_BLUE}Running.........................................................................${COLOR_DEFAULT}"
  echo " .${SETUP//$PATH_ROOT/}"
  echo ""

  source $SETUP

  if [ $? -ne 0 ]; then
    handle_error "Error running .${SETUP//$PATH_ROOT/}"
  else
    echo "${COLOR_GREEN}........................................................................Complete${COLOR_DEFAULT}"
    echo ""
    echo ""
  fi
done
