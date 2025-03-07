const SKILLS = [
  { name: "Python", level: 90, icon: "🐍" },
  { name: "HTML", level: 85, icon: "🌐" },
  { name: "CSS", level: 80, icon: "🎨" },
  { name: "JavaScript", level: 75, icon: "📜" },
  { name: "DSA", level: 85, icon: "🧩" }
];

const PROJECTS = [
  {
    name: "Personal Portfolio Website",
    description: "Responsive personal portfolio showcasing skills and projects using HTML, CSS, and JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: "💻"
  },
  {
    name: "Face Emotion Detection System",
    description: "Machine learning project using OpenCV and Python to detect and classify human emotions in real-time",
    technologies: ["Python", "OpenCV", "Machine Learning"],
    icon: "😊"
  },
  {
    name: "Rock Paper Scissors Game",
    description: "Interactive console-based game implementing classic Rock Paper Scissors with html css and javascript",
    technologies: ["HTML", "CSS","JAVASCRIPT"],
    icon: "✋"
  }
];

// Navigation logic
document.getElementById('navbar').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav-button')) {
    const sectionId = e.target.dataset.section;

    // Remove active from all buttons and sections
    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));

    // Add active to clicked button and corresponding section
    e.target.classList.add('active');
    document.getElementById(sectionId).classList.add('active');
  }
});

// Render Skills
function renderSkills() {
  const container = document.getElementById('skillsContainer');
  SKILLS.forEach(function (skill) {
    const skillElement = document.createElement('div');
    skillElement.classList.add('skill-container');
    skillElement.innerHTML =
      '<span>' + skill.icon + '</span>' +
      '<div class="skill-bar">' +
      '<div class="skill-progress" style="width: ' + skill.level + '%"></div>' +
      '</div>' +
      '<span>' + skill.name + '</span>';
    container.appendChild(skillElement);
  });
}

// Render Projects
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  PROJECTS.forEach(function (project) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-card');
    projectElement.innerHTML =
      '<div class="project-icon">' + project.icon + '</div>' +
      '<div>' +
      '<h3>' + project.name + '</h3>' +
      '<p>' + project.description + '</p>' +
      '<div>' +
      project.technologies.map(function (tech) {
        return '<span class="tech-badge">' + tech + '</span>';
      }).join('') +
      '</div>' +
      '</div>';
    container.appendChild(projectElement);
  });
}

// Resume Download
document.getElementById('resumeDownload').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/file/d/1LzOr43PsWkvGt-ILUEMipjsX2KxIxMm-/view?usp=sharing'; 
  link.download = 'ViswanadhamTamadaResume.pdf';
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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      // Clear form fields
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