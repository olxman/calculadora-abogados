# Guía: publicar una copia en GitHub Pages

La demo oficial de LexCalc ya está en:

**https://olxman.github.io/calculadora-abogados/**

Esta guía es para quien quiera **publicar su propia copia** (por ejemplo, un fork con los datos de su estudio). No necesitas estos pasos para usar la calculadora oficial.

El flujo de despliegue del repositorio es [`.github/workflows/static.yml`](.github/workflows/static.yml).

---

## Opción 1: fork desde la web (sin instalar nada)

1. Entra a [github.com/olxman/calculadora-abogados](https://github.com/olxman/calculadora-abogados) e inicia sesión.
2. Pulsa **Fork** y crea el fork en tu cuenta.
3. En tu fork, ve a **Settings → Pages**.
4. En **Source**, elige **GitHub Actions**.
5. Si el flujo no corre solo, ve a la pestaña **Actions** y ejecuta **Deploy static content to Pages**.
6. En unos minutos tu copia estará en:

   `https://TU-USUARIO.github.io/calculadora-abogados/`

   (cambia `TU-USUARIO` por tu usuario de GitHub.)

### Actualizar el código en tu fork

1. Abre `index.html` en tu repositorio.
2. Pulsa el lápiz (Edit), haz el cambio y confirma con **Commit changes**.
3. El sitio se actualiza solo en 2–3 minutos. Si no ves el cambio, recarga forzada (Ctrl+Shift+R o Cmd+Shift+R).

---

## Opción 2: clonar con Git

Requisitos: [Git](https://git-scm.com/downloads) y una cuenta de GitHub.

```bash
git clone https://github.com/olxman/calculadora-abogados.git
cd calculadora-abogados
```

Si vas a publicar tu propia copia, crea un repositorio vacío en tu cuenta, apunta el remoto y sube `main`:

```bash
git remote rename origin upstream
git remote add origin https://github.com/TU-USUARIO/calculadora-abogados.git
git push -u origin main
```

Luego activa GitHub Pages como en la opción 1 (Settings → Pages → GitHub Actions).

Para contribuir al proyecto original, no hace falta cambiar el remoto: haz un fork en GitHub, clona **tu fork** y abre un pull request hacia [olxman/calculadora-abogados](https://github.com/olxman/calculadora-abogados). Ver [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Usar la calculadora sin publicarla

Abre `index.html` en el navegador, o en la carpeta del proyecto ejecuta:

```bash
python3 -m http.server 8080
```

y entra a [http://localhost:8080](http://localhost:8080).

---

## Configuración y cotizaciones

1. En la app, abre **Configuración**.
2. Completa los datos y el logo de tu estudio. Aparecerán en el PDF.
3. Pulsa **Actualizar UF** para traer el valor oficial desde [mindicador.cl](https://mindicador.cl), o ingresa el valor a mano.
4. Arma la cotización y pulsa **Generar PDF**. El navegador puede pedir permiso para ventanas emergentes.

Los datos de la sesión viven en el navegador. Si recargas la página, vuelven los valores por defecto que están en `index.html`.

---

## Problemas frecuentes

### "El sitio no carga"

- Espera unos minutos después de activar Pages.
- Revisa que la URL use tu usuario de GitHub.
- Mira la pestaña **Actions** por si el flujo falló.

### "Los cambios no se ven"

- Espera 2–3 minutos después del commit.
- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R).

### "Error en GitHub Actions"

- El archivo de despliegue debe ser `.github/workflows/static.yml`.
- En Settings → Pages, la fuente debe ser **GitHub Actions**.

### "No se genera el PDF"

- Permite ventanas emergentes para el sitio.
- Prueba en Chrome, Firefox, Edge o Safari actualizados.

---

## Usar en el celular

La calculadora funciona en el navegador del teléfono. Para fijarla como acceso directo:

- **iPhone:** Compartir → Agregar a inicio
- **Android:** menú ⋮ → Agregar a pantalla de inicio

---

## Licencia y soporte

El proyecto es de [código abierto (MIT)](LICENSE). Problemas o ideas: abre un [issue](https://github.com/olxman/calculadora-abogados/issues) en el repositorio original.
