# 🚀 Shubhi Gupta — Personal Portfolio

A stunning, fully animated, dark/light mode React portfolio built for internships and placements.

---

## ✨ Features

- ⚡ **Framer Motion** animations — fade, slide, scale, stagger, scroll-triggered
- 🌙 **Dark / Light Mode** with smooth animated toggle
- 🎨 **Glassmorphism** cards throughout
- 🖱️ **Custom cursor** glow + ring effect
- 📊 **Scroll progress bar** at the top
- 🔢 **CountUp** animated statistics
- ⌨️ **TypeAnimation** role typing in hero
- 🌐 **Particle canvas** background in hero
- 🎯 **Animated skill progress bars** + interactive category tabs
- 📂 **Project modal** popups with live/GitHub links
- 📜 **Timeline** for experience and education
- 💬 **Testimonial slider** with animated transitions
- 📬 **Contact form** with toast notifications
- 📱 **Fully responsive** for all screen sizes
- ♿ **Accessible** HTML structure
- 🔝 **Back to top** button

---

## 📁 Folder Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar/          Navbar.jsx
│   │   ├── Hero/            Hero.jsx
│   │   ├── About/           About.jsx
│   │   ├── Skills/          Skills.jsx
│   │   ├── Projects/        Projects.jsx
│   │   ├── Experience/      Experience.jsx
│   │   ├── Certifications/  Certifications.jsx
│   │   ├── Achievements/    Achievements.jsx
│   │   ├── Services/        Services.jsx
│   │   ├── Testimonials/    Testimonials.jsx
│   │   ├── Contact/         Contact.jsx
│   │   ├── Footer/          Footer.jsx
│   │   └── common/
│   │       ├── Preloader.jsx
│   │       ├── Cursor.jsx
│   │       └── RevealSection.jsx
│   ├── data/
│   │   └── portfolioData.js    ← All your resume data
│   ├── hooks/
│   │   ├── useTheme.jsx
│   │   └── useScroll.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `react` + `react-dom` | Core framework |
| `framer-motion` | All animations |
| `react-type-animation` | Typing effect in Hero |
| `react-countup` | Animated number counters |
| `react-intersection-observer` | Scroll-triggered animations |
| `react-icons` | Icon library |
| `react-hot-toast` | Toast notifications |

---

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Clone or extract the portfolio folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 📝 Customization

### Update your personal data
Edit **`src/data/portfolioData.js`** — all sections pull from this single file:
- `personal` — name, email, bio, social links
- `education` — degrees and institutions
- `skills` — frontend, backend, database, languages, tools
- `projects` — title, description, tech stack, links
- `experience` — internships and roles
- `certifications` — certificates and issuers
- `achievements` — count-up stats
- `services` — what you offer
- `testimonials` — quotes

### Add a real profile photo
Replace the emoji `👩‍💻` in `Hero.jsx` with:
```jsx
<img src="/your-photo.jpg" alt="Shubhi Gupta"
  style={{ width: 280, height: 280, borderRadius: '50%', objectFit: 'cover' }} />
```

### Enable EmailJS (real email sending)
1. Create account at https://emailjs.com
2. Get `serviceId`, `templateId`, `publicKey`
3. In `Contact.jsx`, replace the `setTimeout` mock with:
```js
import emailjs from '@emailjs/browser';
await emailjs.send(serviceId, templateId, form, publicKey);
```

---

## 🚀 Deployment on Vercel

```bash
# 1. Build the project
npm run build

# 2. Install Vercel CLI
npm install -g vercel

# 3. Deploy
vercel

# Or drag-and-drop the /dist folder at vercel.com
```

**Or via GitHub:**
1. Push to GitHub
2. Go to vercel.com → New Project
3. Import your repo → Deploy ✅

---

## 🎨 Color Customization

Edit CSS variables in `src/styles/globals.css`:

```css
:root {              /* Light theme */
  --accent: #6c47ff;
  --accent2: #a855f7;
  --accent3: #06b6d4;
}

[data-theme="dark"] { /* Dark theme */
  --accent: #7c5cff;
  --accent2: #c084fc;
}
```

---

## 🏆 Portfolio Sections

1. **Hero** — Full-screen landing with typing animation + particle background
2. **About** — Bio, education timeline, animated stats
3. **Skills** — Interactive tabs + animated progress bars
4. **Projects** — Card grid with modal popups
5. **Experience** — Animated timeline
6. **Certifications** — Hover-animated cards
7. **Achievements** — CountUp cards
8. **Services** — What I offer
9. **Testimonials** — Animated slider
10. **Contact** — Form with toast feedback
11. **Footer** — Quick links + social icons

---

Built with ❤️ by **Shubhi Gupta**
