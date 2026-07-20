# Links

[![React Native](https://img.shields.io/badge/React%20Native-0.86-61dafb?logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-57-000020?logo=expo)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern mobile app built with React Native and Expo to save, organize, and access your favorite links by category.

> Read this project in [Português](README.pt-BR.md).

## About the project

Links is a mobile application built with React Native and Expo to help you save, organize, and access your favorite links by category. Users can add new links, assign a category, open the link in a browser, and remove entries when needed.

### ✨ Features

- Add links with name, URL, and category
- Organize links by category
- Open links directly in the browser
- Delete saved links
- Local persistence using AsyncStorage

### 📱 Screenshots

<p align="center">
  <img src="assets/screenshots/home.jpeg" alt="Home" width="180" />
  <img src="assets/screenshots/add-links.jpeg" alt="Add link" width="180" />
  <img src="assets/screenshots/link-details.jpeg" alt="Link details" width="180" />
</p>

### 🛠️ Tech Stack

- React Native
- Expo
- Expo Router
- TypeScript
- AsyncStorage
- React Native Vector Icons

### Requirements

- Node.js 20+
- npm or yarn
- Expo Go on a phone, or an Android/iOS emulator

### 🚀 Installation

1. Clone the repository:

   ```bash
   git clone <your-repository>
   cd app-links
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the project:
   ```bash
   npx expo start
   ```

### 📁 Project structure

```text
src/
  app/           # app screens and routes
  components/    # reusable components
  storage/       # persistence logic
  styles/        # theme and colors
  utils/         # utility helpers and categories
```

### 🤝 Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request with improvements.

### 📄 License

This project is licensed under the MIT License.
