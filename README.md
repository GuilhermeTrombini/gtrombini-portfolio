# Portfolio - Guilherme Trombini

A modern, animated portfolio website built with React, TypeScript, and Framer Motion, optimized for deployment on Fly.io.

## 🚀 Features

- **Modern Animations**: Smooth, eye-catching animations using Framer Motion
- **Responsive Design**: Fully responsive and mobile-optimized
- **Glassmorphism UI**: Beautiful glassmorphic design with gradient backgrounds
- **Smooth Scrolling**: Seamless navigation between sections
- **Performance Optimized**: Built with Vite for fast builds and optimal performance
- **TypeScript**: Fully typed for better developer experience

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Build

To build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚢 Deployment to Fly.io

### Prerequisites

1. Install [Fly CLI](https://fly.io/docs/getting-started/installing-flyctl/)
2. Sign up for a [Fly.io account](https://fly.io/app/sign-up)

### Deployment Steps

1. **Login to Fly.io:**
```bash
fly auth login
```

2. **Initialize your app (if not already done):**
```bash
fly launch
```
   - Choose a unique app name (or use the one in `fly.toml`)
   - Select a region (e.g., `iad` for Washington, D.C.)
   - Don't deploy yet if prompted

3. **Deploy your app:**
```bash
fly deploy
```

4. **Open your app:**
```bash
fly open
```

### Updating Your App

After making changes, simply run:
```bash
fly deploy
```

### Automated Deployment with GitHub Actions

This repository includes a GitHub Actions workflow that automatically deploys to Fly.io on every push to the `main` branch.

**Setup Instructions:**

1. **Get your Fly.io API token:**
```bash
fly auth token
```

2. **Add the token as a GitHub secret:**
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `FLY_API_TOKEN`
   - Value: Paste your Fly.io API token
   - Click "Add secret"

3. **Push to main branch:**
   - The workflow will automatically trigger on every push to `main`
   - You can also manually trigger it from the Actions tab

The workflow will:
- Checkout your code
- Setup Fly.io CLI
- Deploy to Fly.io automatically

### Useful Fly.io Commands

- `fly status` - Check app status
- `fly logs` - View application logs
- `fly ssh console` - SSH into your app
- `fly scale count 1` - Scale your app
- `fly secrets list` - List environment variables

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── data/           # Data files
│   │   └── portfolio.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── Dockerfile          # Docker configuration
├── fly.toml           # Fly.io configuration
├── nginx.conf         # Nginx configuration
├── package.json       # Dependencies
└── vite.config.ts     # Vite configuration
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.ts` to update:
- Personal information
- Skills
- Work experience
- Education
- Certifications
- Projects

### Styling

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Individual component files

### Colors

The color scheme can be customized in `tailwind.config.js` under the `theme.extend.colors` section.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Guilherme Gerazo Trombini**
- Email: guilherme.trombini@outlook.com
- Phone: +55 (14) 98154-2605

---

Built with ❤️ using React, TypeScript, and Framer Motion
# gtrombini-portfolio
