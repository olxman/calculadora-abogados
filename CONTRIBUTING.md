# Contributing to LexCalc

Thank you for considering a contribution. This project is a single-page fee calculator used in production by a Chilean law firm, so changes should stay easy to review and must not break the live app.

A short Spanish summary is at the end of this file.

## How to contribute

1. Open an [issue](https://github.com/olxman/calculadora-abogados/issues) for bugs, fee-table corrections, or feature ideas. Search existing issues first.
2. Fork the repository and create a branch from `main`.
3. Make a focused change. Prefer small pull requests over large ones.
4. Test by opening `index.html` in a current desktop browser and, if you touch layout, on a phone-sized window as well.
5. Open a pull request and fill in the template.

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## What to test before you send a PR

- The calculator still loads and you can add at least one service to a quote.
- UF update from mindicador.cl still works, or fails with the existing manual fallback.
- PDF generation still opens the quote window (allow pop-ups).
- You did not introduce `TU-USUARIO` placeholders or broken demo links.
- You did not commit secrets, credentials, or private client data.

## Project conventions

- The running app is `index.html`. Fee ranges used in production live there.
- `CODIGO-FUENTE-PRECIOS.js` is a reference copy of an earlier CLP table. It is **not** loaded by the live page. If you update fees, change `index.html` (and only then consider syncing the reference file).
- Do not add a build step or convert the app to a bundler unless that change is agreed in an issue first.
- Keep documentation honest: no invented usage numbers, stars, or features the code does not have.
- User-facing copy in the app is Spanish.

## Fee table and legal content

Referential fees should stay conservative and clearly labeled as estimates. If you propose a price change, explain the source (for example, a public reference or professional practice) in the pull request. Do not present any figure as a mandatory bar tariff or as legal advice.

## Security

Please report vulnerabilities privately by following [SECURITY.md](SECURITY.md). Do not open a public issue for a security flaw.

---

# Cómo contribuir (resumen)

1. Abre un issue describiendo el problema o la idea.
2. Haz un fork, crea una rama y un cambio acotado.
3. Prueba abriendo `index.html` en el navegador.
4. Envía un pull request.

La calculadora en producción está en `index.html`. No agregues un paso de compilación ni datos privados. Los honorarios son referenciales, no un arancel obligatorio.
