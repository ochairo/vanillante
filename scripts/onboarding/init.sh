#!/bin/bash -eu

# Clear the terminal ----------------------------------------------------------
clear

# VARIABLES: Colors -----------------------------------------------------------
COLOR_BLUE=$(tput setaf 4)
COLOR_GRAY=$(tput setaf 8)
COLOR_GREEN=$(tput setaf 2)
COLOR_RED=$(tput setaf 1)
COLOR_DEFAULT=$(tput sgr0)

# VARIABLES: Paths ------------------------------------------------------------
PATH_ROOT=$(pwd)
PATH_HANDLERS=$PATH_ROOT/handlers
PATH_MESSAGES=$PATH_ROOT/messages
PATH_SETTINGS=$PATH_ROOT/settings

# HANDLERS --------------------------------------------------------------------
source $PATH_HANDLERS/error.sh
source $PATH_HANDLERS/question.sh

# MESSAGE: Welcome ------------------------------------------------------------
source $PATH_MESSAGES/welcome.sh

# Prepare ---------------------------------------------------------------------
source $PATH_ROOT/prepare.sh

# Setup -----------------------------------------------------------------------
source $PATH_ROOT/setup.sh

# MESSAGE: Complete -----------------------------------------------------------
source $PATH_MESSAGES/complete.sh

exit 0
