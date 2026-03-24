# Portfolio.Sys // Ram Kumar

A comprehensive full-stack portfolio tailored for a Backend & AI Engineer. This project features a state-of-the-art terminal aesthetic, custom interactive background animations, and a decoupled architecture utilizing a Django backend and a Next.js frontend.

---

## 🏗 Architecture Overview

The portfolio is structured as a completely decoupled web application:
- `/frontend`: The client-facing Next.js application responsible for UI, routing, and complex Framer Motion animations.
- `/backend`: The Django backend server that provides a RESTful API to manage and serve dynamic content, such as the portfolio "Projects".

## 💻 Tech Stack

### Frontend System (Next.js)
- **Core Framework**: Next.js (App Router)
- **Language**: TypeScript (`.tsx`)
- **Styling**: Tailwind CSS (with global CSS variables for dynamic theming)
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend System (Django)
- **Core Framework**: Django & Django REST Framework (DRF)
- **Language**: Python 3.x
- **Database**: SQLite (Default for development)
- **API Architecture**: REST APIs (JSON responses)

---

## ✨ Core Features & Aesthetics

### 1. Terminal / Sci-Fi Theming
The UI incorporates a "hacker" and "system operations" aesthetic, perfectly suited for an AI and Backend developer. Core sections map to system terminology:
- **Hero**: "System Status: Online & Ready"
- **Experience**: "Mission Log"
- **Projects**: "Declassified Projects"
- **Skills**: "Systems Inventory"
- **Contact**: "Establish Comms"

### 2. Interactive Particle Background (`ParticleBackground.tsx`)
A global HTML5 `<canvas>` layer sitting behind the application at `z-index: 0`. It dynamically generates particles that roam the screen and draw connection lines when they border each other. It also features a gravity-pull effect when the user's mouse hovers near the nodes.

### 3. Custom Tracking Cursor (`CustomCursor.tsx`)
Native cursors are disabled globally in favor of a specialized tracking cursor:
- Contains an instant-tracking inner dot and a spring-physics outer ring.
- Actively detects hover states on `.interactive`, `a`, `button`, and `card` elements, enlarging and shifting blending modes when focusing on clickable targets.

### 4. Dynamic API Integration
Instead of hardcoding projects into the React components, the "Declassified Projects" section fetches data asynchronously from the Django backend API `http://127.0.0.1:8000/api/portfolio/projects/`.

---

## 🚀 Setup & Execution Guide

### 1. Running the Backend (Django)
Navigate to the backend directory, activate your virtual environment, and start the development server:
```bash
cd backend
source ../env/bin/activate
python manage.py runserver
```
*Note: The backend must run on `http://127.0.0.1:8000` for the frontend to successfully fetch the project data.*

**Seeding the Database:**
To populate projects from the resume outline automatically:
```bash
python seed_projects.py
```

### 2. Running the Frontend (Next.js)
In a separate terminal, navigate to the frontend directory and start the Next.js development server:
```bash
cd frontend
npm install
npm run dev
```
The application will spin up at `http://localhost:3000`.

---

## 📁 Directory Structure Highlight

```text
portfolio-project/
├── backend/
│   ├── env/                 # Python Virtual Environment
│   ├── manage.py            # Django Entry Point
│   ├── portfolio/           # Django App (Models, Views, Serializers)
│   └── seed_projects.py     # Database Population Script
│
└── frontend/
    ├── app/
    │   ├── globals.css      # Core Tailwind and Theme variables
    │   ├── layout.tsx       # Global layout importing Cursor & Canvas
    │   └── page.tsx         # Main entry page
    ├── components/
    │   ├── HeroSection.tsx
    │   ├── ExperienceSection.tsx
    │   ├── ProjectsSection.tsx
    │   ├── SkillsSection.tsx
    │   ├── ParticleBackground.tsx # Canvas Animation
    │   └── CustomCursor.tsx       # Cursor Animation
    └── lib/
        └── api.ts           # Fetch utilities tying Frontend to Django
```
