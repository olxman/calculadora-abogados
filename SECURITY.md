# Security policy

## Supported versions

Only the latest commit on the `main` branch of
[olxman/calculadora-abogados](https://github.com/olxman/calculadora-abogados)
is supported. That is also what [the live demo](https://olxman.github.io/calculadora-abogados/)
serves.

## What this app stores

LexCalc is a static page. Firm settings, quotes, and logos live in the browser
session; they are not sent to a project server. The official UF value is
requested from the third-party API [mindicador.cl](https://mindicador.cl).
PDF quotes are generated locally in the browser.

Do not paste secrets, passwords, or confidential client files into issues,
pull requests, or sample quotes in this repository.

## Reporting a vulnerability

Please **do not** open a public issue for a security vulnerability.

Report it privately through GitHub's
[private vulnerability reporting](https://github.com/olxman/calculadora-abogados/security/advisories/new)
or by contacting the maintainer on GitHub ([@olxman](https://github.com/olxman)).

Include a short description, the affected file or URL, and steps to reproduce.
You should receive an acknowledgement within 7 days. If we confirm the report,
we will work on a fix and credit you if you want that.

## Scope

In scope: this repository, the GitHub Pages site at
`https://olxman.github.io/calculadora-abogados/`, and the official workflows
under `.github/workflows/`.

Out of scope: third-party services such as mindicador.cl, CDNs used to load
React or fonts, and forks operated by other people.
