
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Code2,
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Sparkles,
  Download,
  ExternalLink,
} from "lucide-react";

import profilePhoto from "./assets/profile.png";
import "./styles.css";

const links = {
  github: "https://github.com/KavI-S07",
  linkedin: "https://www.linkedin.com/in/s-kavimalar-5a3b78374/",
  leetcode: "https://leetcode.com/u/KavimalarS/",
};

const resume = {
  href: `${import.meta.env.BASE_URL}S_Kavimalar_Resume.pdf`,
  fileName: "S_Kavimalar_Resume.pdf",
};

const repoSearch = (query) =>
  `${links.github}?tab=repositories&q=${encodeURIComponent(query)}`;

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "C", "C++", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Flask"],
  },
  {
    title: "Databases & Tools",
    skills: ["Firebase", "MySQL", "Oracle", "Git", "GitHub", "VS Code", "Figma"],
  },
  {
    title: "Areas of Interest",
    skills: [
      "Full-Stack Development",
      "AI & ML",
      "Data Science",
      "App Development",
      "UI/UX",
    ],
  },
];

const projects = [
  {
    title: "Resolvex",
    repo: "",
    search: "resolvex",
    category: "Web Development",
    description:
      "A complaint tracking system designed to help manage and track complaints through a web-based interface.",
    technologies: ["React.js", "JavaScript", "Firebase"],
  },
  {
    title: "Septic Tank Safety System",
    repo: "",
    search: "septic",
    category: "IoT & AI",
    description:
      "A hardware-integrated safety project combining sensors, IoT, and a web interface.",
    technologies: [
      "Arduino",
      "Python",
      "React.js",
      "Flask",
      "Firebase",
      "Blynk",
    ],
  },
  {
    title: "CryptoPulse Trends",
    repo: "",
    search: "crypto",
    category: "Web Development",
    description:
      "A hackathon project exploring cryptocurrency trends using web technologies and programming tools.",
    technologies: ["React.js", "Node.js", "JavaScript", "Python", "Java"],
  },
  {
    title: "DriveWise AI",
    repo: "",
    search: "drivewise",
    category: "AI & ML",
    description:
      "An AI and machine learning project developed using APIs and UAH datasets.",
    technologies: ["Machine Learning", "APIs", "UAH Datasets"],
  },
  {
    title: "Timetable Generator",
    repo: "",
    search: "timetable",
    category: "Web Development",
    description:
      "A timetable generation project built using Python and web technologies.",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Invoice Reader",
    repo: "",
    search: "invoice",
    category: "Web Development",
    description:
      "An invoice reader project developed with a React-based interface and backend technologies.",
    technologies: ["React.js", "JavaScript", "Node.js", "Java"],
  },
  {
    title: "Sign Language to Text Detecting AI",
    repo: "",
    search: "sign",
    category: "AI & ML",
    description:
      "An AI-based project focused on detecting sign language and converting recognised signs into text.",
    technologies: ["Python", "Flask", "React.js", "TensorFlow"],
  },
];

const achievements = [
  {
    title: "VIT DevHub Hackathon 2026",
    description:
      "Selected among the Top 30 teams in a national-level intercollege hackathon.",
  },
  {
    title: "ZYPH '26",
    description:
      "Team leader of a team selected for the final round and Top 25 teams in a national-level technical and sustainable development hackathon.",
  },
  {
    title: "Coding Maze",
    description:
      "Participated in a technical event at SRM Institute of Science and Technology.",
  },
  {
    title: "Mathematical Modelling Competition",
    description:
      "Participated in a mathematical modelling competition at SRM University.",
  },
  {
    title: "AI/ML Workshop",
    description:
      "Participated in a college-level workshop focused on Artificial Intelligence and Machine Learning.",
  },
];

