const skillsData = {
  "Front-End": [
    {
      title: "HTML",
      image: "/assets/images/html5.svg",
      description: "sample",
    },
    {
      title: "CSS",
      image: "/assets/images/css3.svg",
      description: "sample",
    },
    {
      title: "JavaScript",
      image: "/assets/images/javascript.svg",
      description: "sample",
    },
    {
      title: "Tailwind",
      image: "/assets/images/tailwindcss.svg",
      description: "sample",
    },
    {
      title: "React",
      image: "/assets/images/react.svg",
      description: "sample",
    },
  ],
  "Back-End": [
    {
      title: "Node.js",
      image: "/assets/images/nodejs.svg",
      description: "sample",
    },
    {
      title: "Express.js",
      image: "/assets/images/expressjs.svg",
      description: "sample",
    },
    {
      title: "MongoDB",
      image: "/assets/images/mongodb.svg",
      description: "sample",
    },
    {
      title: "MySQL",
      image: "/assets/images/mysql.svg",
      description: "sample",
    },
    {
      title: "MariaDB",
      image: "/assets/images/mariadb.svg",
      description: "sample",
    },
  ],
  "Tools&Technologies": [
    {
      title: "Github",
      image: "/assets/images/github.svg",
      description: "sample",
    },
    {
      title: "Git",
      image: "/assets/images/git.svg",
      description: "sample",
    },
    {
      title: "Visual Studio",
      image: "/assets/images/visual-studio.svg",
      description: "sample",
    },
    {
      title: "Postman",
      image: "/assets/images/postman.svg",
      description: "sample",
    },
    {
      title: "Figma",
      image: "/assets/images/figma.svg",
      description: "sample",
    },
  ],
};

const sections = ["Front-End", "Back-End", "Tools&Technologies"];

const container = document.getElementById("skills-container");

sections.forEach((sectionTitle) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.innerHTML = `
      <h1>${sectionTitle}</h1>
      <div class="skills-card"></div>
    `;

  const skillsCard = sectionDiv.querySelector(".skills-card");

  const skills = skillsData[sectionTitle];

  skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.innerHTML = `
        <img src="${skill.image}" />
        <figure>
          <h4>${skill.title}</h4>
          <h5>${skill.description}</h5>
        </figure>
      `;
    skillsCard.appendChild(skillDiv);
  });

  container.appendChild(sectionDiv);
});
