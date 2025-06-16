const jobs = [
  {
    title: "Frontend Developer",
    company: "TechSoft",
    location: "Remote",
    description: "Build modern interfaces using React, HTML, CSS.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    apply: "mailto:hr@techsoft.com?subject=Frontend Developer"
  },
  {
    title: "Backend Engineer",
    company: "CloudBase",
    location: "Bangalore",
    description: "Work on server-side logic using Node.js and MongoDB.",
    skills: ["Node.js", "MongoDB", "Express", "API"],
    apply: "mailto:hr@cloudbase.in?subject=Backend Engineer"
  },
  {
    title: "Full Stack Intern",
    company: "InnovateHub",
    location: "Noida",
    description: "Assist in full-stack development using MERN stack.",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    apply: "#"
  }
];

const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");

function displayJobs(filteredJobs) {
  jobList.innerHTML = "";

  if (filteredJobs.length === 0) {
    jobList.innerHTML = "<p>No matching jobs found.</p>";
    return;
  }

  filteredJobs.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");

    jobCard.innerHTML = `
      <div class="job-title">${job.title}</div>
      <div class="job-meta"><strong>${job.company}</strong> • ${job.location}</div>
      <div class="job-description">${job.description}</div>
      <div class="tags">
        ${job.skills.map(skill => `<span class="tag" onclick="filterBySkill('${skill}')">${skill}</span>`).join('')}
      </div>
      <a href="${job.apply}" class="apply-btn" target="_blank">Apply Now</a>
    `;

    jobList.appendChild(jobCard);
  });
}

function filterJobs(keyword) {
  const filtered = jobs.filter(job => {
    const text = (
      job.title + job.company + job.location + job.description + job.skills.join(" ")
    ).toLowerCase();

    return text.includes(keyword.toLowerCase());
  });

  displayJobs(filtered);
}

searchInput.addEventListener("input", () => {
  filterJobs(searchInput.value);
});

function filterBySkill(skill) {
  searchInput.value = skill;
  filterJobs(skill);
}

window.onload = () => {
  displayJobs(jobs);
};
