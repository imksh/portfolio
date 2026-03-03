import SEO from "../components/SEO";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const skillTags = [
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "React Native",
  "Git",
  "GitHub",
  "Data Structures",
  "Object-Oriented Programming",
];

const education = [
  {
    school: "Sagar Group Of Institution, Bhopal",
    detail: "B.Tech. - CSE - SIRT | CGPA: 7.17 / 10 (Till 7th Semester)",
    year: "2022 - 2026",
  },
  {
    school: "Eklavya Central School, Saharsa",
    detail: "12th | CBSE | Percentage: 84 / 100",
    year: "2022",
  },
  {
    school: "Nezamia Public School, Patna",
    detail: "10th | CBSE | Percentage: 83.20 / 100",
    year: "2020",
  },
];

const projects = [
  {
    title: "Gradify – AI-Powered Student Learning & Progress Platform",
    period: "18 Feb, 2026 - 26 Feb, 2026",
    stack:
      "MERN Stack | MongoDB | JWT | Groq API | PWA | React.js | Node.js | Express.js",
    link: "https://imksh-gradify.netlify.app",
    highlights: [
      "1st Rank – NavKalpana Hackathon 2026.",
      "Built a full-stack student performance intelligence platform integrating courses, assignments, quizzes, attendance, AI support, and growth analytics.",
      "Implemented secure JWT authentication with bcrypt hashing and middleware-based route protection.",
      "Engineered Overall Growth Index (OGI), cohort comparison, and 2-week trend prediction analytics.",
      "Developed an AI mentor assistant using Groq API for contextual learning insights.",
      "Enabled PWA support with offline push notifications and deployed on Netlify, Render, and MongoDB Atlas.",
    ],
  },
  {
    title: "Shri Baglamukhi – Official Puja & Anushthan Website",
    period: "01 Feb, 2026 - 12 Feb, 2026",
    stack: "React.js | Node.js | Express.js | MongoDB",
    link: "https://shribaglamukhi.com",
    highlights: [
      "Developed a production-ready spiritual services platform with verified puja and anushthan information.",
      "Built SEO-optimized architecture to improve search visibility and organic ranking.",
      "Implemented scalable backend workflows for listings, content updates, and user inquiries.",
      "Built a dedicated Admin Panel (CMS) for blogs, images, puja management, and dashboard operations.",
      "Focused on clean UI/UX, structured content hierarchy, and performance optimization best practices.",
    ],
  },
  {
    title: "Sakhi - Encrypted Realtime Chat Application | Web | Mobile",
    period: "05 Sep, 2025 - 07 Oct, 2025",
    stack:
      "React.js | React Native | JavaScript | MongoDB | Socket.io | Node.js | Express.js",
    link: "https://imksh-sakhi.netlify.app",
    highlights: [
      "Built a WhatsApp-style cross-platform chat app for Web (React.js) and Mobile (React Native).",
      "Implemented real-time messaging, typing indicators, read receipts, and swipe-to-reply.",
      "Added end-to-end encryption using TweetNaCl with client-side key derivation and encryption.",
      "Developed Chat Lock, account discoverability controls, and secure email OTP authentication.",
      "Optimized for low-latency communication, performance, and secure data handling.",
    ],
  },
];

const achievements = [
  "1st Rank – NavKalpana Hackathon 2026 for building Gradify, an AI-powered Student Learning & Progress Platform.",
  "Secured All India Rank 1034 out of 32,000+ participants in Naukri Campus CodeQuezt #20 coding challenge.",
  "Solved 400+ coding problems on LeetCode.",
];

const certifications = [
  {
    name: "Python For Data Science",
    score: "Aggregate: 64 / 100",
    details: "Subjects: Python For Data Science (64 / 100)",
    date: "20 Mar, 2034",
  },
];

