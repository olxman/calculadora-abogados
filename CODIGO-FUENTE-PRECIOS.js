/*
================================================================================
⚖️ CALCULADORA DE HONORARIOS LEGALES - CHILE
================================================================================
Versión: 1.0.0
Fecha: Diciembre 2025

INSTRUCCIONES:
1. Este archivo contiene toda la configuración de precios
2. Para actualizar: modifica minCLP y maxCLP de cada servicio
3. Guarda este archivo como respaldo de tu configuración
================================================================================
*/

// ============================================
// 🔧 DATOS DEL ESTUDIO
// ============================================

const DATOS_ESTUDIO_DEFAULT = {
  nombre: "Estudio Jurídico",
  rut: "XX.XXX.XXX-X",
  direccion: "Dirección del Estudio",
  telefono: "+56 9 XXXX XXXX",
  email: "contacto@estudio.cl",
  web: "www.estudio.cl"
};

// ============================================
// 💵 VALOR UF
// ============================================

const UF_DEFAULT = {
  valor: 39700,
  fecha: "2025-12-16"
};

// ============================================
// 💰 BASE DE DATOS DE PRECIOS COMPLETA
// ============================================

const DEFAULT_PRECIOS = {

  // ========== DERECHO DE FAMILIA ==========
  familia: {
    nombre: "Derecho de Familia",
    icono: "👨‍👩‍👧‍👦",
    servicios: [
      { id: "divorcio_mutuo", nombre: "Divorcio de Mutuo Acuerdo", minCLP: 500000, maxCLP: 1000000, actualizado: "2025-12" },
      { id: "divorcio_unilateral", nombre: "Divorcio Unilateral", minCLP: 800000, maxCLP: 2000000, actualizado: "2025-12" },
      { id: "divorcio_culposo", nombre: "Divorcio Contencioso", minCLP: 2000000, maxCLP: 5000000, actualizado: "2025-12" },
      { id: "pension_alimentos", nombre: "Pensión de Alimentos", minCLP: 280000, maxCLP: 800000, actualizado: "2025-12" },
      { id: "aumento_pension", nombre: "Aumento/Rebaja Pensión", minCLP: 250000, maxCLP: 600000, actualizado: "2025-12" },
      { id: "cuidado_personal", nombre: "Cuidado Personal (Tuición)", minCLP: 450000, maxCLP: 2000000, actualizado: "2025-12" },
      { id: "custodia_disputada", nombre: "Custodia Disputada", minCLP: 1400000, maxCLP: 3200000, actualizado: "2025-12" },
      { id: "regimen_visitas", nombre: "Régimen de Visitas", minCLP: 250000, maxCLP: 700000, actualizado: "2025-12" },
      { id: "violencia_intrafamiliar", nombre: "Violencia Intrafamiliar", minCLP: 200000, maxCLP: 600000, actualizado: "2025-12" },
      { id: "compensacion_economica", nombre: "Compensación Económica", minCLP: 400000, maxCLP: 4000000, porcentaje: "10-30%", actualizado: "2025-12" },
      { id: "adopcion", nombre: "Adopción", minCLP: 450000, maxCLP: 1200000, actualizado: "2025-12" },
      { id: "filiacion", nombre: "Juicio Paternidad/Filiación", minCLP: 250000, maxCLP: 800000, actualizado: "2025-12" },
    ]
  },

  // ========== DERECHO PENAL ==========
  penal: {
    nombre: "Derecho Penal",
    icono: "⚖️",
    servicios: [
      { id: "control_detencion", nombre: "Control de Detención", minCLP: 200000, maxCLP: 600000, actualizado: "2025-12" },
      { id: "formalizacion", nombre: "Audiencia Formalización", minCLP: 400000, maxCLP: 1000000, actualizado: "2025-12" },
      { id: "procedimiento_simplificado", nombre: "Procedimiento Simplificado", minCLP: 600000, maxCLP: 1600000, actualizado: "2025-12" },
      { id: "juicio_abreviado", nombre: "Juicio Abreviado", minCLP: 1000000, maxCLP: 4000000, actualizado: "2025-12" },
      { id: "juicio_oral_simple", nombre: "Juicio Oral (Baja Complejidad)", minCLP: 1000000, maxCLP: 2000000, actualizado: "2025-12" },
      { id: "juicio_oral_medio", nombre: "Juicio Oral (Media Complejidad)", minCLP: 1500000, maxCLP: 5000000, actualizado: "2025-12" },
      { id: "juicio_oral_alto", nombre: "Juicio Oral (Alta Complejidad)", minCLP: 5000000, maxCLP: 30000000, actualizado: "2025-12" },
      { id: "recurso_nulidad", nombre: "Recurso de Nulidad", minCLP: 400000, maxCLP: 20000000, actualizado: "2025-12" },
    ]
  },

  // ========== DERECHO CIVIL ==========
  civil: {
    nombre: "Derecho Civil",
    icono: "📜",
    servicios: [
      { id: "juicio_ordinario_mayor", nombre: "Juicio Ordinario Mayor Cuantía", minCLP: 1200000, maxCLP: 3200000, porcentaje: "+10%", actualizado: "2025-12" },
      { id: "juicio_ordinario_menor", nombre: "Juicio Ordinario Menor Cuantía", minCLP: 800000, maxCLP: 2000000, actualizado: "2025-12" },
      { id: "juicio_sumario", nombre: "Juicio Sumario", minCLP: 800000, maxCLP: 1600000, actualizado: "2025-12" },
      { id: "juicio_ejecutivo", nombre: "Juicio Ejecutivo", minCLP: 400000, maxCLP: 1200000, actualizado: "2025-12" },
      { id: "cobranza_judicial", nombre: "Cobranza Judicial", minCLP: 300000, maxCLP: 1000000, porcentaje: "10-20%", actualizado: "2025-12" },
      { id: "indemnizacion", nombre: "Indemnización Perjuicios", minCLP: 1000000, maxCLP: 10000000, porcentaje: "20-30%", actualizado: "2025-12" },
      { id: "arrendamiento", nombre: "Juicios Arrendamiento", minCLP: 400000, maxCLP: 1200000, actualizado: "2025-12" },
      { id: "nulidad_contrato", nombre: "Nulidad de Contrato", minCLP: 1000000, maxCLP: 4000000, actualizado: "2025-12" },
      { id: "redaccion_contrato", nombre: "Redacción Contratos", minCLP: 200000, maxCLP: 800000, actualizado: "2025-12" },
    ]
  },

  // ========== DERECHO LABORAL ==========
  laboral: {
    nombre: "Derecho Laboral",
    icono: "👷",
    servicios: [
      { id: "despido_injustificado", nombre: "Despido Injustificado", minCLP: 400000, maxCLP: 1600000, porcentaje: "+10%", actualizado: "2025-12" },
      { id: "juicio_ordinario_laboral", nombre: "Juicio Ordinario Laboral", minCLP: 400000, maxCLP: 2000000, porcentaje: "+10-20%", actualizado: "2025-12" },
      { id: "juicio_monitorio", nombre: "Juicio Monitorio", minCLP: 600000, maxCLP: 1000000, actualizado: "2025-12" },
      { id: "tutela_laboral", nombre: "Tutela Derechos Fundamentales", minCLP: 800000, maxCLP: 2400000, actualizado: "2025-12" },
      { id: "finiquito", nombre: "Revisión Finiquito", minCLP: 120000, maxCLP: 400000, actualizado: "2025-12" },
      { id: "asesoria_hora", nombre: "Asesoría por Hora", minCLP: 50000, maxCLP: 200000, actualizado: "2025-12" },
      { id: "accidente_trabajo", nombre: "Accidente del Trabajo", minCLP: 1000000, maxCLP: 4000000, porcentaje: "15-25%", actualizado: "2025-12" },
    ]
  },

  // ========== DERECHO EMPRESARIAL ==========
  empresarial: {
    nombre: "Derecho Empresarial",
    icono: "🏢",
    servicios: [
      { id: "constitucion_spa", nombre: "Constitución SpA", minCLP: 300000, maxCLP: 1000000, actualizado: "2025-12" },
      { id: "constitucion_ltda", nombre: "Constitución Ltda.", minCLP: 400000, maxCLP: 1200000, actualizado: "2025-12" },
      { id: "constitucion_sa", nombre: "Constitución S.A.", minCLP: 1000000, maxCLP: 3000000, actualizado: "2025-12" },
      { id: "constitucion_eirl", nombre: "Constitución EIRL", minCLP: 300000, maxCLP: 800000, actualizado: "2025-12" },
      { id: "modificacion_sociedad", nombre: "Modificación Sociedad", minCLP: 200000, maxCLP: 600000, actualizado: "2025-12" },
      { id: "disolucion", nombre: "Disolución Sociedad", minCLP: 400000, maxCLP: 1200000, actualizado: "2025-12" },
      { id: "fusion_division", nombre: "Fusión/División", minCLP: 2000000, maxCLP: 10000000, actualizado: "2025-12" },
      { id: "due_diligence", nombre: "Due Diligence", minCLP: 1200000, maxCLP: 6000000, actualizado: "2025-12" },
    ]
  },

  // ========== DERECHO INMOBILIARIO ==========
  inmobiliario: {
    nombre: "Derecho Inmobiliario",
    icono: "🏠",
    servicios: [
      { id: "estudio_titulos", nombre: "Estudio de Títulos", minCLP: 200000, maxCLP: 600000, actualizado: "2025-12" },
      { id: "compraventa", nombre: "Escritura Compraventa", minCLP: 125000, maxCLP: 400000, actualizado: "2025-12" },
      { id: "promesa", nombre: "Promesa Compraventa", minCLP: 115000, maxCLP: 320000, actualizado: "2025-12" },
      { id: "hipoteca", nombre: "Constitución Hipoteca", minCLP: 200000, maxCLP: 600000, actualizado: "2025-12" },
      { id: "regularizacion", nombre: "Regularización Propiedad", minCLP: 600000, maxCLP: 2000000, actualizado: "2025-12" },
      { id: "posesion_efectiva", nombre: "Posesión Efectiva", minCLP: 200000, maxCLP: 1000000, actualizado: "2025-12" },
      { id: "particion_herencia", nombre: "Partición Herencia", minCLP: 1200000, maxCLP: 8000000, porcentaje: "3-10%", actualizado: "2025-12" },
    ]
  },

  // ========== CONSULTAS ==========
  consultas: {
    nombre: "Consultas",
    icono: "💬",
    servicios: [
      { id: "consulta_presencial", nombre: "Consulta Presencial", minCLP: 35000, maxCLP: 100000, actualizado: "2025-12" },
      { id: "consulta_hora", nombre: "Asesoría por Hora", minCLP: 50000, maxCLP: 200000, actualizado: "2025-12" },
      { id: "carta_documento", nombre: "Redacción Carta/Documento", minCLP: 40000, maxCLP: 120000, actualizado: "2025-12" },
    ]
  }
};

