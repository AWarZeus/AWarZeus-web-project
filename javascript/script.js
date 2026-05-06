const form = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");

let messages = JSON.parse(localStorage.getItem("woodworkingMessages")) || [];

function displayMessages() {
    projectList.innerHTML = "";

    messages.forEach(function(message) {
        const listItem = document.createElement("li");
        listItem.textContent = message.name + " (" + message.email + "): " + message.text;
        projectList.appendChild(listItem);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("mail").value;
    const text = document.getElementById("msg").value;

    messages.push({
        name: name,
        email: email,
        text: text
    });

    localStorage.setItem("woodworkingMessages", JSON.stringify(messages));

    displayMessages();
    form.reset();
});

displayMessages();