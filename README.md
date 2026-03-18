# Calculadora de Propina 💰

Una aplicación móvil desarrollada con **React Native** y **Expo** para calcular de manera rápida y sencilla las propinas de tus consumos. Adicionalmente de ser multiplataforma, cuenta con una base de código robusta utilizando **TypeScript**.

## 🚀 Características

- Interfaz de usuario intuitiva y moderna.
- Cálculo automático de la propina y el total a pagar basándose en el porcentaje seleccionado.
- Desarrollada con TypeScript para mayor escalabilidad y prevención de errores.
- Compatible con Android, iOS y Web (gracias a Expo).

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- [Node.js](https://nodejs.org/es/) (se recomienda la versión LTS)
- [npm](https://www.npmjs.com/) (normalmente se instala junto a Node.js)
- Aplicación **Expo Go** en tu dispositivo móvil ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/us/app/expo-go/id982107779)), o un emulador previamente configurado en tu PC (Android Studio / Xcode).

## 🛠️ Instalación y Configuración

Sigue estos pasos para clonar el proyecto y prepararlo en tu máquina local:

1. **Clonar el repositorio**
   Abre tu terminal y ejecuta:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd calculadora-propina
   ```
   *(Nota: Si ya clonaste el proyecto, simplemente asegúrate de estar dentro de la carpeta `calculadora-propina`)*.

2. **Instalar dependencias**
   Instala todos los paquetes y módulos necesarios para que el proyecto funcione:
   ```bash
   npm install
   ```

## ▶️ Cómo Ejecutar la Aplicación

Una vez finalizada la instalación de las dependencias, levanta el servidor de desarrollo de Expo ejecutando:

```bash
npm start
```
*(Alternativamente, puedes usar `npx expo start` o los scripts específicos del `package.json` como `npm run android`, `npm run ios`)*.

Este comando iniciará el *Metro Bundler* y te mostrará un código QR en la terminal.

### Opciones de visualización:

- 📱 **Dispositivo Físico:** Abre la app **Expo Go** en tu teléfono y escanea el código QR que se muestra en la terminal.
- 🤖 **Emulador Android:** Teniendo un emulador en ejecución, presiona la tecla `a` en la terminal donde se está ejecutando Expo.
- 🍏 **Simulador iOS:** Si estás en macOS, presiona la tecla `i` en tu terminal para abrir la app en el simulador de iPhone.
- 🌐 **Navegador Web:** Presiona la tecla `w` para ejecutar una versión web de la aplicación.

## 📁 Estructura Principal del Proyecto

Una visión general de los archivos y carpetas más importantes en el proyecto:

```text
calculadora-propina/
├── App.tsx             # Punto de entrada de la aplicación
├── app.json            # Configuración de Expo (nombre, íconos, splash screen)
├── package.json        # Declaración de dependencias y scripts
├── src/                # Código fuente de componentes y lógica
│   ├── components/     # Componentes de UI reutilizables (como TipButton)
│   ├── screens/        # Vistas completas de la aplicación
│   └── styles/         # Definición de estilos de la aplicación
└── assets/             # Imágenes estáticas e íconos de la app
```

## 👨‍💻 Tecnologías Utilizadas

- **React Native** - Framework de UI
- **Expo** - Plataforma de desarrollo para React Native
- **TypeScript** - Superconjunto de JavaScript de tipado estático

## 🤝 Contribuciones

Si deseas mejorar la aplicación, realizar correcciones de errores o sugerir nuevas funcionalidades:
1. Haz un *Fork* del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`).
3. Haz *commit* a tus cambios (`git commit -m 'feat: Añadir nueva característica'`).
4. Sube los cambios a la rama (`git push origin feature/NuevaCaracteristica`).
5. Abre un *Pull Request*.

---
Desarrollado con ❤️ para organizar mejor los gastos diarios.
