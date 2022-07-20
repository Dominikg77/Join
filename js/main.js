//templates laden
async function init() { // die übergeordnete Funktion benötigt ebbenfalls Await 
    await includeHTML();
}
async function includeHTML() { // sollte zuerst die Webseiten Templates Laden
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i]; // element ist gleich Header
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) { // wenn resp ok ist dann
            element.innerHTML = await resp.text();
        } else { // wenn nicht, dann  
            element.innerHTML = 'Page not found';
        }
    }
}

//add-task

function addTask() {
    let title = document.getElementById('add_task_title');
    let dueDate = document.getElementById('add_task_date');
    let categoryA = document.getElementById("add_task_category");
    let category = categoryA.options[categoryA.selectedIndex].text;
    let urgencyA = document.getElementById("add_task_urgency");
    let urgency = urgencyA.options[urgencyA.selectedIndex].text;
    let description = document.getElementById('add_task_description');
    let profileA = document.getElementById('add_task_profile');
    let profile = profileA.options[profileA.selectedIndex].text;

    let tasks = {
        "title": title.value,
        "dueDate": dueDate.value,
        "board": "backlog",
        "category": category,
        "urgency": urgency,
        "description": description.value,
        "assignedTo": profile
    };

    data.push(tasks);
    deleteInputValue();
}

function deleteInputValue() {
    document.getElementById('add_task_title').value = '';
    document.getElementById('add_task_date').value = '';
    document.getElementById("add_task_category").selectedIndex = 0;
    document.getElementById("add_task_urgency").selectedIndex = 0;
    document.getElementById('add_task_description').value = '';
}