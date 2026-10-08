import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  badgeIU,
  badgeOibsip,
  badgeFreelance,
  zemenErp,
  begimidirDental,
  poultryFarm,
  theRegistrar,
  pizzaDelivery,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "MERN Stack Engineer",
    icon: backend,
  },
  {
    title: "ERP / Business Systems",
    icon: mobile,
  },
  {
    title: "Localized Web Apps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Student",
    company_name: "Injibara University",
    icon: badgeIU,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Studying software engineering with a focus on full-stack web development and system design.",
      "Building production-style projects (ERPs, business systems, localized apps) alongside coursework.",
      "Applying MERN stack fundamentals — React, Node.js, Express, MongoDB — to real-world problems.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "OIBSIP",
    icon: badgeOibsip,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Delivered a full MERN pizza delivery app: JWT auth, Razorpay test-mode payments, and a 4-step interactive pizza builder.",
      "Built a real-time-feel order tracker using polling and admin low-stock alerts via node-cron.",
      "Completed a set of vanilla JS fundamentals projects — calculator, to-do app, login system, tribute page.",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company_name: "Self-Employed",
    icon: badgeFreelance,
    iconBg: "#383E56",
    date: "2023 - Now",
    points: [
      "Design and ship full-stack ERP and business systems for Ethiopian clients — payroll, dental clinics, farming, and student records.",
      "Implement Ethiopian statutory compliance (PAYE, pension, overtime) with ETB currency and local payment methods (Telebirr, CBE).",
      "Own the full lifecycle: backend APIs, database modeling, auth/RBAC, React or vanilla JS frontends, and deployment-ready builds.",
    ],
  },
];

const highlights = [
  {
    testimonial:
      "Every ETB figure in the payroll engine traces back to an actual Ethiopian labour proclamation — not a rough guess.",
    name: "Zemen ERP",
    designation: "Payroll & HR",
    company: "MERN + Statutory Compliance",
    image: zemenErp,
  },
  {
    testimonial:
      "From an interactive FDI tooth chart to Telebirr payments, this ERP is built to run in a real clinic, not just a demo.",
    name: "Begimidir Dental ERP",
    designation: "Clinic Management",
    company: "Node/Express + RBAC",
    image: begimidirDental,
  },
  {
    testimonial:
      "A 4-step SVG pizza builder, live order tracking, and Razorpay checkout — shipped end-to-end under a real internship deadline.",
    name: "Pizza Delivery App",
    designation: "OIBSIP Internship",
    company: "MERN + Razorpay",
    image: pizzaDelivery,
  },
];

const projects = [
  {
    name: "Zemen ERP",
    description:
      "Enterprise ERP platform with a full Payroll & HR module: employee, attendance, and leave management, a payroll calculation engine, PDF payslip generation, and Ethiopian statutory compliance (PAYE, pension, overtime).",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "rbac", color: "pink-text-gradient" },
    ],
    image: zemenErp,
    source_code_link: "https://github.com/MAVIVO1",
  },
  {
    name: "Begimidir Dental ERP",
    description:
      "Production dental clinic ERP with role-based access for admins, doctors, receptionists, and pharmacists, an interactive FDI/Universal tooth chart, Ethiopian regional fields, ETB pricing, and Telebirr/CBE payment methods.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "sqlite", color: "green-text-gradient" },
      { name: "rbac", color: "pink-text-gradient" },
    ],
    image: begimidirDental,
    source_code_link: "https://github.com/MAVIVO1",
  },
  {
    name: "Poultry Farm Manager",
    description:
      "Full-stack farm management app with flock batches, health/feed/egg logs, sales analytics, and a cart-based checkout flow with cash-on-delivery, built on a React/Vite frontend and a Node/Express + SQLite backend.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "jwt", color: "pink-text-gradient" },
    ],
    image: poultryFarm,
    source_code_link: "https://github.com/MAVIVO1",
  },
  {
    name: "The Registrar",
    description:
      "Recruiter-facing student information system with a dual-view roster (card catalog + ledger), an animated SVG GPA gauge, full CRUD with modals, CSV export, and a navy/parchment/brass design system.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "localstorage", color: "green-text-gradient" },
      { name: "svg", color: "pink-text-gradient" },
    ],
    image: theRegistrar,
    source_code_link: "https://github.com/MAVIVO1",
  },
  {
    name: "Pizza Delivery App",
    description:
      "MERN pizza ordering platform built for the OIBSIP internship: JWT auth, Razorpay test-mode payments, a 4-step interactive pizza builder, a polling-based live order tracker, and admin panels with low-stock alerts.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "razorpay", color: "green-text-gradient" },
      { name: "vite", color: "pink-text-gradient" },
    ],
    image: pizzaDelivery,
    source_code_link: "https://github.com/MAVIVO1",
  },
];

export { services, technologies, experiences, highlights, projects };
