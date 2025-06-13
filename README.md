# 🧠 Sentienta Quality AI

## How to run this file

1. Clone this repo:
```bash
git clone https://github.com/harshitabisht05/SQAI-website.git
```
2. Navigate to the project directory:
```bash
cd SQAI-website
```
3. Install the required dependencies:
```bash
npm install
npm install framer-motion
```
4. Start the development server:
```bash
npm run dev
```
5. Open your browser and go to `http://localhost:3000` to view the application.



## Info for developers:

- The project is built using Next.js, a React framework.
- The main entry point is `app/page.tsx`.
- You can edit the components in the `app/components` directory according to the task assigned.
- For Navigation bar use `app/components/Header.tsx`.
- For Hero section use `app/components/Hero.tsx`.
- For Project section use `app/components/Projects.tsx`.
- For Footer section use `app/components/Footer.tsx`.



### Project Structure:
- `app/`: Contains the main application code.
- `components/`: Contains reusable components.
- `public/`: Contains static assets like images.
- `package.json`: Contains project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration file.
- `next.config.js`: Next.js configuration file.
- `README.md`: This file, providing an overview of the project.

```
SQAI-website/
├── app/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── Projects.tsx
│   └── globals.css
│   └── layout.tsx
│   └── page.tsx
│   └── favicon.ico
├── public/
│   └── ...static assets (images, etc.)
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```