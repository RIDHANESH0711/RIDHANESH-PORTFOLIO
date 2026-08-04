import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Brain,
  Eye,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Sparkles,
  Cpu,
  Bot,
  type LucideIcon,
} from 'lucide-react';
import { SiPython, SiMysql, SiGit, SiGithub } from 'react-icons/si';
import { FaJava, FaC } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

export const personal = {
  name: 'RIDHANESH T',
  role: 'Artificial Intelligence & Data Science Student',
  headline: 'Building Intelligent Solutions with Artificial Intelligence',
  about:
    'I am a passionate B.Tech Artificial Intelligence & Data Science student at VSB Engineering College. I enjoy solving real-world problems using Artificial Intelligence and continuously improving my programming and problem-solving skills.',
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Computer Vision',
    'Java Programming',
    'Software Development',
    'Agentic AI',
  ],
  goal: 'Become an AI Engineer and build impactful AI products.',
  location: 'Tiruppur, Tamil Nadu, India',
  college: 'VSB Engineering College',
  university: 'Anna University',
  degree: 'Bachelor of Technology',
  department: 'Artificial Intelligence & Data Science',
  cgpa: '7.55',
  graduation: 'March 2029',
  email: 'ridhan0711@gmail.com',
  phone: '+91 8925633994',
  github: 'https://github.com/RIDHANESH0711',
  linkedin: 'https://www.linkedin.com/in/ridhanesh-t-286092424',
  resume: '/Ridhanesh_T_Resume.pdf',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Internship', href: '#internship' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const typingRoles = [
  'Artificial Intelligence Student',
  'Machine Learning Enthusiast',
  'Computer Vision Developer',
  'Java Programmer',
  'Future AI Engineer',
];

export const stats = [
  { label: 'Current CGPA', value: 7.55, suffix: '', decimals: 2 },
  { label: 'Projects', value: 5, suffix: '+', decimals: 0 },
  { label: 'Internship', value: 1, suffix: '', decimals: 0 },
  { label: 'GitHub Repos', value: 10, suffix: '+', decimals: 0 },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: { name: string; icon: IconType; color: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code2,
    color: 'from-purple-500 to-indigo-500',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#E76F00' },
      { name: 'C', icon: FaC, color: '#5C6BC0' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#00758F' },
      { name: 'SQL', icon: SiMysql, color: '#00758F' },
    ],
  },
  {
    title: 'Artificial Intelligence',
    icon: Brain,
    color: 'from-fuchsia-500 to-purple-500',
    skills: [
      { name: 'Machine Learning', icon: Cpu, color: '#a855f7' },
      { name: 'Computer Vision', icon: Eye, color: '#3b82f6' },
      { name: 'Face Recognition', icon: Sparkles, color: '#22d3ee' },
    ],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    color: 'from-cyan-500 to-teal-500',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'VS Code', icon: Code2, color: '#0098FF' },
    ],
  },
  {
    title: 'Core Subjects',
    icon: GraduationCap,
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Object Oriented Programming', icon: Code2, color: '#6366f1' },
      { name: 'Database Management Systems', icon: Database, color: '#0ea5e9' },
      { name: 'Problem Solving', icon: Cpu, color: '#a855f7' },
    ],
  },
  {
    title: 'Currently Learning',
    icon: Bot,
    color: 'from-violet-500 to-fuchsia-500',
    skills: [
      { name: 'Data Structures', icon: Cpu, color: '#8b5cf6' },
      { name: 'Algorithms', icon: Cpu, color: '#a855f7' },
      { name: 'LangGraph', icon: Bot, color: '#22d3ee' },
      { name: 'LLMs', icon: Brain, color: '#3b82f6' },
      { name: 'Agentic AI', icon: Bot, color: '#d946ef' },
    ],
  },
];

export const featuredProject = {
  title: 'Smart Attendance System using Face Recognition',
  description:
    'Developed an AI-powered attendance management system that automatically recognizes registered students using facial recognition technology and stores attendance records in a MySQL database.',
  features: [
    'Student Registration',
    'Face Detection',
    'Face Recognition',
    'Automatic Attendance',
    'Attendance History',
    'MySQL Integration',
    'Computer Vision',
    'Fast Recognition',
  ],
  techStack: ['Python', 'OpenCV', 'Face Recognition Library', 'MySQL', 'Git', 'GitHub'],
  github: 'https://github.com/RIDHANESH0711',
  liveDemo: '#',
};

export const internship = {
  company: 'Brainery Spot Technology',
  role: 'Web Development Intern',
  description:
    'Completed a Web Development Internship at Brainery Spot Technology, where I gained practical exposure to software development workflows, collaborated on project-based learning, improved problem-solving skills, and enhanced my understanding of modern web application development through guided mentorship.',
  certificate: '#',
};

export const certifications = [
  {
    title: 'Introduction to AI & ChatGPT',
    platform: 'Online Learning Platform',
    link: '#',
  },
  {
    title: 'Programming Fundamentals using Python',
    platform: 'Online Learning Platform',
    link: '#',
  },
  {
    title: 'Basics of Python',
    platform: 'Online Learning Platform',
    link: '#',
  },
];

export const contactItems = [
  { label: 'Phone', value: '+91 8925633994', icon: Phone, href: 'tel:+918925633994' },
  { label: 'Email', value: 'ridhan0711@gmail.com', icon: Mail, href: 'mailto:ridhan0711@gmail.com' },
  { label: 'Location', value: 'Tiruppur, Tamil Nadu, India', icon: MapPin, href: '#' },
  { label: 'GitHub', value: 'github.com/RIDHANESH0711', icon: Github, href: 'https://github.com/RIDHANESH0711' },
  { label: 'LinkedIn', value: 'in/ridhanesh-t', icon: Linkedin, href: 'https://www.linkedin.com/in/ridhanesh-t-286092424' },
];
