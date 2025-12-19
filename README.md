# 🐯 WildCatsWiki

> **System Status:** ONLINE  
> **Version:** 1.0.0  
> **Design Protocol:** Brutalist / Web 1.0

![Project Banner](https://placehold.co/1200x400/000000/FFFFFF?text=WildCats+Wiki+Project+Preview)

## 📂 Project Overview

**WildCatsWiki** is a static Single Page Application (SPA) built for the **IT314 Project**. It serves as a small digital encyclopedia for wild feline species, blending modern frontend technologies with a retro, high-contrast "Data Terminal" aesthetic.

While the application is **static** (no backend server), it simulates a full-stack experience using **Browser LocalStorage** to allow users to Create, Read, Update, and Delete (CRUD) their own entries.

## ⚡ Tech Stack

This project utilizes the bleeding edge of the React ecosystem:

*   **Runtime:** React 19
*   **Styling:** Tailwind CSS v4 (CSS-First configuration)
*   **Build Tool:** Vite (Rolldown Experimental)
*   **Routing:** React Router v7
*   **Persistence:** LocalStorage API

## 🚀 Features

### 1. The Archive (Wiki)
*   **Dynamic Routing:** Individual profile pages for every cat (`/cat/:id`).
*   **Responsive Layouts:** Grid-based directory that adapts from mobile (1 col) to widescreen (4 cols).
*   **Deep Linking:** Sticky Table of Contents and anchored sections for easy navigation.

### 2. User Contributions (CRUD)
*   **Add/Edit Entries:** Users can add new cats via a "Terminal Style" form.
*   **Image Handling:** Supports both Image URLs and Local File Uploads (via Base64 encoding).
*   **Dynamic Data:** Users can add unlimited custom sections and trivia facts.
*   **Persistence:** Custom entries are saved to the browser and persist on refresh.

### 3. Gamified Quiz Module
*   **Survival Mode:** Players start with 5 Hearts. Wrong answers deplete health.
*   **Difficulty Levels:** Easy, Medium, and Hard clearance levels.
*   **Randomized Engine:** Uses the Fisher-Yates algorithm to shuffle questions and answers every session.
*   **Report Card:** Generates a graded "Mission Report" (S, A, C, F) upon completion.

### 4. Design Philosophy (Web 1.0)
*   **Brutalist UI:** High contrast, thick borders, hard shadows, and monospaced typography.
*   **Responsive:** Mobile-first architecture ensures the "Terminal" look works on phones and desktops.
*   **Tailwind Exclusive:** 100% of the styling is handled via utility classes (no external CSS files).

## 🛠️ Installation & Setup

To run this system locally on your machine:

1.  **Clone the Repository**
    ```
    git clone https://github.com/RoiRendal/WildCatsWiki.git
    ```

2.  **Install Dependencies**
    ```
    npm run install-c
    ```

3.  **Initialize System**
    ```
    npm run client
    ```

4.  **Access Terminal**
    Open your browser and navigate to `http://localhost:5173`.

## 📂 Project Structure

```
frontend/
├── src/
│   ├── assets/          # Static Images & Icons
│   ├── components/      # Reusable UI (Navbar, Footer)
│   ├── data/            # Static JSON Data (cats, questions)
│   ├── pages/           # Route Views
│   │   ├── Home.jsx     # Directory Grid
│   │   ├── CatDetail.jsx# The Dossier View
│   │   ├── AddCat.jsx   # Create/Edit Form
│   │   ├── Quiz.jsx     # Game Module
│   │   └── About.jsx    # System Specs
│   ├── App.jsx          # Main Layout & Routing
│   ├── index.css        # Tailwind Implementaion
│   └── main.jsx         # Entry Point
├── index.html           # HTML Root
├── package.json         # Dependencies
└── vite.config.js       # Build Tool
```
