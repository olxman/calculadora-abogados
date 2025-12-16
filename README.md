# ⚖️ Calculadora de Honorarios Legales - Chile

Una aplicación web completa para calcular y cotizar honorarios de servicios legales en Chile, con precios actualizados al mercado 2025.

![React](https://img.shields.io/badge/React-18+-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Características

- ✅ **Calculadora de honorarios** por área del derecho
- ✅ **Factores de ajuste**: complejidad, ubicación, experiencia
- ✅ **Valor UF automático** desde API mindicador.cl
- ✅ **Generación de cotizaciones PDF** profesionales
- ✅ **Panel de administración** para actualizar precios
- ✅ **Persistencia de datos** en localStorage
- ✅ **Exportar/Importar** configuración en JSON
- ✅ **100% responsive** - funciona en móvil y desktop

## 🚀 Demo en Vivo

👉 **[Ver Demo](https://TU-USUARIO.github.io/calculadora-abogados)**

## 📋 Áreas del Derecho Incluidas

| Área | Servicios |
|------|-----------|
| 👨‍👩‍👧‍👦 Familia | Divorcios, pensiones, tuición, visitas |
| ⚖️ Penal | Defensa, juicios orales, recursos |
| 📜 Civil | Juicios, cobranzas, contratos |
| 👷 Laboral | Despidos, demandas, finiquitos |
| 🏢 Empresarial | Constitución sociedades, fusiones |
| 🏠 Inmobiliario | Títulos, compraventas, herencias |
| 💬 Consultas | Asesorías, documentos |

## 🛠️ Instalación Local

### Opción 1: Con Node.js (Recomendado para desarrollo)

```bash
# Clonar repositorio
git clone https://github.com/TU-USUARIO/calculadora-abogados.git
cd calculadora-abogados

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en navegador: http://localhost:5173
```

### Opción 2: Archivo HTML único (Sin instalación)

Simplemente abre el archivo `index.html` en tu navegador.

## 📦 Despliegue en GitHub Pages

### Paso 1: Crear repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre: `calculadora-abogados`
3. Marcar como **Public**
4. Click en **Create repository**

### Paso 2: Subir archivos

```bash
# En tu terminal, dentro de la carpeta del proyecto:

git init
git add .
git commit -m "Initial commit - Calculadora Honorarios Legales"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/calculadora-abogados.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (⚙️)
3. En el menú lateral, click en **Pages**
4. En "Source", selecciona **GitHub Actions**
5. Espera 2-3 minutos
6. Tu sitio estará en: `https://TU-USUARIO.github.io/calculadora-abogados`

## 📁 Estructura del Proyecto

```
calculadora-abogados/
├── index.html          # Archivo principal (versión standalone)
├── README.md           # Este archivo
├── package.json        # Dependencias (versión Node.js)
├── vite.config.js      # Configuración Vite
├── src/
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos Tailwind
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions para deploy
```

## ⚙️ Configuración

### Actualizar Valor UF

La UF se obtiene automáticamente de [mindicador.cl](https://mindicador.cl). También puedes:

1. Click en 🔄 **Actualizar UF** en la interfaz
2. O ir a **Admin** → Ingresar valor manualmente

### Actualizar Precios de Servicios

1. Click en **⚙️ Admin**
2. Selecciona el área y servicio
3. Modifica los precios mínimo/máximo
4. Los cambios se guardan automáticamente

### Personalizar Datos del Estudio

1. Click en **⚙️ Admin**
2. Completa los campos de "Datos del Estudio"
3. Estos datos aparecerán en las cotizaciones PDF

## 💾 Backup de Configuración

### Exportar

1. Ve a **Admin**
2. Click en **📥 Exportar Configuración**
3. Se descarga un archivo JSON con todos tus precios

### Importar

1. Ve a **Admin**
2. Click en **📤 Importar Configuración**
3. Selecciona tu archivo JSON de backup

## 🔧 Personalización Avanzada

### Agregar Nuevos Servicios

Edita el objeto `DEFAULT_PRECIOS` en el código:

```javascript
servicios: [
  { 
    id: "nuevo_servicio", 
    nombre: "Mi Nuevo Servicio", 
    minCLP: 500000, 
    maxCLP: 1000000, 
    porcentaje: "10%", // opcional
    actualizado: "2025-12" 
  },
  // ... más servicios
]
```

### Modificar Factores de Ajuste

Edita el objeto `FACTORES`:

```javascript
complejidad: {
  baja: { nombre: "Baja", mult: 0.8 },
  media: { nombre: "Media", mult: 1.0 },
  alta: { nombre: "Alta", mult: 1.5 },
  muy_alta: { nombre: "Muy Alta", mult: 2.0 }
}
```

## 📱 Capturas de Pantalla

### Calculadora
![Calculadora](screenshots/calculadora.png)

### Cotización PDF
![PDF](screenshots/pdf.png)

### Panel Admin
![Admin](screenshots/admin.png)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

MIT License - Libre para uso personal y comercial.

## 👨‍💻 Autor

Desarrollado para abogados en Chile 🇨🇱

## 📞 Soporte

¿Problemas o sugerencias? Abre un [Issue](https://github.com/TU-USUARIO/calculadora-abogados/issues)

---

⭐ **Si te fue útil, dale una estrella al repositorio!**
