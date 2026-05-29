// ─── Shubhi Gupta Portfolio Data (from Resume) ───
import ResumePDF from "../assets/resume/ShubhiGupta_Resume_FS.pdf";
export const personal = {
  name: "Shubhi Gupta",
  tagline: "Building digital experiences that matter",
  email: "shubhigupta45678@gmail.com",
  phone: "8081984106",
  location: "Noida, Uttar Pradesh, India",
  github: "https://github.com/11Shubhigupta",
  linkedin: "https://linkedin.com/in/shubhi-gupta-83a09b296",
  leetcode: "https://leetcode.com",
  bio: "I'm a passionate Full Stack Developer and B.Tech IT student at JSS Academy of Technical Education, Noida. I love crafting seamless digital experiences — from elegant frontends to scalable backend systems. With 500+ DSA problems solved and real-world projects under my belt, I'm always pushing the boundaries of what's possible on the web.",
  shortBio: "Full Stack Developer • 500+ DSA Problems • MERN Stack Enthusiast",
  resumeUrl: ResumePDF,
};

export const education = [
  {
    id: 1,
    degree: "B.Tech in Information Technology",
    institution: "JSS Academy of Technical Education, Noida",
    duration: "2023 – 2027",
    grade: "Current",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "Class 12 (PCM)",
    institution: "Maharaja Public School, Ayodhya",
    duration: "2022",
    grade: "90%",
    icon: "🏫",
  },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "HTML5", level: 95, icon: "🌐" },
    { name: "CSS3", level: 90, icon: "🎨" },
    { name: "Tailwind CSS", level: 88, icon: "💨" },
    { name: "Bootstrap", level: 82, icon: "🅱️" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 83, icon: "🚂" },
    { name: "REST APIs", level: 87, icon: "🔗" },
    { name: "JWT Auth", level: 80, icon: "🔐" },
  ],
  database: [
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "MySQL", level: 75, icon: "🐬" },
  ],
  languages: [
    { name: "JavaScript", level: 90, icon: "🟨" },
    { name: "C++", level: 82, icon: "⚙️" },
    { name: "C", level: 78, icon: "🔵" },
    { name: "Python", level: 72, icon: "🐍" },
    { name: "SQL", level: 74, icon: "📊" },
  ],
  tools: [
    { name: "Git & GitHub", level: 88, icon: "🐙" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Postman", level: 85, icon: "📮" },
    { name: "Cloudinary", level: 78, icon: "☁️" },
    { name: "Multer", level: 76, icon: "📁" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "AI Virtual Assistant",
    subtitle: "Full Stack Intelligent Assistant Platform",
    description:
      "An AI-powered virtual assistant platform enabling users to create customizable assistants with voice and text interaction. Integrated Gemini AI with JWT-based authentication for secure real-time user interactions.",
    technologies: ["MERN Stack", "Gemini AI", "Tailwind CSS", "JWT", "Cloudinary", "Multer", "Web Speech API"],
    github: "https://github.com/11Shubhigupta",
    live: "#",
    color: "#6c47ff",
    emoji: "🤖",
    featured: true,
  },
  {
    id: 2,
    title: "TomatoBite",
    subtitle: "Full Stack Food Ordering Website",
    description:
      "A full-stack food ordering platform with authentication, cart management, and order processing. Features advanced filtering, responsive UI, and seamless navigation across devices.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/11Shubhigupta",
    live: "#",
    color: "#ef4444",
    emoji: "🍅",
    featured: true,
  },
  {
    id: 3,
    title: "TradeSphere",
    subtitle: "Full Stack Stock Trading Platform",
    description:
      "Real-time stock trading platform with live market visualization, portfolio tracking, and transaction analytics. Includes JWT auth, candlestick charts, and optimized backend APIs.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/11Shubhigupta",
    live: "#",
    color: "#22c55e",
    emoji: "📈",
    featured: true,
  },
 {
  id: 4,
  title: "Finance Dashboard",
  subtitle: "Financial Management UI",
  description:
    "Built a responsive finance dashboard with summary cards, transaction management, role-based Viewer/Admin interface, interactive line and pie charts, filtering, sorting, search functionality, and global state management using Context API.",
  technologies: [
    "React.js",
    "JavaScript",
    "Context API",
    "Chart.js",
    "CSS3",
    "Responsive Design"
  ],
  github: "https://github.com/11Shubhigupta",
  live: "#",
  color: "#22c55e",
  emoji: "📊",
  featured: false,
},

{
  id: 5,
  title: "Fenrir Security Dashboard",
  subtitle: "React Security Dashboard UI",
  description:
    "Built a modern security dashboard UI recreating Login, Dashboard, and Scan screens from real-world references. Implemented dark/light themes, responsive layouts, reusable components, tables, badges, and progress indicators for a SaaS-style experience.",
  technologies: [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Responsive UI",
    "Dark Mode",
    "Component Design"
  ],
  github: "https://github.com/11Shubhigupta",
  live: "#",
  color: "#3b82f6",
  emoji: "🛡️",
  featured: false,
},

{
  id: 6,
  title: "Wanderlust",
  subtitle: "Airbnb Style Website",
  description:
    "Developed a responsive Airbnb-style website using reusable React components. Implemented search functionality, category filtering, dynamic listing interfaces, and modern responsive layouts with clean visual hierarchy.",
  technologies: [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Responsive Design",
    "UI/UX"
  ],
  github: "https://github.com/11Shubhigupta",
  live: "#",
  color: "#ec4899",
  emoji: "✈️",
  featured: false,
},
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Web Developer Intern",
    company: "Technohacks Private Limited",
    type: "Remote Internship",
    duration: "Aug 2025 – Sept 2025",
    icon: "💼",
    color: "#6c47ff",
    responsibilities: [
      "Developed a Stock Market Dashboard integrating real-time financial APIs with interactive visual analytics.",
      "Built a Quiz Application with timer-based logic and automated scoring.",
      "Enhanced UI consistency, improved component modularity, and reduced unnecessary rendering.",
      "Followed structured Git workflows for scalable architecture.",
    ],
    technologies: ["React.js", "Node.js", "REST APIs", "Git", "JavaScript"],
  },
  {
    id: 2,
    role: "Technical Society Member",
    company: "Microsoft Mobile Innovation Lab (MMIL)",
    type: "Technical Society",
    duration: "2023 – 2026",
    icon: "🔬",
    color: "#06b6d4",
    responsibilities: [
      "Contributed to technical workshops and UI/UX initiatives.",
      "Collaborated on projects and knowledge-sharing sessions.",
      "Participated in Microsoft CodeForge Hackathon.",
    ],
    technologies: ["UI/UX", "Web Development", "Workshops"],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Hackathon Participation Certificate",
    issuer: "Microsoft CodeForge Event",
    desc: "Recognizing technical innovation and contribution in competitive hackathon environment.",
    icon: "🏆",
    color: "#6c47ff",
  },
  {
    id: 2,
    title: "Web Development Training Certificate",
    issuer: "Professional Training Program",
    desc: "Covering practical full stack implementation and deployment fundamentals.",
    icon: "🌐",
    color: "#06b6d4",
  },
  {
    id: 3,
    title: "Android Developer Fundamentals",
    issuer: "Google / Android Training",
    desc: "Focused on core mobile application architecture principles and Android development.",
    icon: "📱",
    color: "#22c55e",
  },
];

