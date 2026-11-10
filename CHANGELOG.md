# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project uses [Semantic Versioning](https://semver.org/).

## [1.0.0] — 2026-11-10

First tagged release of the current LexCalc app (the public site already
running at [olxman.github.io/calculadora-abogados](https://olxman.github.io/calculadora-abogados/)).

This tag does not change calculator behavior. It adds project documentation,
an MIT license file, contribution guidelines, and repository metadata.

### Added

- `LICENSE` (MIT, copyright 2025-2026 Pablo Riquelme)
- Bilingual README with the real demo and clone URLs
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, issue and pull request templates
- GitHub Actions check that validates HTML and documentation links without deploying

### Documentation

- Clarified that the live app is the standalone `index.html` page (React 18 via CDN)
- Described the 14 legal areas and 135 referential services used in the current UI
- Stated that fee figures are referential estimates, not legal advice

## History before 1.0.0 (untagged)

The notes below follow the git history of `main`. They are summarized from
commit messages; there were no version tags before 1.0.0.

### 2026-09-22 — LexCalc v2

- Commits: `Update Calc 20 sep 2026`, `Update v2 Sep 20 2026`, `Last Change Sep 20 2026 V2 Late`
- Current public app: UF-based fee ranges, 14 legal areas, quote builder, PDF output, firm letterhead, automatic UF from mindicador.cl

### 2026-03-23

- Font update in `index.html`

### 2025-12-16 — Initial public repository

- First upload of the calculator, README, GitHub Pages workflow (`.github/workflows/static.yml`), and the CLP reference table in `CODIGO-FUENTE-PRECIOS.js`

[1.0.0]: https://github.com/olxman/calculadora-abogados/releases/tag/v1.0.0
