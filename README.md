# Liora.Ai

An AI-powered image generation web application. Describe anything in text and Liora.Ai turns it into a visual in seconds.

---

## Tech Stack

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome" />
  <img src="https://img.shields.io/badge/AOS-000000?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyTDIgN2wxMCA1IDEwLTV6TTIgMTdsOSA1IDktNXYtNWwtOSA1LTktNXoiLz48L3N2Zz4=&logoColor=white" alt="AOS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

---

## Pages

- **Home** - Landing page with hero section, steps, gallery, and testimonials
- **Generate** - Enter a text prompt and get an AI-generated image side by side
- **Buy Credits** - Pricing plans to purchase generation credits
- **Login / Sign Up** - Authentication page

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/liora-ai.git

# Navigate to the client folder
cd liora-ai/client

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

---

## Project Structure

```
client/
├── public/
├── src/
│   ├── assets/         # Images and static files
│   ├── components/     # Reusable UI components
│   ├── context/        # React context for global state
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Page components
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## License

MIT
