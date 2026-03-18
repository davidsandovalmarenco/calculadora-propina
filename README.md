<div align="center">

# Calculadora de Propina

**Aplicación móvil multiplataforma para el cálculo de propinas.**

Built with React Native &middot; Expo &middot; TypeScript

<br/>

[![React Native](https://img.shields.io/badge/React_Native-0.81.5-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo_SDK-54-000020?style=flat-square&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Platform](https://img.shields.io/badge/Platform-Android_·_iOS_·_Web-6366F1?style=flat-square)]()

</div>

---

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Scripts Disponibles](#scripts-disponibles)
- [Roadmap](#roadmap)
- [Contribuciones](#contribuciones)
- [Autor](#autor)

---

## Descripción General

Calculadora de Propina es una aplicación móvil diseñada para resolver de forma rápida y precisa el cálculo de propinas en restaurantes, cafeterías o cualquier establecimiento de servicios.

El usuario ingresa el monto total de su cuenta, selecciona un porcentaje de propina predefinido (10%, 15% o 20%) y obtiene de forma instantánea tanto el valor de la propina como el total final a pagar.

El proyecto está desarrollado siguiendo principios de **arquitectura limpia**, **tipado estricto** y **componentización reutilizable**, demostrando buenas prácticas de ingeniería de software en el ecosistema React Native.

---

## Características

| Característica | Descripción |
|:---|:---|
| **Cálculo en tiempo real** | Los resultados se actualizan instantáneamente al modificar el monto o cambiar el porcentaje de propina. |
| **Validación de entrada** | Sanitización automática de caracteres no numéricos, manejo de decimales duplicados y estados deshabilitados. |
| **Interfaz moderna** | Diseño con tarjetas elevadas, bordes redondeados y paleta de colores profesional (azul/verde). |
| **Arquitectura modular** | Separación estricta entre componentes, pantallas, estilos y funciones de utilidad. |
| **Tipado completo** | TypeScript con interfaces explícitas, genéricos y funciones puras tipadas. |
| **Multiplataforma** | Una única base de código que compila nativamente para Android, iOS y Web. |

---

## Stack Tecnológico

| Tecnología | Versión | Propósito |
|:---|:---:|:---|
| React Native | `0.81.5` | Framework de UI con componentes nativos |
| Expo SDK | `54` | Toolchain de desarrollo, bundling y despliegue |
| TypeScript | `5.9` | Superset tipado de JavaScript |
| React | `19.1` | Librería de renderizado declarativo |
| Expo Status Bar | `3.0` | Control programático de la barra de estado |

---

## Estructura del Proyecto

```
calculadora-propina/
├── App.tsx                             # Componente raíz de la aplicación
├── index.ts                            # Entry point registrado con Expo
├── app.json                            # Manifiesto de configuración de Expo
├── tsconfig.json                       # Configuración del compilador TypeScript
├── package.json                        # Dependencias y scripts npm
│
├── src/
│   ├── screens/
│   │   └── TipCalculatorScreen.tsx     # Pantalla principal (input, botones, resultados)
│   │
│   ├── components/
│   │   └── TipButton.tsx               # Componente de selección de porcentaje
│   │
│   ├── styles/
│   │   └── tipCalculator.styles.ts     # StyleSheet centralizado (cards, shadows, colors)
│   │
│   └── utils/
│       └── tip.utils.ts                # Funciones puras: sanitize, calculate, format
│
└── assets/                             # Recursos estáticos (íconos, splash screen)
```

---

## Requisitos Previos

| Herramienta | Versión Mínima | Referencia |
|:---|:---:|:---|
| Node.js | `18.x LTS` | [nodejs.org](https://nodejs.org/) |
| npm | `9.x` | Incluido con Node.js |
| Git | `2.x` | [git-scm.com](https://git-scm.com/) |
| Expo Go (móvil) | Última | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779) |

> **Nota:** Para emulador Android se requiere [Android Studio](https://developer.android.com/studio). Para simulador iOS se requiere macOS con [Xcode](https://developer.apple.com/xcode/).

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/davidsandovalm/calculadora-propina.git

# Acceder al directorio del proyecto
cd calculadora-propina

# Instalar dependencias
npm install
```

Si hay conflictos de dependencias, utilizar:

```bash
npm install --legacy-peer-deps
```

---

## Ejecución

```bash
# Iniciar el servidor de desarrollo (Metro Bundler)
npx expo start
```

Una vez iniciado, utilizar las siguientes opciones desde la terminal:

| Tecla | Acción | Requisito |
|:---:|:---|:---|
| `a` | Abrir en emulador Android | Android Studio con emulador activo |
| `i` | Abrir en simulador iOS | macOS con Xcode instalado |
| `w` | Abrir en navegador web | Navegador moderno |
| QR | Escanear con Expo Go | Dispositivo en la misma red Wi-Fi |

---

## Scripts Disponibles

| Comando | Descripción |
|:---|:---|
| `npm start` | Inicia Expo en modo desarrollo |
| `npm run android` | Compila y ejecuta en Android |
| `npm run ios` | Compila y ejecuta en iOS |
| `npm run web` | Ejecuta la versión web |

---

## Roadmap

- [x] Cálculo de propina con porcentajes predefinidos (10%, 15%, 20%)
- [x] Validación y sanitización de entrada numérica
- [x] Diseño responsivo con sistema de tarjetas
- [ ] Modo oscuro (Dark Mode)
- [ ] División de cuenta entre múltiples personas
- [ ] Animaciones con React Native Reanimated
- [ ] Historial de cálculos recientes
- [ ] Porcentaje de propina personalizado (slider)

---

## Contribuciones

```bash
# 1. Fork del repositorio
# 2. Crear rama de feature
git checkout -b feature/nueva-caracteristica

# 3. Commit de cambios
git commit -m "feat: agregar nueva característica"

# 4. Push a la rama
git push origin feature/nueva-caracteristica

# 5. Abrir Pull Request en GitHub
```

Para reportar errores: [abrir un Issue](https://github.com/davidsandovalm/calculadora-propina/issues).

---

## Autor

**David Sandoval M** · [github.com/davidsandovalm](https://github.com/davidsandovalm)

Proyecto desarrollado para el curso **Desarrollo de Aplicaciones Multidispositivo II**.

---

<div align="center">
  <sub>Si este proyecto te resultó útil, considera darle una estrella en GitHub.</sub>
</div>