// ============================================
// 📊 FACTORES DE AJUSTE
// ============================================

const FACTORES = {
  complejidad: {
    baja: { nombre: "Baja", mult: 0.8 },
    media: { nombre: "Media", mult: 1.0 },
    alta: { nombre: "Alta", mult: 1.5 },
    muy_alta: { nombre: "Muy Alta", mult: 2.0 }
  },
  ubicacion: {
    santiago: { nombre: "Santiago/RM", mult: 1.0 },
    regiones_grandes: { nombre: "Valparaíso/Concepción", mult: 0.9 },
    regiones_medianas: { nombre: "Regiones Medianas", mult: 0.85 },
    regiones_pequenas: { nombre: "Regiones Pequeñas", mult: 0.75 }
  },
  experiencia: {
    junior: { nombre: "Junior (0-3 años)", mult: 0.7 },
    medio: { nombre: "Medio (4-10 años)", mult: 1.0 },
    senior: { nombre: "Senior (10+ años)", mult: 1.4 },
    especialista: { nombre: "Especialista", mult: 1.8 }
  }
};

// ============================================
// 📋 RESUMEN DE PRECIOS
// ============================================
/*
FAMILIA:
- Divorcio Mutuo: $500.000 - $1.000.000
- Divorcio Unilateral: $800.000 - $2.000.000
- Divorcio Contencioso: $2.000.000 - $5.000.000
- Pensión Alimentos: $280.000 - $800.000
- Tuición: $450.000 - $2.000.000
- Custodia Disputada: $1.400.000 - $3.200.000

PENAL:
- Control Detención: $200.000 - $600.000
- Formalización: $400.000 - $1.000.000
- Juicio Oral Baja: $1.000.000 - $2.000.000
- Juicio Oral Media: $1.500.000 - $5.000.000
- Juicio Oral Alta: $5.000.000 - $30.000.000

CIVIL:
- Juicio Ordinario: $800.000 - $3.200.000
- Juicio Ejecutivo: $400.000 - $1.200.000
- Indemnización: $1.000.000 - $10.000.000

LABORAL:
- Despido Injustificado: $400.000 - $1.600.000
- Juicio Laboral: $400.000 - $2.000.000
- Accidente Trabajo: $1.000.000 - $4.000.000

EMPRESARIAL:
- SpA: $300.000 - $1.000.000
- Ltda: $400.000 - $1.200.000
- S.A.: $1.000.000 - $3.000.000

INMOBILIARIO:
- Estudio Títulos: $200.000 - $600.000
- Compraventa: $125.000 - $400.000
- Posesión Efectiva: $200.000 - $1.000.000

CONSULTAS:
- Presencial: $35.000 - $100.000
- Por Hora: $50.000 - $200.000
*/

// ============================================
// 🔢 FÓRMULA DE CÁLCULO
// ============================================
/*
PRECIO = BASE × COMPLEJIDAD × UBICACIÓN × EXPERIENCIA

Ejemplo:
Divorcio Mutuo + Alta Complejidad + Santiago + Senior
= $500.000 × 1.5 × 1.0 × 1.4 = $1.050.000 mínimo
= $1.000.000 × 1.5 × 1.0 × 1.4 = $2.100.000 máximo
*/

// ============================================
// 🌐 API UF: https://mindicador.cl/api/uf
// ============================================

console.log("✅ Configuración cargada");
console.log("📊 Total servicios:", Object.values(DEFAULT_PRECIOS).reduce((a, b) => a + b.servicios.length, 0));
