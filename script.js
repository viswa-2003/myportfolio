const SKILLS = [
  { name: "Python", level: 90, icon: "🐍" },
  { name: "HTML", level: 85, icon: "🌐" },
  { name: "CSS", level: 80, icon: "🎨" },
  { name: "JavaScript", level: 75, icon: "📜" },
  { name: "React.js", level: 75, icon: "⚛️" },
  { name: "Node.js", level: 70, icon: "🟢" },
  { name: "MongoDB", level: 70, icon: "🍃" },
  { name: "DSA", level: 85, icon: "🧩" }
];

const PROJECTS = [
  {
    name: "Cargo Shipment Tracking System",
    description: "Full-stack logistics platform with real-time shipment tracking, JWT authentication, and Leaflet map visualization.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Leaflet.js"],
    icon: "🚢",
    source: "https://github.com/viswa-2003/CargoShipments",
    live: "https://cargo-frontend-hdrr.onrender.com/"
  },
  {
    name: "Face Emotion Recognition System",
    description: "CNN-based real-time facial emotion detection using Python, OpenCV, and TensorFlow.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    icon: "😊",
    source: "https://github.com/viswa-2003/face-emotion"
  },
  {
    name: "CementPro - Business Landing Page",
    description: "Responsive landing page with modern UI, SEO optimization, and animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: "🏗️",
    source: "https://github.com/viswa-2003/cement-landingpage",
    live: "https://cement-landingpage.vercel.app/"
  },
  {
    name: "Rock Paper Scissors Game",
    description: "Interactive web-based game implementing Rock Paper Scissors using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: "✋",
    source: "https://github.com/viswa-2003/rock-paper-scissors"
  },
  {
    name: "Butterfly Classifier",
    description: "Deep learning project using MobileNetV2 to classify butterfly species with a Flask web interface.",
    technologies: ["Python", "TensorFlow", "Flask", "MobileNetV2"],
    icon: "🦋",
    source: "https://github.com/viswa-2003/butterfly-classifier"
  }
];

// Internship Experience Data
const EXPERIENCE = [
  {
    role: "AI & ML Intern",
    company: "SmartBridge Educational Services Pvt. Ltd.",
    duration: "May 2025 – Jul 2025",
    description: [
      "Completed intensive 2-month internship focused on AI/ML projects in collaboration with APSCHE.",
      "Gained hands-on experience with end-to-end machine learning pipelines from data preprocessing to model deployment.",
      "Collaborated with team members to develop and optimize ML models for real-world applications."
    ],
    icon: "💼"
  },
  {
    role: "Artificial Intelligence Intern",
    company: "SkillDzire",
    duration: "May 2024 – Jul 2024",
    description: [
      "Worked on projects related to Artificial Intelligence under professional mentorship.",
      "Developed practical understanding of AI techniques including supervised learning and natural language processing.",
      "Enhanced skills in Python, TensorFlow, and model evaluation through real-world tasks."
    ],
    icon: "💼"
  }
];


// Navigation (navbar buttons)
document.getElementById('navbar').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav-button')) {
    const sectionId = e.target.dataset.section;
    openSection(sectionId);
  }
});

// Function to open section (used by nav + "See More")
function openSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));

  document.getElementById(sectionId).classList.add('active');
  document.querySelector(`.nav-button[data-section="${sectionId}"]`)?.classList.add('active');

  // Scroll smoothly to top of new section
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


// Render Skills
function renderSkills() {
  const container = document.getElementById('skillsContainer');
  SKILLS.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.classList.add('skill-container');
    skillElement.innerHTML =
      `<span>${skill.icon}</span>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.level}%"></div>
      </div>
      <span>${skill.name}</span>`;
    container.appendChild(skillElement);
  });
}

// Render Projects
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  PROJECTS.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-card');
    projectElement.innerHTML =
      `<div class="project-icon">${project.icon}</div>
      <div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div>${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}</div>
        <div style="margin-top:10px;">
          ${project.source ? `<a href="${project.source}" target="_blank" class="social-link">Source Code</a>` : ""}
          ${project.live ? ` | <a href="${project.live}" target="_blank" class="social-link">Live Demo</a>` : ""}
        </div>
      </div>`;
    container.appendChild(projectElement);
  });
}

// Render Experience
function renderExperience() {
  const container = document.getElementById('experienceContainer');
  EXPERIENCE.forEach(exp => {
    const expElement = document.createElement('div');
    expElement.classList.add('project-card');
    expElement.innerHTML =
      `<div class="project-icon">${exp.icon}</div>
      <div>
        <h3>${exp.role} @ ${exp.company}</h3>
        <p><em>${exp.duration}</em></p>
        <ul style="text-align:left; margin-top:10px;">
          ${exp.description.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>`;
    container.appendChild(expElement);
  });
}

// Resume Download
document.getElementById('resumeDownload').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/file/d/1Ng6RlCVhJED_nC8jfLIeqDmvNQPry7rV/view?usp=sharing';
  link.download = 'viswaresume.pdf';
  link.click();
});

// Send Message
document.getElementById('sendMessage').addEventListener('click', async function () {
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;

  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  try {
    const response = await fetch('http://localhost:3001/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      document.getElementById('contactName').value = '';
      document.getElementById('contactEmail').value = '';
      document.getElementById('contactMessage').value = '';
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
});

// Initial render
renderSkills();
renderProjects();
renderExperience();
