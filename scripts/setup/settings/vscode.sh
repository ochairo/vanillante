#!/bin/bash -eu

question="Do you want to setup VScode?"
responseRef="selectedValue"
option1="Yes"
option2="No"
handle_question "$question" "$responseRef" "$option1" "$option2"

echo "> Your selection: $selectedValue"
case "$selectedValue" in
"$option1")

  if ! command -v "code" &>/dev/null; then
    if ! command -v "brew" &>/dev/null; then
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi
    brew install --cask visual-studio-code
  fi

  # -------------------- Essentials ----------------------------------------------
  code --install-extension aaron-bond.better-comments            # Comment Highlighter
  code --install-extension chrmarti.regex                        # Regex Previewer
  code --install-extension streetsidesoftware.code-spell-checker # Spell Checker
  code --install-extension usernamehw.errorlens                  # Error Displayer
  code --install-extension wmaurer.change-case                   # Change Case

  # -------------------- Formatter -----------------------------------------------
  code --install-extension esbenp.prettier-vscode
  code --install-extension EditorConfig.EditorConfig
  code --install-extension foxundermoon.shell-format

  # -------------------- Copilot -------------------------------------------------
  code --install-extension GitHub.copilot
  code --install-extension GitHub.copilot-chat

  # -------------------- Git -----------------------------------------------------
  code --install-extension eamodio.gitlens
  code --install-extension mhutchie.git-graph

  # -------------------- HTML ----------------------------------------------------
  code --install-extension formulahendry.auto-close-tag

  # -------------------- CSS -----------------------------------------------------
  code --install-extension anseki.vscode-color

  # -------------------- JavaScript ----------------------------------------------
  code --install-extension dbaeumer.vscode-eslint

  # -------------------- Markdown ------------------------------------------------
  code --install-extension DavidAnson.vscode-markdownlint

  # -------------------- Draw.io -------------------------------------------------
  code --install-extension hediet.vscode-drawio
  ;;
"$option2") ;;
esac
