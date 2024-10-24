import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Sanskar Upadhyay",
  title: "Hi all, I'm Sanskar Upadhyay",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 skilled in MERN stack, web development, and UI/UX design with Figma. Experienced in both frontend and backend development with a strong foundation in DevOps practices."
  ),
  resumeLink: "https://drive.google.com/file/d/1GSZjIFCca_g-b-GlUlvx1_jZEG4wrjXf/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/sanskarupa2003",
  linkedin: "https://linkedin.com/in/sanskarupadhyay/",
  gmail: "sanskarupadhyay9@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO LOVES TO BUILD AND DESIGN WEB APPLICATIONS",
  skills: [
    emoji("⚡ Develop responsive and interactive front-end interfaces using React and modern web technologies"),
    emoji("⚡ Design intuitive user interfaces and experiences using Figma and modern design principles"),
    emoji("⚡ Build robust backend systems and RESTful APIs using Node.js and Express"),
    emoji("⚡ Implement DevOps practices and CI/CD pipelines using Jenkins and cloud services")
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Lovely Professional University",
      logo: require("./assets/images/lpulogo.png"), // Using default logo
      subHeader: "B.Tech in Computer Science",
      duration: "June 2021 - Present",
      desc: "Currently pursuing B.Tech with a CGPA of 7.27",
      descBullets: [
        "Focusing on full-stack development and DevOps practices",
        "Participated in various hackathons and coding competitions"
      ]
    },
    {
      schoolName: "Kendriya Vidyalaya CMM",
      logo: require("./assets/images/kvlogo.png"), // Using default logo
      subHeader: "Higher Secondary (Class XII)",
      duration: "Completed",
      desc: "Achieved CGPA of 9.0",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "MERN Stack Web Developement",
      company: "MERN Bootcamp",
      companylogo: require("./assets/images/merncircle.png"),
      date: "2023",
      desc: "Completed an intensive month-long MERN stack bootcamp with hands-on experience in developing full-stack applications.",
      descBullets: [
        "Built and deployed full-stack applications",
        "Learned modern web development practices"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Major Projects",
  subtitle: "SIGNIFICANT PROJECTS THAT SHOWCASE MY DEVELOPMENT JOURNEY",
  projects: [
    {
      image: require("./assets/images/logo1.png"),
      projectName: "Unicognitogram",
      projectDesc: "A social networking web application for campus students focusing on privacy and anonymity, built with React, Node.js, and Express",
      footerLink: [
        {
          name: "View Project",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/logo2.jpg"),
      projectName: "CI/CD Pipeline Using Jenkins",
      projectDesc: "Implemented automated deployment pipeline with Jenkins and SonarQube for code quality testing",
      footerLink: [
        {
          name: "View Project",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/merncircle.png"), // Using placeholder image
      projectName: "Hotel Booking Dashboard",
      projectDesc: "React-based analytics dashboard for visualizing hotel booking trends with interactive charts, date filtering, and visitor statistics from CSV data",
      footerLink: [
        {
          name: "View Project",
          url: "#"
        },
        {
          name: "Features",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/logo4.png"), // Using placeholder image
      projectName: "Hotel Management System",
      projectDesc: "Comprehensive Java-based system with features for booking, customer management, and billing using Java Swing for an intuitive user interface",
      footerLink: [
        {
          name: "View Project",
          url: "#"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Achievements and Certifications That Show My Journey",
  achievementsCards: [
    {
      title: "MERN Stack Bootcamp",
      subtitle: "Completed intensive month-long bootcamp with hands-on experience in full-stack development",
      image: require("./assets/images/merncircle.png"),
      imageAlt: "MERN Stack Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        }
      ]
    },
    {
      title: "Attended iNeuron Hackathon",
      subtitle: "Collaborated with team to develop innovative solutions under time constraints",
      image: require("./assets/images/images.png"),
      imageAlt: "Hackathon Logo",
      footerLink: [
        {
          name: "View Details",
          url: "#"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "#",
      title: "Getting Started with MERN Stack Development",
      description: "Learn about building full-stack applications using MongoDB, Express, React, and Node.js"
    },
    {
      url: "#",
      title: "Implementing CI/CD with Jenkins",
      description: "A comprehensive guide to setting up continuous integration and deployment pipelines"
    }
  ],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE AND EXPERIENCE"),
  talks: [
    {
      title: "Web Development Best Practices",
      subtitle: "Workshop at College Tech Event",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY AND DEVELOPMENT",
  podcast: [
    "#"
  ],
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a project or just say hi? Feel free to reach out!",
  email_address: "sanskarupadhyay9@gmail.com"
};

const twitterDetails = {
  userName: "sanskarupa2003",
  display: false
};

const isHireable = true;

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: "https://drive.google.com/file/d/1GSZjIFCca_g-b-GlUlvx1_jZEG4wrjXf/view?usp=sharing",
  display: true
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
