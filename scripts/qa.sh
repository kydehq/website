#!/usr/bin/env bash
# Run all QA checks locally — mirrors .github/workflows/qa.yml
#
# Usage: ./scripts/qa.sh [--skip-build] [--skip-links]

set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."

SKIP_BUILD=0
SKIP_LINKS=0
for arg in "$@"; do
    case "$arg" in
        --skip-build) SKIP_BUILD=1 ;;
        --skip-links) SKIP_LINKS=1 ;;
        -h|--help)
            grep '^#' "$0" | sed 's/^# \{0,1\}//'
            exit 0
            ;;
        *)
            echo "Unknown arg: $arg" >&2
            exit 2
            ;;
    esac
done

# Pretty output helpers
BOLD=$'\033[1m'
GREEN=$'\033[32m'
RED=$'\033[31m'
YELLOW=$'\033[33m'
DIM=$'\033[2m'
RESET=$'\033[0m'

declare -a RESULTS=()
FAILED=0

run_step() {
    local name="$1"
    shift
    echo
    echo "${BOLD}━━━ ${name} ━━━${RESET}"
    echo "${DIM}\$ $*${RESET}"
    if "$@"; then
        RESULTS+=("${GREEN}✓${RESET} ${name}")
    else
        RESULTS+=("${RED}✗${RESET} ${name}")
        FAILED=1
    fi
}

skip_step() {
    local name="$1"
    local reason="$2"
    RESULTS+=("${YELLOW}⊘${RESET} ${name} ${DIM}(${reason})${RESET}")
}

# 1. Build
if [ "$SKIP_BUILD" -eq 0 ]; then
    run_step "Build" npm run build
else
    skip_step "Build" "--skip-build"
fi

# 2. Spell check
run_step "Spell check" npm run qa:spell

# 3. HTML validation (needs dist/)
if [ -d dist ]; then
    run_step "HTML validation" npm run qa:html
else
    skip_step "HTML validation" "no dist/ — run build first"
fi

# 4. Broken links (needs dist/ + lychee binary)
if [ "$SKIP_LINKS" -eq 1 ]; then
    skip_step "Broken links" "--skip-links"
elif [ ! -d dist ]; then
    skip_step "Broken links" "no dist/ — run build first"
elif ! command -v lychee >/dev/null 2>&1; then
    skip_step "Broken links" "lychee not installed — see https://lychee.cli.rs/installation/"
else
    run_step "Broken links" npm run qa:links
fi

# Summary
echo
echo "${BOLD}━━━ Summary ━━━${RESET}"
for line in "${RESULTS[@]}"; do
    echo "  $line"
done
echo

if [ "$FAILED" -ne 0 ]; then
    echo "${RED}${BOLD}QA failed.${RESET}"
    exit 1
fi
echo "${GREEN}${BOLD}QA passed.${RESET}"