export const achievements = [
  { id: 1, count: 500, suffix: "+", label: "DSA Problems Solved", icon: "🧩", desc: "LeetCode — Arrays, Trees, Graphs, Sliding Window" },
  { id: 2, count: 3, suffix: "+", label: "Real-World Projects", icon: "🚀", desc: "Full Stack MERN Applications" },
  { id: 3, count: 2, suffix: "+", label: "Internship / Society", icon: "💼", desc: "Industry Experience" },
  { id: 4, count: 90, suffix: "%", label: "Class 12 Score", icon: "🎯", desc: "PCM — Strong Analytical Foundation" },
];

export const services = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "Crafting beautiful, responsive UIs with React.js, Tailwind CSS, and modern design systems.",
    icon: "🎨",
    color: "#6c47ff",
  },
  {
    id: 2,
    title: "Full Stack Development",
    desc: "End-to-end web applications with MERN stack — from database to deployment.",
    icon: "⚡",
    color: "#a855f7",
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "User-centered design with clean layouts, smooth animations, and intuitive flows.",
    icon: "✨",
    color: "#06b6d4",
  },
  {
    id: 4,
    title: "REST API Development",
    desc: "Scalable REST APIs with Node.js, Express.js, authentication, and optimized data handling.",
    icon: "🔗",
    color: "#22c55e",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Mentor at Technohacks",
    role: "Senior Developer",
    text: "Shubhi demonstrated exceptional problem-solving skills and delivered production-quality features during her internship. Her ability to pick up complex concepts rapidly was remarkable.",
    avatar: "T",
  },
  {
    id: 2,
    name: "MMIL Society",
    role: "Technical Society",
    text: "A dedicated team member who consistently brought creative UI/UX ideas to our workshops. Her passion for web development is truly inspiring.",
    avatar: "M",
  },
  {
    id: 3,
    name: "Classmate & Collaborator",
    role: "Fellow Developer",
    text: "Working with Shubhi on projects has been fantastic. Her MERN stack expertise and eye for design elevate every project she touches.",
    avatar: "C",
  },
];
