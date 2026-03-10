# Organograma

## Description

Organograma is a React-based project designed to create an organizational chart. It allows users to input data and visualize it in a structured and interactive way.

## Features

- Dynamic form to input user data.
- Dropdown lists for selecting roles.
- Styled components for a modern UI.
- Responsive design.

## Project Structure

```
organograma/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── images/
├── src/
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── components/
│       ├── Banner/
│       │   ├── banner.css
│       │   └── index.js
│       ├── Botao/
│       │   ├── Botao.css
│       │   └── index.jsx
│       ├── Formulario/
│       │   ├── Formulario.css
│       │   └── index.jsx
│       ├── ListaSuspensa/
│       │   ├── ListaSuspensa.css
│       │   └── index.jsx
│       └── TextEnter/
│           ├── TextEnter.css
│           └── index.jsx
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd organograma
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server, run:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Scripts

- `npm start`: Starts the development server.
- `npm build`: Builds the app for production.
- `npm test`: Runs the test suite.
- `npm eject`: Ejects the configuration files.

## Dependencies

- React: ^19.2.4
- React DOM: ^19.2.4
- React Scripts: 5.0.1
