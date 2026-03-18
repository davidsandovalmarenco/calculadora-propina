<div align="center">
  <img src="https://raw.githubusercontent.com/expo/expo/main/docs/public/static/images/expo-go-logo.png" alt="Expo Logo" width="100" />
  <h1>💰 Calculadora de Propina Pro</h1>
  <p><strong>Calcula propinas de manera rápida, precisa y con una experiencia móvil de primer nivel.</strong></p>
  
  <p>
    <img alt="React Native" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img alt="Expo" src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img alt="Version" src="https://img.shields.io/badge/Versión-1.0.0-success?style=for-the-badge" />
    <img alt="License" src="https://img.shields.io/badge/Licencia-MIT-blue?style=for-the-badge" />
  </p>
</div>

---

## 📖 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características Principales](#-características-principales)
- [Arquitectura de UI/UX](#-arquitectura-de-uiux)
- [Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [Guía de Instalación y Ejecución](#-guía-de-instalación-y-ejecución)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Próximos Pasos (Roadmap)](#-próximos-pasos-roadmap)
- [Contribuciones](#-contribuciones)

---

## 🚀 Acerca del Proyecto

La **Calculadora de Propina** es una aplicación multiplataforma construida para facilitar el cálculo rápido de propinas en restaurantes, bares o cualquier servicio. Diseñada con un enfoque centrado en el usuario, ofrece una experiencia fluida, reactiva y visualmente atractiva utilizando los más altos estándares de desarrollo móvil en el ecosistema de React y Expo.

## ✨ Características Principales

*   **Cálculo Instantáneo:** Resultados en tiempo real con precisión decimal a medida que se ingresan los valores.
*   **Gestión de Porcentajes:** Interfaz de un solo toque para seleccionar propinas recomendadas (10%, 15%, 20%) de forma dinámica.
*   **Arquitectura Escalable:** Componentes desacoplados (como `TipButton`) y altamente reutilizables.
*   **Tipado Estricto:** Código completamente robusto desarrollado en **TypeScript** para evitar errores en tiempo de ejecución.
*   **Multiplataforma:** Soporte nativo y simultáneo para iOS, Android y compatibilidad con web desde una única base de código.

## 📱 Arquitectura de UI/UX

*(Añade capturas de pantalla de la interfaz de tu aplicación debajo de esta sección reemplazando los enlaces de las imágenes de ejemplo)*

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>Vista Principal (Simulador)</strong></td>
      <td align="center"><strong>Cálculo Realizado</strong></td>
    </tr>
    <tr>
      <td><img src="https://via.placeholder.com/250x500.png?text=Main+Screen" alt="Principal" width="250"/></td>
      <td><img src="https://via.placeholder.com/250x500.png?text=Results+Screen" alt="Resultados" width="250"/></td>
    </tr>
  </table>
</div>

## 🛠️ Tecnologías Utilizadas

| Tecnología | Rol en el Proyecto | Justificación Arquitectónica |
| :--- | :--- | :--- |
| **React Native** | Framework Base | Permite compilar componentes nativos reales (View, Text) con sintaxis declarativa. |
| **Expo SDK** | Plataforma In-App | Acelera enormemente el desarrollo, configuración de compilación nativa y *Hot Reloading*. |
| **TypeScript** | Lenguaje | Asegura contratos e interfaces de datos fuertes y escalabilidad de los componentes. |
| **Node.js & npm** | Entorno de Server | Permite ejecutar el *Metro Bundler* y realizar la gestión de todas las dependencias locales. |

---

## ⚙️ Guía de Instalación y Ejecución

Sigue estos pasos precisos para configurar tu entorno de desarrollo y levantar los servicios en tu máquina local.

### 1. Prerrequisitos del Entorno Local

Antes de clonar, asegúrate de tener instalados los siguientes componentes:
*   [Node.js](https://nodejs.org/es) (Se requiere versión LTS v18.x en adelante).
*   [Git](https://git-scm.com/) (Para control de versiones).
*   Un dispositivo físico con [Expo Go](https://expo.dev/client) instalado o un emulador configurado en tu PC (Android Studio o Xcode).

### 2. Clonación e Instalación de Paquetes

Clona este repositorio utilizando tu terminal e instala de forma limpia las dependencias de la aplicación:

```bash
# 1. Clonar el repositorio desde GitHub
git clone https://github.com/davidsandovalm/calculadora-propina.git

# 2. Navegar al directorio raíz del proyecto
cd calculadora-propina

# 3. Instalar las dependencias del proyecto de Expo
npm install
```

### 3. Ejecución del Servidor de Desarrollo (Metro Bundler)

Inicia el entorno de desarrollo y el empacatador ejecutando:

```bash
npx expo start
```

En la terminal aparecerán varias opciones. Puedes interactuar directamente con tu teclado en la terminal del Metro Bundler:
*   🔑 Presiona `A` - Para instalar e iniciar en el emulador de **Android** abierto en tu PC.
*   🔑 Presiona `I` - Para instalar e iniciar en el simulador de **iOS** (Solo disponible en macOS).
*   🔑 Presiona `W` - Para desplegar la versión de **Web** en tu navegador.
*   📱 **Dispositivo Físico:** Escanea el código QR mostrado en la terminal utilizando la cámara de tu iPhone (app Expo GO) o desde la app Expo GO en tu Android.

---

## 📁 Estructura del Código

Para mantener un proyecto escalable, la arquitectura se divide separando la lógica y UI en la carpeta `src/`.

```text
📦 calculadora-propina
 ┣ 📂 assets/              # Recursos multimedia de Expo (splash screen, adaptive icons, favicon)
 ┣ 📂 src/                 # 🧠 Core lógico y vistas personalizadas
 ┃ ┣ 📂 components/        # Componentes UI encapsulados de presentación (ej. TipButton.tsx)
 ┃ ┣ 📂 screens/           # Pantallas principales y orquestadoras (ej. TipCalculatorScreen.tsx)
 ┃ ┗ 📂 styles/            # Sistema centralizado con StyleSheet para mantener DRY en hojas de estilo
 ┣ 📜 App.tsx              # Componente raíz de la app e importación inicial
 ┣ 📜 app.json             # Manifiesto de metadatos de Expo (App name, version, identifiers)
 ┣ 📜 package.json         # Registro estricto de librerías de terceros y comandos npm
 ┗ 📜 tsconfig.json        # Directivas de configuración del transpilador oficial de TypeScript
```

---

## 📈 Próximos Pasos (Roadmap)

Lista de futuras actualizaciones planificadas:
- [ ] Integrar soporte de "Dark Mode" para ajustarse al sistema nativo.
- [ ] Añadir campo para la cantidad de personas (Split bill by person).
- [ ] Aplicar animaciones utilizando React Native Reanimated.

---

## 🤝 Contribuciones

Si en el futuro deseas colaborar, las propuestas y Pull Requests son totalmente bienvenidos:

1. Haz un **Fork** de este proyecto.
2. Crea tu rama descriptiva de características: `git checkout -b feature/NuevaCaracteristica`
3. Almacena tus cambios en un commit: `git commit -m 'feat: Añadir nueva característica al botón propina'`
4. Envía la rama al repositorio: `git push origin feature/NuevaCaracteristica`
5. Abre un **Pull Request**.

Si encuentras algún error o tienes retroalimentación de código, por favor [abre un Issue](https://github.com/davidsandovalm/calculadora-propina/issues) en la pestaña correspondiente.

<br />
<div align="center">
  <sub>Desarrollado y estructurado con altos estándares de desarrollo de software para el curso <strong>Desarrollo de Aplicaciones Multidispositivo II</strong>.</sub>
</div>
