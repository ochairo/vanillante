#!/bin/bash -eu

handle_error() {
  local exit_code=$1
  local error_message=$2

  echo "${COLOR_RED}"
  echo "────────────────────────────────── ERROR ───────────────────────────────────────"

  if [[ "$exit_code" =~ ^[0-9]+$ ]]; then
    echo "Number: ${exit_code}"
  fi

  if [ -n "$error_message" ]; then
    echo "Message: ${error_message}"
  elif [ -n "$exit_code" ]; then
    echo "Message: ${exit_code}"
  fi

  echo "________________________________________________________________________________"
  echo "                                PROCESS END"
  echo "${COLOR_DEFAULT}"

  exit "${exit_code:-1}"
}
