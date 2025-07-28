// _tooltip.js

document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("project-tooltip");
  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {
    const title = project.querySelector(".overlay h2")?.textContent ||
                  project.getAttribute("data-title") ||
                  project.style.backgroundImage;

    const client = project.querySelector(".overlay h2")?.textContent ||
                   project.getAttribute("data-client") ||
                   "";

    project.addEventListener("mouseenter", () => {
      tooltip.innerHTML = `
        <div style="font-weight: bold; font-size: 1rem; color: white;">${title}</div>
        <div style="font-size: 0.85rem; color: #ccc; margin-top: 0.2rem;">${client}</div>
      `;
      tooltip.style.display = "block";
    });

    project.addEventListener("mousemove", (e) => {
      tooltip.style.left = `${e.clientX + 15}px`;
      tooltip.style.top = `${e.clientY + 15}px`;
    });

    project.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});