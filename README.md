# MerkApp

## 📱 Aplicación React Native con TypeScript

Esta es una aplicación desarrollada en React Native utilizando TypeScript, con una interfaz de usuario atractiva que muestra contenido estilo tienda en linea para facilitar las compras en zonas con poca señal.

## 🚀 Comenzando

Sigue estas instrucciones para configurar y ejecutar el proyecto en tu máquina local.

### 📋 Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión >= 14.x)
- **npm** o **Yarn**
- **Android Studio** o **Xcode** (para emulador/simulador)

### 🔧 Instalación

1. **Clonar el repositorio con protocolo HTTPS:**

   ```bash
   git clone https://github.com/SrRobls/MerkApp-Project.git
   cd Front_end
   ```

2. **Instalar dependencias:**

   Usando npm:

   ```bash
   npm install
   ```

   O usando Yarn:

   ```bash
   yarn install
   ```

3. **Instalar Expo CLI globalmente (opcional):**

   ```bash
   npm install -g expo-cli
   ```

### ⚡ Ejecutar la Aplicación

Para iniciar el servidor de desarrollo:

Android

```sh
# Using npm
npx run android

# OR using Yarn
yarn android
```

Ios
```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

Esto abrira tu emulador o similador de dispositivos, dependiendo el sistema operativo que tangas, y ejecutara la aplicación.

tambien abrirá Expo DevTools en tu navegador. Luego puedes:

- Presionar `i` para ejecutar en el simulador de iOS (solo en Mac)
- Presionar `a` para ejecutar en el emulador de Android
- Escanear el código QR con la app Expo Go en tu dispositivo móvil

En caso de no aparecer las opciones dichas anteriormente, puedes ejecutar el comando

```bash
npx react-native run-android
```
El cual te ejecutara la app directamente en el emulador de Android Studio.


### 💡 Funcionalidades

- **TypeScript** para mayor seguridad en el código
- Interfaz de usuario dinámica y adaptable
- Navegación fluida con React Navigation
- Componentes reutilizables


### ⚠️ Solución de Problemas

- Limpia la caché si encuentras errores:
  ```bash
  cd android
  ./gradlew clean
  cd ..
  ```
- Ejecuta la app nuevamente:
- Android

```sh
# Using npm
npx run android

# OR using Yarn
yarn android
```

Ios
```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

### Asegúrate de que los emuladores/simuladores estén configurados correctamente.


