export interface Project {
  id: number;
  imagePath: string;
  title: string;
  description: string;
  gitUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern Dashboard UI",
    imagePath: "/images/p1.webp",
    description:
      "A reponsive admin dashboard with data visualization charts, use management, and real-time analytics. Build with React, Tailwind CSS, and Recharts.",
    gitUrl: "https://github.com/huanhoccode24/TodoX.git",
  },
  {
    id: 2,
    title: "Modern Dashboard UI",
    imagePath: "/images/p1.webp",
    description:
      "A reponsive admin dashboard with data visualization charts, use management, and real-time analytics. Build with React, Tailwind CSS, and Recharts.",
    gitUrl: "https://github.com/huanhoccode24/TodoX.git",
  },
  {
    id: 3,
    title: "Modern Dashboard UI",
    imagePath: "/images/p1.webp",
    description:
      "A reponsive admin dashboard with data visualization charts, use management, and real-time analytics. Build with React, Tailwind CSS, and Recharts.",
    gitUrl: "https://github.com/huanhoccode24/TodoX.git",
  },
  {
    id: 4,
    title: "Modern Dashboard UI",
    imagePath: "/images/p1.webp",
    description:
      "A reponsive admin dashboard with data visualization charts, use management, and real-time analytics. Build with React, Tailwind CSS, and Recharts.",
    gitUrl: "https://github.com/huanhoccode24/TodoX.git",
  },
];
