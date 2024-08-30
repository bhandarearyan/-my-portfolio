import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I’m a tech enthusiast with hands-on experience in cloud computing and web development. I’ve built dynamic websites and managed cloud infrastructure on AWS, focusing on efficiency and performance. Solving real-world problems drives me, like when I developed a Blood Bank Management System and worked on Bitcoin Price Prediction.

Through internships at top companies, I’ve sharpened my technical skills, led teams, and successfully managed projects. Please feel free to contact me via Linkedin. I’m always looking forward to an insightful conversation over coffee, or even better, a round of skydiving!`;

export const ABOUT_TEXT = `I’m a computer engineer with a passion for creating solutions that drive real impact. I’ve explored cloud computing and web development extensively, working on projects that bring efficiency and purpose to life. My internship experiences taught me the value of leadership and adaptability. I’ve guided teams, navigated tight deadlines, and always sought to go the extra mile. Learning doesn’t stop for me; I’m always looking to sharpen my skill set, driven by a constant curiosity and a desire to innovate. Excellent in presenting and make people understand.

I love to travel and I often plan trips with my family. But solo travelling gives me the bliss that I crave for. Every year I look forward to exploring new places and catching up on some lifetime memories.`;

export const EXPERIENCES = [
  {
    year: "June 2020- July 2020",
    role: "Web Intern",
    company: "Insys Technologies",
    description: `Developed and implemented visually engaging, mobile-friendly websites using HTML, CSS, JavaScript, and PHP. Leveraged REST APIs to seamlessly integrate and display dynamic content from backend databases, ensuring an intuitive user experience. Gained expertise in AJAX to boost site responsiveness and interactivity, enabling real-time data updates without disrupting the user interface.`,
    technologies: ["HTML5", "CSS3", "Php", "JavaScript", "Ajax", "Rest API"],
  },
  {
    year: "June 2022 - July 2022",
    role: "SDE Intern",
    company: "Octaware Technologies",
    description: `Gained hands-on experience in Microsoft PowerApps, developing custom business applications. Learned the SDLC lifecycle through mentor-led training, focusing on each phase of development. Managed a team to analyze requirements and create an SRS for the Vendor Management System, ensuring the solution met the company’s needs.`,
    technologies: ["SDLC", "Microsoft PowerApps"],
  },
  {
    year: "January 2023 - February 2023",
    role: "Cloud Intern",
    company: "Yhills Edutech",
    description: `Developed and managed cloud infrastructure on AWS, with a strong focus on services like EC2, S3, SQS,
SNS and Lambda. Deployed dynamic websites using a combination of AWS resources, ensuring high
availability and performance. Additionally, applied best practices in cloud security, monitoring, and
cost management to optimize cloud environments effectively`,
    technologies: ["AWS", "EC2", "S3", "Load Balancer", "RDS", "SQS", "SNS"],
  },
];

// data/education.js
export const EDUCATION = [
  {
    institution: "Terna Engineering College, Mumbai",
    period: "(2021 - 2024)",
    degree: "Bachelor of Engineering in Computer Engineering",
    gpa: "CGPA: 7.8"
  },
  {
    institution: "Vivekananda Educational Society Polytechnic, Mumbai",
    period: "(2018 - 2021)",
    degree: "Diploma in Computer Engineering",
    gpa: "92.46%"
  },
  {
    institution: "Swami Vivekanand High School, Mumbai",
    period: "(2008 - 2018)",
    degree: "SSC",
    gpa: "83%"
  }
];


export const PROJECTS = [
  {
    title: "E-Learning Portal",
    image: project1,
    description:
      "Built a user-friendly E-Learning Portal for efficient access to educational resources and courses.",
    technologies: ["HTML5", "CSS3", "Boostrap", "Php", "Javascript","MySql"],
  },
  {
    title: "Gearup Sport’s Android Application",
    image: project2,
    description:
      "Created an Android app for Gearup Sport, offering users easy access to sports equipment and training resources.",
    technologies: ["Android Studio", "Java", "Php", "MySql"],
  },
  {
    title: "Bitcoin Price Prediction",
    image: project3,
    description:
      "Developed a model to predict Bitcoin prices using historical data and machine learning techniques.",
    technologies: ["Python", "Google Collab"],
  },
  {
    title: "Blood Bank Management System",
    image: project4,
    description:
      "Created a solution to simplify donor management and enhance the coordination of blood donations.",
    technologies: ["HTML", "CSS", "Php", "MySql", "Hosted on AWS using 4 Resources"],
  },
];

export const CONTACT = {
  address: "Kurla (E), Mumbai-400024 ",
  phoneNo: "+91 8452936420",
  email: "bhandarearyan@gmail.com",
};
