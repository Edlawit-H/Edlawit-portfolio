// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name: "Edlawit Huluwork Abebe",
  title: "Full Stack Developer",
  subtitle: "Software Engineering Student",
  location: "Addis Ababa, Ethiopia",
  email: "edlawithuluwork82@gmail.com",
  phone: "+251 969956776",
  github: "https://github.com/Edlawit-H",
  linkedin: "https://www.linkedin.com/in/edlawit-huluwork-319056318",
  tagline:
    "Building modern web applications with clean UI and practical backend systems.",
  summary:
    "I’m a full-stack developer and software engineering student based in Addis Ababa, Ethiopia, with a strong interest in problem-solving and building systems that are structured, logical, and practical. What draws me most to software development is the process of breaking down complex problems, understanding how different parts of a system connect, and turning ideas into applications that actually work well for people.\n\nI enjoy working across both frontend and backend development because I like seeing how an application comes together as a whole from designing responsive interfaces and improving user experience to structuring APIs, handling data, and building backend logic that supports everything smoothly.\n\nBeyond coding itself, I enjoy learning, improving, and working through challenges until things make sense both logically and practically. I’m drawn to development because it blends creativity with structured thinking, and I find real satisfaction in building systems that are clean, efficient, and intentionally designed.",
};

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills = [
  "Node.js",
  "Express.js",
  "React",
  "MongoDB",
  "Git & GitHub",
  "TypeScript",
  "Next.js",
  "REST APIs",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "PostgreSQL (Supabase)",
  "Postman",
  "API Integration",
  "Debugging",
  "Full-Stack Development",
  "System Design Basics",
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  category: "Frontend" | "Backend" | "Full Stack" | "Backend / Full Stack";
  description: string;
  longDescription: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "currency-converter",
    title: "Currency Converter App",
    category: "Frontend",
    description:
      "A currency converter app that fetches live exchange rates and supports real-time conversion.",
    longDescription:
      "Built with React and a currency exchange API to make currency conversion simple and fast. The app updates exchange rates in real time and focuses on a smooth user experience with a clean, responsive layout.",
    tech: ["React", "JavaScript", "REST API", "CSS"],
    liveUrl: "https://currency-converter-app-fawn.vercel.app/",
    githubUrl: "https://github.com/Edlawit-H/Currency-converter-app.git",
    image: "/images/projects/currency-converter.png",
    featured: true,
  },
  {
    id: "applytrack",
    title: "ApplyTrack – Job Application Tracker",
    category: "Full Stack",
    description:
      "A job tracking platform for managing applications and keeping track of progress.",
    longDescription:
      "Built to help users organize job applications through different stages like applied, interview, and offer. Worked on both the frontend and backend, including authentication, API integration, and storing application data in MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/Edlawit-H/ApplyTrack.git",
    image: "/images/projects/ApplyTrack.png",
    featured: true,
  },
  {
    id: "fuelflow",
    title: "FuelFlow",
    category: "Full Stack",
    description:
      "A queue management system designed for fuel stations and drivers.",
    longDescription:
      "Developed a system for managing fuel station queues and reducing waiting confusion for drivers. The project includes queue tracking, estimated waiting time, role handling for drivers and admins, and logic for recommending nearby stations.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/Edlawit-H/FuelFlow.git",
    image: "/images/projects/FuelFlow.png",
    featured: false,
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Rixi Lab",
    duration: "08/2025 – 09/2025",
    description:
      "Engineered and maintained full-stack web applications using React, Node.js, and Express. Designed and integrated robust RESTful APIs while resolving critical bugs across the frontend and backend systems. Collaborated in an agile environment, actively contributing to the entire feature lifecycle from database schema design to the final UI implementation.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    role: "GDG React Hackathon Participant",
    company: "Google Developer Group",
    duration: "2025",
    description:
      "Participated as a core frontend developer in the React team during a competitive GDG hackathon. Spearheaded the implementation of dynamic, responsive UI components and closely collaborated with cross-functional team members to rapidly prototype and deliver a functional application under strict time constraints.",
    tags: ["React", "Frontend Development", "Team Collaboration"],
  },
  {
    role: "GDG Node.js Hackathon Participant",
    company: "Google Developer Group",
    duration: "2026",
    description:
      "Led critical backend development efforts during a competitive GDG Node.js hackathon. Architected scalable system designs, established MongoDB database schemas, and developed secure RESTful APIs utilizing Express. Conducted rigorous API testing to ensure robust integration and seamless communication between frontend interfaces and the server.",
    tags: ["Node.js", "Express", "MongoDB", "REST APIs", "Backend Development"],
  },
];

// ─── Certificates ─────────────────────────────────────────────────────────────
export interface Certificate {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    title: "ALX Frontend Development Program",
    issuer: "ALX",
    image: "/images/certificates/69-front-end-web-development-certificate-edlawit-abebe.png",
  },
  {
    title: "ALX Professional Foundations",
    issuer: "ALX",
    image: "/images/certificates/89-professional-foundations-certificate-edlawit-abebe.png",
  },
  {
    title: "HerCommerce Hackathon Participation",
    issuer: "HerCommerce",
    image: "/images/certificates/HerCommerce-Hackathon.png",
  },
  {
    title: "GDG React Training Certificate",
    issuer: "Google Developer Group",
    image: "/images/certificates/GDG-React-Edlawit.png",
  },
];
