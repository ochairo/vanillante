#!/bin/bash -eu

if ! command -v "fnm" &>/dev/null; then
  if ! command -v "brew" &>/dev/null; then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  fi

  brew install fnm

  if [ "$(uname -s)" == "Linux" ]; then
    echo 'eval "$(fnm env --use-on-cd)"' >>~/.bash_profile
  fi

  if [ "$(uname -s)" == "Darwin" ]; then
    echo 'eval "$(fnm env --use-on-cd)"' >>~/.zshrc
  fi

  fnm use
  npm ci
fi
