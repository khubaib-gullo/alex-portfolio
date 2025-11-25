import { Experience, Education, Project, Service, Testimonial, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Alex Morgan",
  title: "Creative Developer & UI Designer",
  email: "hello@alexmorgan.dev",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  age: "26",
  residence: "USA",
  freelance: "Available",
  address: "San Francisco, CA 94043",
  bio: "I am a creative developer with a passion for building beautiful, functional, and user-centered digital experiences. With over 5 years of experience in full-stack development and UI design, I bridge the gap between engineering and aesthetics.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable websites using modern technologies like React, TypeScript, and Node.js.",
    icon: "code"
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that prioritize user experience and brand identity.",
    icon: "palette"
  },
  {
    title: "Mobile Apps",
    description: "Developing cross-platform mobile applications that provide seamless experiences on iOS and Android devices.",
    icon: "smartphone"
  },
  {
    title: "SEO Optimization",
    description: "Optimizing websites for search engines to improve visibility and drive organic traffic.",
    icon: "search"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description: "Leading the frontend team in rebuilding the core product dashboard using React and Tailwind. Improved performance by 40%."
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Creative Agency X",
    period: "2019 - 2021",
    description: "Developed custom e-commerce solutions for various clients. Integrated payment gateways and managed headless CMS setups."
  },
  {
    id: "3",
    role: "Junior Web Designer",
    company: "StartUp Inc",
    period: "2018 - 2019",
    description: "Designed marketing materials and assisted in the development of the company website using HTML/CSS and JavaScript."
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Computer Science",
    school: "University of Technology",
    period: "2014 - 2018",
    description: "Focused on Software Engineering and Human-Computer Interaction. Graduated with Honors."
  },
  {
    id: "2",
    degree: "UI/UX Design Certification",
    school: "Design Academy",
    period: "2018",
    description: "Intensive bootcamp focusing on user research, wireframing, prototyping, and visual design principles."
  },
  {
    id: "3",
    degree: "Full Stack Web Development",
    school: "Code Camp",
    period: "2017",
    description: "Specialized course in MERN stack development and modern web architecture."
  }
];

export const SKILLS: Skill[] = [
  { name: "React / React Native", percentage: 90, category: "Code" },
  { name: "TypeScript / JavaScript", percentage: 85, category: "Code" },
  { name: "Node.js", percentage: 75, category: "Code" },
  { name: "Tailwind CSS", percentage: 95, category: "Code" },
  { name: "UI/UX Design", percentage: 80, category: "Design" },
  { name: "Figma", percentage: 85, category: "Design" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    category: "Development",
    image: "https://picsum.photos/600/400?random=1",
    link: "#"
  },
  {
    id: "2",
    title: "Brand Identity - Zenith",
    category: "Design",
    image: "https://picsum.photos/600/400?random=2",
    link: "#"
  },
  {
    id: "3",
    title: "Fitness Tracker App",
    category: "Development",
    image: "https://picsum.photos/600/400?random=3",
    link: "#"
  },
  {
    id: "4",
    title: "Social Media Campaign",
    category: "Marketing",
    image: "https://picsum.photos/600/400?random=4",
    link: "#"
  },
  {
    id: "5",
    title: "Crypto Wallet UI",
    category: "Design",
    image: "https://picsum.photos/600/400?random=5",
    link: "#"
  },
  {
    id: "6",
    title: "Travel Blog Platform",
    category: "Development",
    image: "https://picsum.photos/600/400?random=6",
    link: "#"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    text: "Alex is an incredible developer. He understood our vision perfectly and delivered a product that exceeded our expectations.",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    text: "Working with Alex was a breeze. His attention to detail and design skills are top-notch.",
    avatar: "https://picsum.photos/100/100?random=11"
  }
];