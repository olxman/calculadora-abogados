# 📚 GUÍA COMPLETA: Subir Calculadora a GitHub Pages

## 🎯 Resultado Final
Tu calculadora estará disponible en: `https://TU-USUARIO.github.io/calculadora-abogados`

---

## 📋 OPCIÓN 1: Subir desde la Web (Sin instalar nada)

### Paso 1: Crear cuenta en GitHub
1. Ve a [github.com](https://github.com)
2. Click en "Sign up"
3. Completa el registro con tu email

### Paso 2: Crear repositorio nuevo
1. Inicia sesión en GitHub
2. Click en el botón verde **"New"** o ve a [github.com/new](https://github.com/new)
3. Configura:
   - **Repository name:** `calculadora-abogados`
   - **Description:** `Calculadora de honorarios legales Chile`
   - **Public** ✓ (marcado)
   - **Add a README file** ✓ (marcado)
4. Click **"Create repository"**

### Paso 3: Subir archivos
1. En tu nuevo repositorio, click en **"Add file"** → **"Upload files"**
2. Arrastra estos archivos:
   - `index.html`
   - `README.md`
3. En "Commit changes", escribe: `Agregar calculadora de honorarios`
4. Click **"Commit changes"**

### Paso 4: Subir carpeta .github
1. Click en **"Add file"** → **"Create new file"**
2. En el nombre escribe: `.github/workflows/deploy.yml`
3. Copia y pega este contenido:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. Click **"Commit changes"**

### Paso 5: Activar GitHub Pages
1. Ve a **Settings** (⚙️ en tu repositorio)
2. En el menú lateral izquierdo, click en **"Pages"**
3. En **"Source"**, selecciona **"GitHub Actions"**
4. ¡Listo! Espera 2-3 minutos

### Paso 6: Ver tu sitio
1. Ve a la pestaña **"Actions"** en tu repositorio
2. Verás un workflow ejecutándose (punto amarillo)
3. Cuando termine (punto verde ✓), tu sitio estará en:
   
   **`https://TU-USUARIO.github.io/calculadora-abogados`**

---

## 📋 OPCIÓN 2: Subir desde Terminal (Para usuarios avanzados)

### Requisitos
- Git instalado ([descargar](https://git-scm.com/downloads))
- Cuenta de GitHub

### Comandos

```bash
# 1. Crear carpeta y entrar
mkdir calculadora-abogados
cd calculadora-abogados

# 2. Copiar los archivos index.html, README.md aquí
# (También crear la carpeta .github/workflows/ con deploy.yml)

# 3. Inicializar Git
git init

# 4. Agregar archivos
git add .

# 5. Hacer commit
git commit -m "Calculadora de honorarios legales Chile"

# 6. Crear rama main
git branch -M main

# 7. Conectar con GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/calculadora-abogados.git

# 8. Subir
git push -u origin main
```

### Luego activa GitHub Pages:
1. Ve a Settings → Pages
2. Source: GitHub Actions
3. Espera 2-3 minutos

---

## 🔧 ACTUALIZAR LA CALCULADORA

### Actualizar precios desde la web:
1. Abre tu calculadora en el navegador
2. Ve a **⚙️ Admin**
3. Edita los precios que necesites
4. Los cambios se guardan automáticamente en tu navegador

### Actualizar el código en GitHub:
1. Ve a tu repositorio en GitHub
2. Click en el archivo `index.html`
3. Click en el lápiz ✏️ (Edit)
4. Haz los cambios
5. Click **"Commit changes"**
6. El sitio se actualiza automáticamente en 2-3 minutos

---

## 💾 BACKUP DE TUS DATOS

### Exportar configuración:
1. Ve a **⚙️ Admin**
2. Click en **📥 Exportar Config**
3. Se descarga un archivo JSON con todos tus precios

### Importar configuración:
1. Ve a **⚙️ Admin**
2. Click en **📤 Importar Config**
3. Selecciona tu archivo JSON de backup

---

## ❓ SOLUCIÓN DE PROBLEMAS

### "El sitio no carga"
- Espera 5 minutos después de activar Pages
- Verifica que la URL sea correcta
- Revisa la pestaña "Actions" por errores

### "Los cambios no se ven"
- Limpia la caché del navegador (Ctrl+Shift+R)
- Espera 2-3 minutos después de hacer commit

### "Error en GitHub Actions"
- Verifica que el archivo `deploy.yml` esté exactamente como se muestra
- Revisa que esté en la carpeta `.github/workflows/`

### "Se perdieron mis precios"
- Los precios se guardan en localStorage del navegador
- Si cambias de navegador/dispositivo, usa Importar/Exportar
- Haz backups regulares con "Exportar Config"

---

## 📱 USAR EN CELULAR

La calculadora funciona perfectamente en celulares:
1. Abre la URL en el navegador de tu celular
2. Para "instalar" como app:
   - **iPhone:** Compartir → Agregar a inicio
   - **Android:** Menú ⋮ → Agregar a pantalla de inicio

---

## 🎉 ¡LISTO!

Tu calculadora de honorarios está funcionando en:

**`https://TU-USUARIO.github.io/calculadora-abogados`**

Características:
✅ Funciona sin servidor
✅ Gratis para siempre
✅ Se actualiza automáticamente
✅ Datos guardados en el navegador
✅ Exportar/Importar configuración
✅ Genera PDFs profesionales

---

## 📞 Soporte

¿Problemas? Abre un Issue en tu repositorio o contacta al desarrollador.
