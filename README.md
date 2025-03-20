# 🎮 RAWG GAME LIBRARY

A web application built with **React, Vite, TypeScript, and Tailwind CSS** that allows users to search and view information about video games using the RAWG API.

> [!IMPORTANT]   
> You can visit the page with the following url:https://rawg-game-library-qd7z3s3yf-nicolasoyarces-projects.vercel.app/

## 🚀 Technologies Used

- **React + Vite**: Fast and efficient project setup.
- **TypeScript**: Ensures type safety and better code maintainability.
- **Tailwind CSS**: Provides a utility-first approach to styling.
- **Axios**: Handles API requests to RAWG.

## 📌 Features

✔️ **Homepage** displaying a list of video games sorted by **Metacritic score**.  
✔️ **Advanced filters** to search by **year, genre, platform, tags, and developer**.  
✔️ **Search bar** to find video games by name.  
✔️ **Detail page** with comprehensive information, including:
   - Title
   - Genre
   - Rating
   - Cover image
   - Platforms
   - Release year
   - Trailers (if available)

## 🎨 Screenshots

![Image Rawg Game Library](/public/images/imageReadme.png)

## 🔧 Installation & Setup

#### 1️⃣ Clone the repository
```bash
git clone https://github.com/nicolasOyarce/rawg-game-library.git
cd rawg-game-library
```

#### 2️⃣ Install dependencies
```bash
npm install
```

#### 3️⃣ Configure API Key
Create a .env file in the project root and add your RAWG API Key:
```env
VITE_RAWG_API_KEY=your_api_key_here
```

#### 4️⃣ Start the application
```bash
npm run dev
```
The application will be available at http://localhost:5173.

## 📁 Project Structure
```
📦 rawg-game-library
├── 📂 src
│   ├── 📂 components  # Reusable UI components
│   ├── 📂 pages       # Main application pages
│   ├── 📂 services    # API calls
│   ├── 📂 hooks       # Custom hooks
│   ├── 📂 types       # TypeScript definitions
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # React rendering entry point
│   ├── index.css      # Global styles using Tailwind CSS
├── .env               # Environment variables
├── package.json       # Dependencies and scripts
```

## 🛠️ Additional Libraries

- React Router: For handling page navigation.
- React Query (optional): For better data fetching and caching management.

## 📜 Considerations

- The code is structured and documented for easy maintenance.
- The project follows a modular architecture, separating components, services, hooks, and types.
- The application is fully responsive thanks to Tailwind CSS.

## 📄 License

This project is licensed under the MIT License. Feel free to use and modify it.