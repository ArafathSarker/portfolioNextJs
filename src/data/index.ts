import { Github, Linkedin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";

export const personalInfo = {
  name: "Arafath Sarker",
  title: "MERN Stack Developer And AI Enthusiast",
  bio: "CSE student passionate about AI & Machine Learning, building intelligent and impactful systems. Skilled in full-stack web development, blending software engineering with smart solutions. Open to collaboration on challenging projects — let's innovate together!",
  email: "arafathmd432@gmail.com",
  phone: "01235678900",
  address: "Cumilla Cantonment, Cumilla",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arafath-sarker/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/ArafathSarker", // Assuming this based on repo URL
      icon: Github,
    },
    {
      name: "Email",
      url: "mailto:arafathmd432@gmail.com",
      icon: Mail,
    },
  ],
};

export const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 82 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 78 },
  { name: "MongoDB", level: 75 },
  { name: "MERN Stack", level: 80 },
  { name: "SQL / PostgreSQL", level: 70 },
  { name: "Git & GitHub", level: 85 },
  { name: "C++", level: 80 },
  { name: "Python", level: 75 },
  { name: "jQuery", level: 70 },
];

export const projects = [
  {
    title: "MealMate",
    subtitle: "Shared Meal Expense Tracker",
    description:
      "MealMate is a full-stack web application designed to automate the calculation of shared meal expenses for roommates or small groups. The idea was inspired by a real-life challenge I faced while living with five roommates during my bachelor's studies.",
    image: "/images/project1.png",
    link: "/projects/mealmate", // We will create detail pages or modals
    tags: ["Full Stack", "Web App"],
    color: "text-emerald-500",
  },
  {
    title: "Break the Shape",
    subtitle: "2D Game (C++ with SFML)",
    description:
      "Break the Shape is a 2D arcade-style game built in C++ using the SFML library, inspired by classic brick-breaker mechanics. Players control a paddle to bounce a ball and destroy geometric shapes, with each level increasing in difficulty.",
    image: "/images/project2.png",
    link: "/projects/break-the-shape",
    tags: ["C++", "SFML", "Game Dev"],
    color: "text-green-500",
  },
  {
    title: "Ticket Management System",
    subtitle: "Movie Booking Application",
    description:
      "The Ticket Management System is a C# console-based application that allows users to book movie tickets, view available showtimes, and check seat availability in real time.",
    image: "/images/project3.png",
    link: "/projects/ticket-management",
    tags: ["C#", "Console App"],
    color: "text-emerald-500",
  },
];

export const achievements = [
  {
    title: "2nd Place – Intra-University Programming Contest",
    issuer: "Uttara University",
    date: "Jun 2024",
    description:
      "Awarded 2nd place among 20 teams in an intra-university programming contest focused on algorithmic problem-solving, data structures, and competitive coding.",
    image: "/images/achievements/award.jpeg",
    logo: "/images/achievements/uulogo.jpeg",
    placement: "2nd Place",
  },
  {
    title: "Dean's Honor Award",
    issuer: "Uttara University",
    date: "2025",
    description:
      "Recognized with the Dean's Honor Award for outstanding academic performance and excellence in the field of Computer Science and Engineering.",
    image: "/images/achievements/deansAward.jpeg",
    logo: "/images/achievements/uulogo.jpeg",
  },
];

export const certificates = [
  {
    title: "Book Reading Competition 2024",
    issuer: "UTTARA UNIVERSITY",
    image: "/images/certificates/cert1.png",
  },
  {
    title: "Intra-University Programming Contest 2024",
    issuer: "UTTARA UNIVERSITY",
    image: "/images/certificates/cert2.png",
  },
  {
    title: "Business Case Study of National Innovation Competition 2024",
    issuer: "IUBAT",
    image: "/images/certificates/cert3.png",
  },
  {
    title: "Dean's Honor Award",
    issuer: "UTTARA UNIVERSITY",
    image: "/images/certificates/deansCertificate.jpeg",
  },
];