export default function Resume() {
  const resumeRef = useRef(null);
  const location = useLocation();
  const hasDownloaded = useRef(false);

  const downloadResumePdf = async () => {
    if (!resumeRef.current) {
      return;
    }

    const html2pdf = (await import("html2pdf.js")).default;
    const options = {
      margin: [6, 6, 6, 6],
      filename: "Karan-Kumar-Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"] },
    };

    await html2pdf().set(options).from(resumeRef.current).save();
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("download") === "1" && !hasDownloaded.current) {
      hasDownloaded.current = true;
      setTimeout(() => {
        downloadResumePdf();
      }, 250);
    }
  }, [location.search]);

  return (
    <>
      <SEO
        title="Resume | Karan Kumar"
        description="Professional resume of Karan Kumar, B.Tech CSE student and full-stack developer skilled in Java, JavaScript, MERN stack, and scalable web application development."
        keywords="Karan Kumar resume, BTech CSE resume, full stack developer resume, MERN developer, JavaScript developer"
        canonical="https://imksh.online/resume"
        image="/images/profile.png"
      />

      <section ref={resumeRef} className="section-container py-8 md:py-12">
        <div className="soft-card rounded-2xl p-5 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-clip1">
                Karan Kumar
              </h1>
              <p className="mt-1 text-lg font-semibold">B.Tech. | CSE | SIRT</p>
              <p className="subtle-text">
                Bhopal, Madhya Pradesh, India - 462041
              </p>
            </div>
            <div className="grid gap-2 text-sm md:text-base">
              <a
                className="flex items-center gap-2 hover:text-(--primary)"
                href="tel:+917295038835"
              >
                <FaPhoneAlt /> +91-7295038835
              </a>
              <a
                className="flex items-center gap-2 hover:text-(--primary)"
                href="mailto:karan03945@gmail.com"
              >
                <FaEnvelope /> karan03945@gmail.com
              </a>
              <a
                className="flex items-center gap-2 hover:text-(--primary)"
                href="https://www.linkedin.com/in/karan-kumar-30b961269"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn Profile
              </a>
              <p className="flex items-center gap-2 subtle-text">
                <MdLocationOn /> Open to internships and full-time opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-5">
          <article className="soft-card rounded-2xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Brief Summary
            </h2>
            <p className="subtle-text leading-relaxed">
              A Computer Science student with a strong foundation in Java, SQL,
              JavaScript, Data Structures, OOP, and Web Development. Quick
              learner with hands-on experience in building full-stack
              applications. Passionate about solving real-world problems,
              shipping reliable products, and adapting to new technologies.
            </p>
          </article>

          <article className="soft-card rounded-2xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Key Expertise
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillTags.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full border border-(--borderSoft) bg-white/5 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          <article className="soft-card rounded-2xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Education</h2>
            <div className="grid gap-4">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="border border-(--borderSoft) rounded-xl p-4"
                >
                  <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="font-semibold text-base md:text-lg">
                        {item.school}
                      </h3>
                      <p className="subtle-text">{item.detail}</p>
                    </div>
                    <p className="text-(--primary) font-semibold">
                      {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="soft-card rounded-2xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Projects</h2>
            <div className="grid gap-5">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="border border-(--borderSoft) rounded-xl p-4"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="font-semibold text-base md:text-lg">
                        {project.title}
                      </h3>
                      <p className="subtle-text">{project.period}</p>
                      <p className="subtle-text mt-1">{project.stack}</p>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-(--primary) font-semibold hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                  <ul className="list-disc pl-5 mt-3 space-y-1 subtle-text">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="soft-card rounded-2xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3">Achievements</h2>
            <ul className="list-disc pl-5 space-y-2 subtle-text">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="soft-card rounded-2xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Assessments / Certifications
            </h2>
            <div className="grid gap-4">
              {certifications.map((item) => (
                <div
                  key={item.name}
                  className="border border-(--borderSoft) rounded-xl p-4"
                >
                  <h3 className="font-semibold text-base md:text-lg">
                    {item.name}
                  </h3>
                  <p className="subtle-text">{item.score}</p>
                  <p className="subtle-text">{item.details}</p>
                  <p className="text-(--primary) font-semibold mt-1">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="soft-card rounded-2xl p-5 md:p-6 mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Web Links / IMs
            </h2>
            <div className="grid gap-2 subtle-text">
              <a
                className="hover:text-(--primary)"
                href="https://wa.me/7295038835"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp - https://wa.me/7295038835
              </a>
              <a
                className="flex items-center gap-2 hover:text-(--primary)"
                href="https://github.com/imksh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub - https://github.com/imksh
              </a>
              <a
                className="hover:text-(--primary)"
                href="https://x.com/imksh_3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter - https://x.com/imksh_3
              </a>
              <a
                className="hover:text-(--primary)"
                href="https://imksh.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                Personal - https://imksh.online
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
