<img width="1903" height="927" alt="Capture" src="https://github.com/user-attachments/assets/318fe7d7-70e6-45bc-8ea2-bcef3d42d7f7" />


# 🧠 SoftSkillsTutor

**SoftSkillsTutor** is an AI-powered interactive learning platform designed to help young learners
build essential soft skills for school, work, and life.

Students can practice communication, teamwork, leadership, problem-solving, confidence, and creativity through structured lessons, engaging activities, and quizzes. The platform uses AI to provide instant feedback on video submissions, making learning personalized and effective.

---

## 🚀 Live Demo

Check out the live application:
👉 **[SoftSkillsTutor on Vercel](https://soft-skills-tutor.vercel.app)**

---

## ✨ Features

- **🔐 Secure Authentication** – Sign up and log in with Email/Password or Google OAuth (powered by Supabase).
- **📚 Interactive Lessons** – Explore structured modules for 7 core soft skills.
- **🎯 Guided Activities** – Practice real-life scenarios with step-by-step activities.
- **📝 Quizzes** – Test your knowledge with MCQs for each module.
- **🤖 AI Video Feedback** – Upload your practice videos and receive instant feedback on tone, pace, and clarity via **Google Gemini** and **AssemblyAI**.
- **📄 Resource Library** – Download curated PDF guides and materials.
- **💬 AI Chatbot** – Get real-time help and guidance from an AI assistant.
- **📊 Progress Tracking** – View your learning progress, completed activities, and quiz scores on your dashboard.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, React Router v7
- **Styling:** CSS Modules / Vanilla CSS
- **Authentication & Database:** Supabase (Auth, PostgreSQL)
- **AI & Speech Analysis:** Google Gemini API, AssemblyAI
- **Icons:** Lucide React
- **Deployment:** Vercel

```bash

## 📁 Project Structure

Soft-Skills-Tutor--main/
├── public/                 # Static assets
├── src/
│   ├── srcPages/
│   │   └── Components/     # All page components & UI elements
│   ├── utils/              # AI helper functions (Gemini, AssemblyAI)
│   ├── data/               # MCQ data files
│   ├── assets/             # Images and logos
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── .env                    # Environment variables (must be created locally)
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment configuration
└── README.md               # Project documentation
```

---

## 🔧 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DeshaniBandara/Soft-Skills-Tutor-.git
   cd Soft-Skills-Tutor-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   VITE_GEMINI_API_KEY=your-google-gemini-api-key
   VITE_ASSEMBLY_AI_KEY=your-assemblyai-api-key
   ```

   > **Note:** You must obtain these keys from Supabase, Google AI Studio, and AssemblyAI.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with HMR (Hot Module Replacement). |
| `npm run build` | Builds the app for production to the `dist` folder. |
| `npm run preview` | Locally previews the production build. |
| `npm run lint` | Runs ESLint to check code quality. |
| `npm run deploy` | Deploys the app to GitHub Pages (if configured). |

---

## 🌐 Deployment

This project is configured for seamless deployment on **Vercel**.

1. Push your code to a GitHub repository.
2. Import the repository into Vercel.
3. Add the same environment variables in the Vercel dashboard.
4. Deploy.

Vercel will automatically rebuild and redeploy on every push to the main branch.

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous/public key |
| `VITE_GEMINI_API_KEY` | Google Gemini API key for AI feedback |
| `VITE_ASSEMBLY_AI_KEY` | AssemblyAI API key for speech analysis |

---

## 🧩 React + Vite Configuration Notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Official Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding ESLint Configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## 🙏 Acknowledgments & Credits

We would like to express our sincere gratitude to **Jayasankha-dev** for their invaluable support and contributions to this project.

### 🔧 Bug Fixes & Optimizations

- **React Router Configuration** – Fixed routing issues that prevented the app from loading on Vercel, resolving the `basename` mismatch and the `Soft-Skills-Tutor-/` redirect loop.
- **Supabase Integration** – Assisted in correctly configuring environment variables and authentication flows for Google OAuth, resolving `redirect_uri_mismatch` and `OAuth state parameter missing` errors.
- **Vercel Deployment** – Helped optimize the deployment pipeline with proper `vercel.json` configuration for SPA rewrites and clean builds.
- **UI & CSS Fixes** – Addressed visual issues including text visibility, button styling, and responsive design improvements.
- **General Guidance** – Provided expert advice on debugging, error handling, and best practices for React + Vite + Supabase projects.

Your expertise and patience made a significant difference. Thank you for helping us deliver a more stable and polished product.

**GitHub:** [@Jayasankha-dev](https://github.com/Jayasankha-dev)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/DeshaniBandara/Soft-Skills-Tutor-/issues).

---

## 📄 License

This project is licensed under the [MIT License](https://github.com/DeshaniBandara/Soft-Skills-Tutor-/tree/main?tab=MIT-1-ov-file)

---

## 👩‍💻 Author

**Deshani Bandara**
- GitHub: [@DeshaniBandara](https://github.com/DeshaniBandara)
- LinkedIn: [Deshani Bandara](https://www.linkedin.com/in/deshani-bandara-a0b733367/)

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!
