export const profile = {
  name: "Subhrangshu Chatterjee",
  initials: "S",
  role: "Software Engineer",
  tagline: "Full-stack & AI/ML",
  email: "chatterjee3008@gmail.com",
  github: "https://github.com/Shubh3819", // ← replace with your profile URL
  linkedin: "https://www.linkedin.com/in/subhrangshu-chatterjee-16ab10245/", // ← replace with your profile URL
  video: "/intro-video.mp4", // ← replace with your intro video
  resume: "https://drive.google.com/file/d/1qWv_xQNcpBPTBKAADEwpcVWS9jBFcYf2/view?usp=sharing", // ← put your file at public/resume.pdf
  photo: "/me.jpeg", // ← put your photo at public/profile.png
};

export const stats = [
  { value: "4", label: "Featured projects" },
  { value: "9 mo", label: "Engineering internship" },
  { value: ">80%", label: "Sound-classifier accuracy" },
  { value: "Java · Python · JS", label: "Core languages" },
];

// Add repo / demo URLs to show the "Code" and "Live demo" links on a card.
export const projects = [
  {
    number: "01",
    category: "Full-stack",
    title: "Mini Jira — Bug Tracking System",
    description:
      "A project and ticket management app with ticket creation, editing, search, filters, project membership checks, and JWT-based authentication.",
    highlights: [
      "JWT auth with project-level access checks",
      "Search and filters across tickets",
      "End-to-end CRUD workflow",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    icon: "workflow",
    github: "https://github.com/Shubh3819/mini-jira.git",
    demo: "https://mini-jira-gamma.vercel.app",
  },
  {
    number: "02",
    category: "Machine Learning · Real-time",
    title: "Environmental Sound Classification",
    description:
      "A real-time sound monitoring system using a CRNN with attention to classify audio, visualize waveforms and detection history, and surface alerts.",
    highlights: [
      "CRNN with attention, >80% accuracy",
      "Live waveform and detection history",
      "FastAPI inference service",
    ],
    stack: ["Python", "TensorFlow", "Librosa", "FastAPI", "React"],
    icon: "audio",
    github:
      "https://github.com/Shubh3819/Real-Time-Environmental-Sound-Classification-and-Alert-System.git",
    demo: "https://real-time-environmental-sound-class.vercel.app/",
  },
  {
    number: "03",
    category: "Full-stack",
    title: "Payment App",
    description:
      "A payment app with user authentication, transaction history, and a dashboard for managing payments and viewing analytics.",
    highlights: [
      "User authentication and authorization",
      "Transaction history and analytics",
      "Responsive design with Tailwind CSS",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    icon: "credit-card",
    github: "https://github.com/Shubh3819/PaymentApp.git",
    demo: "https://payment-app-frontend-kappa.vercel.app/",
  },
  {
    number: "04",
    category: "Frontend Development",
    title: "Movies-Maniac",
    description:
      "A responsive movie discovery application that lets users explore and search for movies, view detailed information, and manage their favorite films.",
    highlights: [
      "Movie discovery and search",
      "Detailed movie information",
      "Favorites management",
      "Responsive interface",
    ],
    stack: ["React", "Vite", "CSS3", "React Hooks", "Lodash"],
    icon: "film",
    github: "https://github.com/Shubh3819/Movies-Maniac",
    demo: "https://movies-maniac.vercel.app/",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: ["React", "Vite", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Backend & APIs",
    icon: "layers",
    skills: ["Node.js", "Express.js", "Spring Boot", "FastAPI", "REST APIs"],
  },
  {
    title: "Data & Storage",
    icon: "database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    title: "AI & ML",
    icon: "brain",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "Librosa"],
  },
  {
    title: "Practices",
    icon: "git",
    skills: [
      "Git & GitHub",
      "JWT authentication",
      "REST API design",
      "Model evaluation",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "ListenLights Infosystems",
    period: "Jan 2026 — Jul 2026",
    points: [
      "Worked on an AI-assisted artwork processing portal, integrating generative AI into a ticket-based workflow.",
      "Contributed to review, approval, and notification stages across the full stack.",
    ],
    tags: ["Full-stack", "Generative AI", "Workflow automation"],
  },
  {
    role: "AI/ML Research Intern",
    organisation: "DRDO — Defence Research and Development Organisation (DRDO)",
    period: "May 2025 — Jul 2025",
    points: [
      "Developed a real-time environmental sound classification system using a CRNN with attention.",
      "Implemented live waveform visualization, detection history, and alerting features.",
    ],
    tags: [
      "Machine Learning",
      "Deep Learning",
      "Real-time systems",
      "Audio processing",
    ],
  },
  {
    role: "Corporate Connect Lead & Graphic Designer (Volunteer)",
    company: "Little Paws Care",
    period: "Dec 2022 — May 2026",
    points: [
      "Supported corporate outreach and community initiatives for the NGO.",
      "Handled creative and communication work alongside coordination.",
    ],
    tags: ["Communication", "Coordination", "Design"],
  },
];

export const education = {
  degree: "B.Tech — Computer Science & Engineering",
  school: "KIIT University",
  period: "Graduated 2026",
};