const certifications = [
  {
    title: "Python & Artificial Intelligence",
    provider: "Udemy",
  },
  {
    title: "Data Structures and Algorithms (DAA)",
    provider: "Simplilearn",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filters = ["All", "Web Development", "AI & ML", "IoT & AI"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          SK<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a href={resume.href} download={resume.fileName} className="nav-resume">
            <Download size={14} /> Resume
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="nav-github"
          >
            GitHub <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="hero-tag">
              <Sparkles size={15} /> Welcome to my portfolio
            </span>

            <h1>
              Hi, I'm <span>S Kavimalar</span>
            </h1>

            <h2>Computer Science Student & Developer</h2>

            <p>
              I enjoy building meaningful digital experiences through
              full-stack development, artificial intelligence, and
              creative problem-solving.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work <ArrowUpRight size={17} />
              </a>

              <a
                href={resume.href}
                download={resume.fileName}
                className="resume-button"
              >
                <Download size={17} /> Download Resume
              </a>

              <a href="#contact" className="secondary-button">
                Get in Touch
              </a>
            </div>

            <div className="social-links">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Code2 size={20} />
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <ExternalLink size={20} />
              </a>

              <a
                href={links.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
              >
                <Code2 size={20} />
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="profile-photo-wrapper">
              <img
                src={profilePhoto}
                alt="Portrait of S Kavimalar"
                className="profile-photo"
              />
            </div>
          </div>

          <a
            href="#about"
            className="scroll-down"
            aria-label="Scroll to about"
          >
            <ChevronDown size={22} />
          </a>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading
            eyebrow="GET TO KNOW ME"
            title="About Me"
            description="A little introduction about who I am and what I do."
          />

          <div className="about-content">
            <div className="about-card">
              <span className="about-icon">
                <GraduationCap size={25} />
              </span>

              <h3>Education</h3>
              <p>B.Tech – Computer Science and Engineering</p>
              <p>SRM Institute of Science and Technology</p>
              <span className="muted-text">
                SRM IST, Ramapuram Campus
              </span>
              <span className="about-highlight">
                Expected Graduation: 2028
              </span>
            </div>

            <div className="about-description">
              <h3>Curious mind. Creative builder. Lifelong learner.</h3>

              <p>
                I'm a third-year Computer Science and Engineering student
                at SRM Institute of Science and Technology, Ramapuram.
                I'm passionate about technology and enjoy exploring
                different areas of software development.
              </p>

              <p>
                My interests include full-stack development, artificial
                intelligence, machine learning, data science, and
                application development. I enjoy turning ideas into
                practical projects and learning new technologies.
              </p>

              <p>
                I also enjoy UI/UX design, teamwork, leadership, and
                solving challenging problems.
              </p>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading
            eyebrow="WHAT I WORK WITH"
            title="My Skills"
            description="Technologies and tools I use to build and explore."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading
            eyebrow="MY RECENT WORK"
            title="Featured Projects"
            description="A collection of projects I've worked on and explored."
          />

          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "filter active" : "filter"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => {
              const projectUrl = project.repo || repoSearch(project.search);

              return (
                <article className="project-card" key={project.title}>
                  <div className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    View project <ExternalLink size={14} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading
            eyebrow="MY JOURNEY"
            title="Experience"
            description="Learning and growing through practical experience."
          />

          <article className="experience-card">
            <div className="experience-icon">
              <BriefcaseBusiness size={23} />
            </div>

            <div className="experience-details">
              <span className="experience-duration">
                September 2026 – April 2027
              </span>

              <h3>AI & Data Intern</h3>
              <h4>Infinix Systems</h4>

              <p>
                Working on web development and AI-related projects based
                on client requirements, gaining practical experience with
                development tools, APIs, and application technologies.
              </p>

              <div className="project-tech">
                {[
                  "Python",
                  "Java",
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "JavaScript",
                  "APIs",
                ].map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="section achievements-section" id="achievements">
          <SectionHeading
            eyebrow="MILESTONES"
            title="Achievements & Activities"
            description="Events, competitions, and learning experiences I've been part of."
          />

          <div className="achievements-grid">
            {achievements.map((item) => (
              <article className="achievement-card" key={item.title}>
                <div className="achievement-icon">
                  <Award size={22} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section certifications-section" id="certifications">
          <SectionHeading
            eyebrow="CONTINUOUS LEARNING"
            title="Certifications"
            description="Courses and certifications that support my learning journey."
          />

          <div className="certifications-grid">
            {certifications.map((item) => (
              <article className="certification-card" key={item.title}>
                <div className="certification-icon">
                  <Award size={22} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.provider}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <SectionHeading
            eyebrow="LET'S CONNECT"
            title="Get In Touch"
            description="Have an idea, opportunity, or project in mind? Let's connect!"
          />

          <div className="contact-card">
            <div className="contact-message">
              <h3>Let's build something meaningful together.</h3>

              <p>
                I'm always interested in learning, collaborating,
                and exploring opportunities in technology.
              </p>
            </div>

            <div className="contact-links">
              <a
                href={resume.href}
                download={resume.fileName}
                className="contact-resume"
              >
                <Download size={20} /> Resume <ArrowUpRight size={16} />
              </a>

              <a href={links.github} target="_blank" rel="noreferrer">
                <Code2 size={20} /> GitHub <ArrowUpRight size={16} />
              </a>

              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <ExternalLink size={20} /> LinkedIn <ArrowUpRight size={16} />
              </a>

              <a href={links.leetcode} target="_blank" rel="noreferrer">
                <Code2 size={20} /> LeetCode <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          SK<span>.</span>
        </a>

        <p>Designed & built by S Kavimalar</p>

        <p className="footer-note">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element not found. Check that index.html contains <div id="root"></div>.'
  );
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
