<div align="center">

<!-- ═══════════════════════════════════════════════════════ -->
<!--                     HERO SECTION                       -->
<!-- ═══════════════════════════════════════════════════════ -->

<h1>
  💰 Calculadora de Propina
</h1>

<p>
  <strong>Aplicación móvil multiplataforma para calcular propinas de forma rápida, precisa y elegante.</strong><br/>
  <em>Construida con React Native · Expo · TypeScript</em>
</p>

<br/>

<!-- ─── Badges ────────────────────────────────────────── -->

<p>
  <a href="https://reactnative.dev/">
    <img src="https://img.shields.io/badge/React_Native-0.81.5-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Native" />
  </a>&nbsp;
  <a href="https://expo.dev/">
    <img src="https://img.shields.io/badge/Expo_SDK-54-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  </a>&nbsp;
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>&nbsp;
  <a href="#">
    <img src="https://img.shields.io/badge/Plataformas-Android_·_iOS_·_Web-7C3AED?style=for-the-badge" alt="Platforms" />
  </a>&nbsp;
  <a href="#">
    <img src="https://img.shields.io/badge/Versión-1.0.0-10B981?style=for-the-badge" alt="Version" />
  </a>
</p>

<br/>

<!-- ─── Separator ─────────────────────────────────────── -->

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" />

</div>

<br/>

## 📋 Tabla de Contenidos

<details open>
<summary><strong>Haz clic para navegar</strong></summary>

