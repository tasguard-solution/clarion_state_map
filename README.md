# Clarion State Map 🗺️

A sophisticated GIS-driven platform for interactive visualization of Nigeria's states, local governments, and real-time insights.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

## 🌟 Overview

Clarion State Map project is designed to provide a highly interactive and performance-optimized mapping experience. It bridges complex geographic data (GeoJSON) with a modern, responsive frontend, allowing users to explore regional data with ease.

## 🏗️ Architecture

The project is structured as a monorepo containing two main components:

-   **`/frontend`**: A modern React application built with TypeScript and Vite. It features interactive SVG maps, dynamic state cards, and a premium editorial-style UI.
-   **`/backend`**: A Python-based FastAPI service responsible for GIS processing, GeoJSON extraction, and serving optimized spatial data.

## 🚀 Getting Started

### Prerequisites

-   **Node.js** (v18 or higher)
-   **npm** or **yarn**
-   **Python 3.10+**
-   **pip**

### 1. Backend Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows use `.venv\Scripts\activate`
pip install -r requirements.txt
python main.py
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📁 Repository Structure

```text
clarion_state_map/
├── backend/            # FastAPI GIS Engine
│   ├── data/           # Processed GeoJSON & SVG data
│   ├── generators/     # Geometry processing logic
│   └── main.py         # Entry point
├── frontend/           # React + TS + Vite App
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Application views
│   │   └── styles/     # Design tokens & CSS
│   └── package.json    
└── README.md           # You are here
```

## 🛠️ Key Technologies

-   **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, React Router.
-   **Backend**: FastAPI, GeoPandas/Shapely (for GIS), Uvicorn.
-   **Design**: Custom CSS-in-JS patterns, premium typography, and dynamic micro-animations.

## 📝 Documentation Links

-   [Frontend Detailed Guide](./frontend/README.md)
-   [Backend GIS Details](./backend/README.md)
-   [Map Extraction Workflow](./backend/MAP_EXTRACTION_GUIDE.md)

---

Built with ❤️.
