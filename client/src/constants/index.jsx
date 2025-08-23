export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Courses", href: "#courses" },
  { label: "Events", href: "#events" },
  { label: "Mentors", href: "#mentors" },
  { label: "Orders", href: "#orders" },
  { label: "Contact", href: "#contact" },
];

// Products data
export const products = [
  {
    id: 1,
    name: "Arduino Mega 2560",
    description: "High-performance microcontroller board with 54 digital pins",
    price: "Rs. 2,500",
    image: "arduino-mega-2560-r3-with-ch340-driver-usb-cable.jpg",
    category: "Microcontrollers"
  },
  {
    id: 2,
    name: "Arduino Uno R3",
    description: "Perfect starter board for robotics and electronics projects",
    price: "Rs. 1,200",
    image: "arduino.png",
    category: "Microcontrollers"
  },
  {
    id: 3,
    name: "NodeMCU ESP8266",
    description: "WiFi enabled microcontroller for IoT projects",
    price: "Rs. 800",
    image: "nodemcu.png",
    category: "IoT Boards"
  },
  {
    id: 4,
    name: "Raspberry Pi 4",
    description: "Single-board computer for advanced robotics projects",
    price: "Rs. 8,500",
    image: "pi.png",
    category: "Single Board Computers"
  },
  {
    id: 5,
    name: "Micro:bit",
    description: "Educational microcontroller perfect for beginners",
    price: "Rs. 3,200",
    image: "microbit.png",
    category: "Educational"
  },
  {
    id: 6,
    name: "L298N Motor Driver",
    description: "Dual H-bridge motor driver for controlling DC motors",
    price: "Rs. 450",
    image: "l298n.png",
    category: "Motor Drivers"
  },
  {
    id: 7,
    name: "Robot Chassis Kit",
    description: "Complete chassis kit for building mobile robots",
    price: "Rs. 1,800",
    image: "chassis.png",
    category: "Chassis & Frames"
  },
  {
    id: 8,
    name: "Complete Robot Kit",
    description: "All-in-one robot building kit with sensors and actuators",
    price: "Rs. 5,500",
    image: "robot.png",
    category: "Complete Kits"
  }
];

// Courses data
export const courses = [
  {
    id: 1,
    title: "Arduino Programming Fundamentals",
    description: "Learn the basics of Arduino programming and electronics",
    duration: "4 weeks",
    price: "Rs. 8,000",
    level: "Beginner",
    image: "course1.png",
    topics: ["Basic Electronics", "Arduino IDE", "Sensors & Actuators", "Project Building"]
  },
  {
    id: 2,
    title: "Advanced Robotics with ROS",
    description: "Master Robot Operating System and build autonomous robots",
    duration: "8 weeks",
    price: "Rs. 15,000",
    level: "Advanced",
    image: "course2.jpg",
    topics: ["ROS Navigation", "SLAM", "Computer Vision", "AI Integration"]
  },
  {
    id: 3,
    title: "IoT with ESP32/NodeMCU",
    description: "Build Internet of Things projects with WiFi microcontrollers",
    duration: "6 weeks",
    price: "Rs. 12,000",
    level: "Intermediate",
    image: "0005.jpg",
    topics: ["WiFi Programming", "Cloud Integration", "Sensor Networks", "Mobile Apps"]
  },
  {
    id: 4,
    title: "Line Following Robot",
    description: "Build and program autonomous line following robots",
    duration: "3 weeks",
    price: "Rs. 6,000",
    level: "Beginner",
    image: "LFC.jpg",
    topics: ["IR Sensors", "PID Control", "Motor Control", "Algorithm Design"]
  }
];

// Past events data
export const pastEvents = [
  {
    id: 1,
    title: "Robotics Workshop 2024",
    date: "March 15, 2024",
    description: "Hands-on workshop on building line following robots",
    image: "0001.jpg",
    participants: 45,
    location: "Kathmandu Tech Hub"
  },
  {
    id: 2,
    title: "IoT Bootcamp",
    date: "January 20, 2024",
    description: "3-day intensive bootcamp on IoT development",
    image: "0002.jpg",
    participants: 30,
    location: "Nepal Engineering College"
  },
  {
    id: 3,
    title: "Arduino Competition",
    date: "November 10, 2023",
    description: "Inter-college Arduino programming competition",
    image: "0003.jpg",
    participants: 60,
    location: "Pulchowk Campus"
  },
  {
    id: 4,
    title: "Robotics Exhibition",
    date: "September 5, 2023",
    description: "Showcase of innovative robotics projects",
    image: "0004.jpg",
    participants: 120,
    location: "Bhrikutimandap"
  },
  {
    id: 5,
    title: "Green Tech Workshop",
    date: "August 12, 2023",
    description: "Sustainable technology and green robotics",
    image: "Green1.jpg",
    participants: 25,
    location: "Lalitpur Engineering College"
  },
  {
    id: 6,
    title: "Horizontal Robotics Demo",
    date: "July 8, 2023",
    description: "Demonstration of horizontal movement robots",
    image: "Hor1.jpg",
    participants: 35,
    location: "IOE Central Campus"
  }
];

// Mentor data
export const mentors = [
  {
    id: 1,
    name: "Aatiz Ghimire",
    role: "Lead Robotics Engineer & Founder",
    bio: "Passionate robotics engineer with 8+ years of experience in embedded systems and autonomous robotics. Expert in Arduino, ROS, and AI integration.",
    image: "aatiz.jpg",
    expertise: ["Robotics", "Embedded Systems", "AI", "IoT"],
    education: "M.Sc. Robotics Engineering",
    social: {
      linkedin: "https://linkedin.com/in/aatizghimire",
      github: "https://github.com/aatizghimire",
      email: "aatiz@nepaltechrobotics.com"
    }
  }
];

// Social media links
export const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/nepaltechrobotics",
    icon: "facebook"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/nepaltechrobotics",
    icon: "instagram"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@nepaltechrobotics",
    icon: "youtube"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/nepaltechrobotics",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/nepaltechrobotics",
    icon: "github"
  }
];

// Footer links
export const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#mentors" },
    { label: "Careers", href: "#careers" },
    { label: "Press", href: "#press" }
  ],
  products: [
    { label: "Arduino Boards", href: "#products" },
    { label: "Sensors", href: "#products" },
    { label: "Robot Kits", href: "#products" },
    { label: "IoT Devices", href: "#products" }
  ],
  education: [
    { label: "Courses", href: "#courses" },
    { label: "Workshops", href: "#events" },
    { label: "Tutorials", href: "#tutorials" },
    { label: "Certification", href: "#certification" }
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "Help Center", href: "#help" },
    { label: "Documentation", href: "#docs" },
    { label: "Community", href: "#community" }
  ]
};

// Contact information
export const contactInfo = {
  address: "Kathmandu, Nepal",
  phone: "+977-9841234567",
  email: "info@nepaltechrobotics.com",
  hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM"
};