&nbsp;

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características Principales](#-características-principales)
- [Stack Tecnológico](#-stack-tecnológico)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Ejecución](#-ejecución)
- [Scripts Disponibles](#-scripts-disponibles)
- [Roadmap](#-roadmap)
- [Contribuciones](#-contribuciones)
- [Autor](#-autor)

</details>

<br/>

## 🧠 Acerca del Proyecto

> **Calculadora de Propina** nace como una solución elegante y funcional al cálculo de propinas en restaurantes, cafeterías y servicios. Desarrollada bajo estándares profesionales de ingeniería de software, la aplicación demuestra buenas prácticas de componentización, tipado estricto y separación de responsabilidades.

### ¿Qué problema resuelve?

Calcular mentalmente una propina justa puede ser confuso, especialmente con montos irregulares. Esta aplicación permite al usuario:

1. **Ingresar** el monto total de su cuenta.
2. **Seleccionar** un porcentaje de propina (10%, 15% o 20%).
3. **Visualizar** instantáneamente la propina calculada y el total final a pagar.

<br/>

## ✨ Características Principales

<table>
  <tr>
    <td width="80" align="center">⚡</td>
    <td><strong>Cálculo en Tiempo Real</strong><br/>Los resultados se actualizan instantáneamente al escribir el monto o cambiar el porcentaje.</td>
  </tr>
  <tr>
    <td align="center">🎨</td>
    <td><strong>Diseño UI Moderno</strong><br/>Interfaz con tarjetas elevadas, esquinas redondeadas, degradados suaves y paleta de colores azul/verde profesional.</td>
  </tr>
  <tr>
    <td align="center">🛡️</td>
    <td><strong>Validación Inteligente</strong><br/>Sanitización de entrada numérica, prevención de caracteres inválidos y manejo de estados deshabilitados.</td>
  </tr>
  <tr>
    <td align="center">📐</td>
    <td><strong>Arquitectura Limpia</strong><br/>Separación estricta de componentes, pantallas, estilos y utilidades en módulos independientes.</td>
  </tr>
  <tr>
    <td align="center">🔒</td>
    <td><strong>TypeScript Estricto</strong><br/>Tipado completo con interfaces Props, genéricos y funciones puras tipadas para máxima seguridad.</td>
  </tr>
  <tr>
    <td align="center">📱</td>
    <td><strong>Multiplataforma</strong><br/>Una sola base de código que compila nativamente para Android, iOS y Web.</td>
  </tr>
</table>

<br/>

## 🛠 Stack Tecnológico

<div align="center">

| Capa | Tecnología | Versión | Propósito |
|:---:|:---|:---:|:---|
| 🏗️ | **React Native** | `0.81.5` | Framework de UI con componentes nativos |
| 📦 | **Expo SDK** | `54` | Toolchain de desarrollo, bundling y despliegue |
| 🔷 | **TypeScript** | `5.9` | Superset tipado para JavaScript |
| ⚛️ | **React** | `19.1` | Librería de renderizado declarativo |
| 📊 | **Expo Status Bar** | `3.0` | Control de la barra de estado nativa |

</div>

<br/>

## 🏗 Arquitectura del Proyecto

```
📦 calculadora-propina
│
├── 📄 App.tsx                          # Componente raíz → renderiza TipCalculatorScreen
├── 📄 index.ts                         # Entry point registrado con Expo
├── 📄 app.json                         # Manifiesto de configuración de Expo
├── 📄 tsconfig.json                    # Configuración del compilador TypeScript
├── 📄 package.json                     # Dependencias y scripts de npm
│
├── 📂 src/                             # ─── Código fuente principal ───
│   │
│   ├── 📂 screens/                     # Pantallas completas de la app
│   │   └── 📄 TipCalculatorScreen.tsx  # Vista principal: input + botones + resultados
│   │
│   ├── 📂 components/                  # Componentes reutilizables de UI
│   │   └── 📄 TipButton.tsx            # Botón de selección de porcentaje de propina
│   │
│   ├── 📂 styles/                      # Hojas de estilo centralizadas
│   │   └── 📄 tipCalculator.styles.ts  # StyleSheet con diseño moderno (cards, shadows, colors)
│   │
│   └── 📂 utils/                       # Funciones puras de utilidad
│       └── 📄 tip.utils.ts             # sanitizeAmountInput, calculateTip, formatCurrency...
│
└── 📂 assets/                          # Recursos estáticos
    ├── 📄 icon.png                     # Ícono principal de la app
    ├── 📄 splash-icon.png              # Imagen del splash screen
    ├── 📄 favicon.png                  # Favicon para versión web
    └── 📄 android-icon-*.png           # Íconos adaptativos de Android
```

<br/>

## 📌 Requisitos Previos

Antes de iniciar, asegúrate de contar con las siguientes herramientas instaladas:

| Herramienta | Versión Mínima | Enlace |
|:---|:---:|:---|
| **Node.js** | `18.x LTS` | [nodejs.org](https://nodejs.org/) |
| **npm** | `9.x` | Incluido con Node.js |
| **Git** | `2.x` | [git-scm.com](https://git-scm.com/) |
| **Expo Go** *(móvil)* | Última | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) · [iOS](https://apps.apple.com/app/expo-go/id982107779) |

> [!NOTE]
> Para ejecutar en emulador Android necesitas [Android Studio](https://developer.android.com/studio) configurado.
> Para simulador iOS necesitas macOS con [Xcode](https://developer.apple.com/xcode/).

<br/>

## 📥 Instalación

```bash
# 1️⃣  Clona el repositorio
git clone https://github.com/davidsandovalm/calculadora-propina.git

# 2️⃣  Accede al directorio del proyecto
cd calculadora-propina

# 3️⃣  Instala todas las dependencias
npm install
```

> [!TIP]
> Si experimentas problemas con las dependencias, ejecuta `npm install --legacy-peer-deps` como alternativa.

<br/>

## ▶️ Ejecución

```bash
# Inicia el servidor de desarrollo (Metro Bundler)
npx expo start
```

Una vez iniciado el servidor, verás un código QR y un menú interactivo en tu terminal:

<div align="center">

| Tecla | Acción | Requisito |
|:---:|:---|:---|
| `a` | Abrir en emulador **Android** | Android Studio con emulador activo |
| `i` | Abrir en simulador **iOS** | macOS con Xcode instalado |
| `w` | Abrir en **navegador web** | Navegador moderno |
| 📷 | Escanear **QR** con Expo Go | Dispositivo físico con Expo Go |

</div>

> [!IMPORTANT]
> Para usar tu teléfono físico, asegúrate de que esté conectado a la **misma red Wi-Fi** que tu computadora.

<br/>

## 📜 Scripts Disponibles

| Comando | Descripción |
|:---|:---|
| `npm start` | Inicia Expo en modo desarrollo |
| `npm run android` | Compila y ejecuta en Android |
| `npm run ios` | Compila y ejecuta en iOS |
| `npm run web` | Ejecuta la versión web |

<br/>

## 🗺 Roadmap

Funcionalidades planeadas para futuras versiones:

- [x] Cálculo de propina con porcentajes predefinidos (10%, 15%, 20%)
- [x] Validación y sanitización de entrada numérica
- [x] Diseño responsivo con tarjetas y sombras
- [ ] 🌙 Modo Oscuro (Dark Mode)
- [ ] 👥 División de cuenta entre varias personas
- [ ] 💫 Animaciones con React Native Reanimated
- [ ] 📊 Historial de cálculos recientes
- [ ] 🎚️ Porcentaje de propina personalizado con slider

<br/>

## 🤝 Contribuciones

Las contribuciones son lo que hacen a la comunidad open source un lugar increíble. ¡Cualquier contribución es **enormemente apreciada**!

```bash
# 1. Fork del proyecto
# 2. Crea tu rama de feature
git checkout -b feature/MiNuevaCaracteristica

# 3. Commit de tus cambios
git commit -m "feat: agregar nueva característica"

# 4. Push a la rama
git push origin feature/MiNuevaCaracteristica

# 5. Abre un Pull Request
```

¿Encontraste un bug? → [Abre un Issue](https://github.com/davidsandovalm/calculadora-propina/issues)

<br/>

## 👤 Autor

<div align="center">

| | |
|:---:|:---|
| 👨‍💻 | **David Sandoval M** |
| 🔗 | [github.com/davidsandovalm](https://github.com/davidsandovalm) |
| 📚 | Desarrollo de Aplicaciones Multidispositivo II |

</div>

<br/>

---

<div align="center">
  <sub>⭐ Si este proyecto te resultó útil, considera darle una estrella en GitHub.</sub>
  <br/><br/>
  <img src="https://img.shields.io/badge/Hecho_con-❤️_y_TypeScript-3178C6?style=for-the-badge" alt="Made with love" />
</div>
