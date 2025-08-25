# Project Overview

This is a web application for "Taller Ya", an online platform to find and book car repair services. Users can search for workshops, view their details, and book appointments. The project is built with React, Vite, and Tailwind CSS.

## Key Technologies

*   **Frontend:** React.js
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router
*   **State Management:** React Context

# Building and Running

*   **Install dependencies:**
    ```bash
    npm install
    ```
*   **Run in development mode:**
    ```bash
    npm run dev
    ```
*   **Build for production:**
    ```bash
    npm run build
    ```
*   **Lint the code:**
    ```bash
    npm run lint
    ```

# Development Conventions

*   **Component-Based Architecture:** The application is structured into reusable React components located in `src/components`.
*   **Styling:** Tailwind CSS is used for styling. Custom styles are defined in `tailwind.config.js`.
*   **Routing:** Page components are in `src/pages` and routing is handled in `src/App.jsx`.
*   **Data:** Mock data is used for development and is located in `src/data/mockData.js`.
*   **State Management:** A global context is provided in `src/context/AppContext.jsx` for managing application state.
