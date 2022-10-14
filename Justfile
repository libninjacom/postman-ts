export PATH := "./node_modules/.bin:" + env_var('PATH')

bootstrap:
    pnpm install

lint:
    prettier --write .

check:
    tsc --noEmit

run SCRIPT:
    node -r esbuild-register --no-warnings "{{SCRIPT}}"

test:
    echo No unit tests yet

test-full: bootstrap check test
    #!/usr/bin/env bash -euxo pipefail
    for file in $(ls examples); do
        just run "examples/$file"
    done