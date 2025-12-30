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
    subtitle: "A Real-World Project Built from a Real-Life Need!",
    slug: "mealmate",
    description:
      "MealMate is a full-stack web application designed to automate the calculation of shared meal expenses for roommates or small groups. The idea was inspired by a real-life challenge I faced while living with five roommates during my bachelor's studies.",
    fullDescription:
      "As a Computer Science and Engineering student living away from home, I encountered a real-life problem that inspired me to create my website, MealMate. I live with five other roommates, and one day, one of them asked if there was a way to automate the calculation of our meal or food expenses. That moment sparked the idea for MealMate—a solution to help small groups manage shared meal costs more efficiently. With my knowledge of React.js, Node.js, and Express.js, I decided to build the application myself. React's component-based architecture allowed me to structure and manage the frontend efficiently, although I did face some rendering issues during development. For the backend, I created a REST API using Express.js and used MongoDB (NoSQL) as the database. I handled database operations using the Mongoose library. For user authentication, I implemented JWT (JSON Web Tokens) and Passport.js. While I made several mistakes along the way, the project was a great learning experience. It took me around two months to fully develop both the frontend and backend. Personally, I found that frontend state and UI management was more challenging compared to backend development. I deployed the frontend on Vercel, which is well-suited for React applications. However, I found Vercel less optimal for backend services like Express.js, so I deployed the backend on Render. Render works well for Express.js but has a limitation—it puts the server to sleep after 15 minutes of inactivity to save costs. Fortunately, the server responds normally after the first request.",
    image: "/images/project1.png",
    images: [
      "/images/projects/mealmate/mealmate1.png",
      "/images/projects/mealmate/mealmate2.png",
      "/images/projects/mealmate/mealmate3.png",
      "/images/projects/mealmate/mealmate4.png",
      "/images/projects/mealmate/mealmate5.png",
      "/images/projects/mealmate/mealmate6.png",
      "/images/projects/mealmate/mealmate7.png",
      "/images/projects/mealmate/mealmate8.png",
      "/images/projects/mealmate/mealmate9.png",
      "/images/projects/mealmate/mealmate10.png",
      "/images/projects/mealmate/mealmate11.png",
    ],
    link: "/projects/mealmate",
    liveDemo: "https://mealmate-kappa.vercel.app/",
    frontendCode: "https://github.com/ArafathSarker/mealmate-front-end-react",
    backendCode: "https://github.com/ArafathSarker/mealmate-back-end-express",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Passport.js"],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Passport.js", "Vercel", "Render"],
    color: "text-emerald-500",
  },
  {
    title: "Break the Shape",
    subtitle: "A Classic Game Reimagined with Modern Tools!",
    slug: "break-the-shape",
    description:
      "Break the Shape is a 2D arcade-style game built in C++ using the SFML library, inspired by classic brick-breaker mechanics. Players control a paddle to bounce a ball and destroy geometric shapes, with each level increasing in difficulty.",
    fullDescription:
      "I wanted to put my programming skills to the test by building a classic game from scratch. That's how Break the Shape was born: a 2D arcade-style game developed in C++ using the SFML library. In the game, players control a paddle to bounce a ball and break geometric shapes. Each level ramps up in difficulty, keeping the gameplay engaging and dynamic. Unlike tutorials or pre-built engines, I developed the entire game from scratch, which gave me hands-on experience in writing a custom game loop, handling real-time physics, and implementing collision detection. During development, I ran into common game-dev challenges like rendering bugs, collision glitches, and input delays. By diving deep into SFML's documentation and experimenting, I was able to solve these issues and create smooth, responsive gameplay. I applied object-oriented programming (OOP) principles in a practical game development context, mastered event handling, shape rendering, and SFML window management, built and debugged a custom game loop with frame-based timing for smooth controls, and strengthened problem-solving skills by fixing real-time issues in rendering and collision detection.",
    image: "/images/project2.png",
    images: [
      "/images/projects/breakTheShape/breaktheshape1.png",
      "/images/projects/breakTheShape/breaktheshape2.png",
      "/images/projects/breakTheShape/breaktheshape3.png",
      "/images/projects/breakTheShape/breaktheshape4.png",
    ],
    link: "/projects/break-the-shape",
    liveDemo: "https://drive.google.com/file/d/1IvngSIET_n_yESSfT3aO0x85Ry9oISgR/view",
    github: "https://github.com/ArafathSarker/break_the_shape",
    tags: ["C++", "SFML", "Game Dev", "OOP"],
    technologies: ["C++", "SFML", "Object-Oriented Programming", "Game Development"],
    color: "text-green-500",
  },
  {
    title: "Ticket Management System",
    subtitle: "A Console-Based Application for Tracking and Managing Tickets",
    slug: "ticket-management",
    description:
      "The Ticket Management System is a C# console-based application that allows users to create, update, and track tickets in a simple but structured way—similar to the workflow of IT support systems.",
    fullDescription:
      "To improve my skills in C# programming and object-oriented design, I built a Ticket Management System as a console-based application. The goal was to simulate a real-world tool where users can create, update, and track tickets in a simple but structured way—similar to the workflow of IT support systems. The system allows users to add new tickets, view existing ones, update their status, and delete tickets when resolved. Each ticket stores details like ID, title, description, priority, and status, making it easy to manage and organize issues. Since the project was console-based, I had to focus heavily on logic and clean code instead of relying on a graphical interface. One of the main challenges was designing the program in a way that's scalable and maintainable, even though it runs in the console. I applied object-oriented programming principles such as classes, encapsulation, and modular design to keep the code flexible and extendable for future improvements.",
    image: "/images/project3.png",
    images: [
      "/images/projects/ticketManagement/ticket1.png",
      "/images/projects/ticketManagement/ticket2.png",
      "/images/projects/ticketManagement/ticket3.png",
      "/images/projects/ticketManagement/ticket4.png",
      "/images/projects/ticketManagement/ticket5.png",
    ],
    link: "/projects/ticket-management",
    github: "https://github.com/ArafathSarker/management",
    tags: ["C#", "Console App", "OOP"],
    technologies: ["C#", "Object-Oriented Programming", "Console Application"],
    color: "text-emerald-500",
  },
  {
    title: "DriveX",
    subtitle: "Premium Car Rental Platform with Admin Management",
    slug: "drivex",
    description:
      "DriveX is a modern car rental platform that allows users to browse and rent their favorite vehicles online. Built with PHP, MySQL, and Tailwind CSS, it features a comprehensive admin panel and secure session handling.",
    fullDescription:
      "DriveX is a full-featured car rental web application designed to make vehicle booking seamless and efficient. The platform allows users to browse through a catalog of available cars, view detailed specifications, and book their preferred vehicles for rental. Built using PHP for the backend and MySQL for database management, the application implements robust session handling for user authentication and secure access control. The frontend is crafted with Tailwind CSS, providing a modern, responsive interface that works flawlessly across all devices. One of the key features is the comprehensive admin panel, which enables administrators to manage the car inventory, track bookings, handle user accounts, and monitor rental transactions in real-time. The admin dashboard provides insights into rental statistics and helps streamline operations. The application uses prepared statements and parameterized queries to prevent SQL injection attacks, ensuring data security. Throughout development, I gained hands-on experience in PHP session management, SQL database design with proper relationships between tables (users, cars, bookings), and creating dynamic, data-driven web pages. The project taught me valuable lessons about server-side programming, database optimization, and building secure authentication systems.",
    image: "/images/driveX/ss1.png",
    images: [
      "/images/driveX/ss1.png",
      "/images/driveX/ss2.png",
      "/images/driveX/ss3.png",
      "/images/driveX/ss4.png",
      "/images/driveX/ss5.png",
      "/images/driveX/ss6.png",
      "/images/driveX/ss7.png",
      "/images/driveX/ss8.png",
      "/images/driveX/ss9.png",
      "/images/driveX/ss10.png",
      "/images/driveX/ss11.png",
      "/images/driveX/ss12.png",
      "/images/driveX/ss13.png",
    ],
    link: "/projects/drivex",
    liveDemo: "https://drivex.ct.ws/",
    github: "https://github.com/ArafathSarker/DriveX-Project",
    tags: ["PHP", "MySQL", "Tailwind CSS", "Admin Panel"],
    technologies: ["PHP", "MySQL", "SQL", "Tailwind CSS", "Session Handling", "Authentication"],
    color: "text-cyan-500",
  },
  {
    title: "EvaHandCraft",
    subtitle: "Elegant E-Commerce Platform for Handcrafted Products",
    slug: "evahandcraft",
    description:
      "EvaHandCraft is a specialized e-commerce website designed for women to discover and purchase unique handcrafted products. Built with PHP, MySQL, and Tailwind CSS, it features category management, secure authentication, and a full admin panel.",
    fullDescription:
      "EvaHandCraft is a fully functional e-commerce platform tailored specifically for women who appreciate handcrafted and artisanal products. The website provides an elegant shopping experience where customers can browse through various categories of handmade items, view detailed product information, and make secure purchases. The backend is powered by PHP with MySQL database management, implementing a robust authentication system that ensures user data security and privacy. The platform features a comprehensive admin panel that allows store managers to manage product inventory, organize items into categories, track orders, handle customer inquiries, and monitor sales analytics. Admins can easily add, edit, or remove products, upload product images, and manage stock levels. The frontend is built with Tailwind CSS, creating a beautiful, responsive design that provides an optimal viewing experience across desktop, tablet, and mobile devices. The site implements secure session management and password hashing for user accounts, along with SQL injection protection through prepared statements. Shopping cart functionality allows users to add multiple items, review their selections, and proceed to checkout seamlessly. During this project, I deepened my understanding of e-commerce workflows, payment integration concepts, inventory management systems, and the importance of creating user-friendly interfaces for online shopping. The project challenged me to think about scalability, security, and creating an intuitive user experience that converts visitors into customers.",
    image: "/images/evaHandCraft/ss1.png",
    images: [
      "/images/evaHandCraft/ss1.png",
      "/images/evaHandCraft/ss2.png",
      "/images/evaHandCraft/ss3.png",
      "/images/evaHandCraft/ss4.png",
      "/images/evaHandCraft/ss5.png",
      "/images/evaHandCraft/ss6.png",
      "/images/evaHandCraft/ss7.png",
      "/images/evaHandCraft/ss8.png",
      "/images/evaHandCraft/ss9.png",
      "/images/evaHandCraft/ss10.png",
    ],
    link: "/projects/evahandcraft",
    liveDemo: "https://evahandcraft.gt.tc/",
    github: "https://github.com/ArafathSarker/handCraftProject",
    tags: ["PHP", "MySQL", "E-Commerce", "Tailwind CSS"],
    technologies: ["PHP", "MySQL", "SQL", "Tailwind CSS", "Authentication", "Admin Panel", "E-Commerce"],
    color: "text-pink-500",
  },
  {
    title: "RoomFinder",
    subtitle: "Smart Room Rental Platform for Students & Professionals",
    slug: "roomfinder",
    description:
      "RoomFinder is a comprehensive room rental platform that connects landlords with tenants. Built with PHP, MySQL, and Tailwind CSS, it features secure authentication, property listings, and an admin panel for managing rental operations.",
    fullDescription:
      "RoomFinder addresses a common challenge faced by students and young professionals: finding affordable and suitable accommodation. This web-based platform serves as a bridge between property owners and those seeking rental rooms, making the search and booking process straightforward and efficient. The application is built using PHP for server-side logic and MySQL for database management, handling complex relationships between users, properties, bookings, and reviews. The platform features a dual-user system where landlords can list their available rooms with detailed descriptions, photos, pricing, and amenities, while tenants can search, filter, and book rooms based on their preferences such as location, budget, and room type. The authentication system ensures that only verified users can post listings or make bookings, with separate dashboards for landlords and tenants. The admin panel provides oversight of all platform activities, allowing administrators to moderate listings, resolve disputes, manage user accounts, and ensure quality control across the platform. Built with Tailwind CSS, the interface is clean, modern, and fully responsive, ensuring a seamless experience whether users are browsing on desktop or mobile devices. Security features include session-based authentication, password encryption, input validation, and SQL injection protection. During development, I learned valuable lessons about multi-user role management, complex database queries with JOINs for fetching related data, image upload and storage handling, and creating intuitive search and filter functionality. The project enhanced my skills in building real-world applications that solve practical problems while maintaining security and scalability.",
    image: "/images/roomFinder/ss1.png",
    images: [
      "/images/roomFinder/ss1.png",
      "/images/roomFinder/ss2.png",
      "/images/roomFinder/ss3.png",
      "/images/roomFinder/ss4.png",
      "/images/roomFinder/ss5.png",
      "/images/roomFinder/ss6.png",
      "/images/roomFinder/ss7.png",
      "/images/roomFinder/ss8.png",
      "/images/roomFinder/ss9.png",
      "/images/roomFinder/ss10.png",
      "/images/roomFinder/ss11.png",
      "/images/roomFinder/ss12.png",
      "/images/roomFinder/ss13.png",
      "/images/roomFinder/ss14.png",
    ],
    link: "/projects/roomfinder",
    liveDemo: "https://roomfinder.ct.ws/",
    github: "https://github.com/ArafathSarker/UniversityPhpProject",
    tags: ["PHP", "MySQL", "Rental Platform", "Tailwind CSS"],
    technologies: ["PHP", "MySQL", "SQL", "Tailwind CSS", "Authentication", "Admin Panel", "Session Management"],
    color: "text-blue-500",
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
