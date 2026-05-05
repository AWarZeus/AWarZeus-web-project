const form = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");

let projects = JSON.parse(localStorage.getItem("projects")) || [];

function displayProjects() {
    projectList.innerHTML = "";

    projects.forEach(function(project) {
        const listItem = document.createElement("li");
        listItem.textContent = project.name + " wants to build: " + project.idea;
        projectList.appendChild(listItem);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("visitorName").value;
    const projectIdea = document.getElementById("projectIdea").value;

    projects.push({
        name: name,
        idea: projectIdea
    });

    localStorage.setItem("projects", JSON.stringify(projects));

    displayProjects();
    form.reset();
});

displayProjects();