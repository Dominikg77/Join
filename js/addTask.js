let allTasks = [];
let assignedEmployees = [];
let date = new Date();
let currentHours = date.getHours();
let currenMinutes = date.getMinutes();
currentHours = ("0" + currentHours).slice(-2);
let today = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' || ' + currentHours + ':' + date.getMinutes();
let EmployeesArray = [{
        'bild-src': 'img/software-engineer.png',
        'e-mail': 'dominik.graf2001@gmail.com',
        'name': 'Dominik Graf',
        'position': 'Software Developer'
    },
    {
        'bild-src': 'img/software-engineer.png',
        'e-mail': 'zachotzki86@gmail.com',
        'name': 'Armin Zachotzki',
        'position': 'Software Developer'
    },
];

/**
 * This function references to the inputfields elements and assings the values to an Json object and stores the Json object in an array. The array is stored in the in the Backend.
 * 
 */
async function createTask() {
    let title = document.getElementById('add_task_title');
    let date = document.getElementById('add_task_date');
    let catergory = document.getElementById('add_task_category');
    let urgency = document.getElementById('add_task_urgency');
    let text = document.getElementById('add_task_description');
    let task = {
        'title': title.value,
        'date': date.value,
        'catergory': catergory.value,
        'text': text.value.replace(/\n\r?/g, "<br/>"),
        'urgency': urgency.value,
        'UnixStamp': new Date().getTime(),
        'createdAt': today,
        'assignEmployee': assignedEmployees,
        'inArray': 'toDo'
    }
    if (assignedEmployees.length == 0) {
        alert('Please add employee!')
    } else if (text.value == '') {
        alert('Please enter a description!')
    } else if (title.value == '') {
        alert('Please enter a title!')
    } else if (catergory.value == '') {
        alert('Please enter a catergory!')
    } else if (urgency.value == '') {
        alert('Please enter a state of urgency!')
    } else if (date.value == '') {
        alert('Please enter a Date!')
    } else {
        allTasks.push(task);
        // await backend.setItem('allTasks', JSON.stringify(allTasks));
        title.value = '';
        date.value = '';
        catergory.value = '';
        text.value = '';
        urgency.value = '';
        assignEmployee = '';
        //location.reload();
    }
}

/**
 * This function deletes all the values of all inputfields and also of the array with the assigned employees
 */
function clearTask() {
    document.getElementById('add_task_title').value = '';
    document.getElementById('add_task_date').value = '';
    document.getElementById('add_task_category').value = 'Marketing';
    document.getElementById('add_task_description').value = 'ASd';
    document.getElementById('add_task_date').value = '';
    document.getElementById('add_task_urgency').value = 'High';
    profile_pictures.innerHTML = '';

}

/**
 * This function accesesses the available Employees and renders each profile in its own HTML element.
 * 
 */
function Employees() {
    let modal_body = document.getElementById('modal-body');
    modal_body.innerHTML = '';
    for (let i = 0; i < EmployeesArray.length; i++) {
        const element = EmployeesArray[i];
        modal_body.innerHTML += `
            <div class="modal-profile" onclick="assigningEmployees(${i}); this.onclick = null;" id="employee_${i}">
                <div class=modal-profile-column1>
                    <img src="${element['bild-src']}" alt="" class="modal-profile-image">
                    <span class="email" href="#">${element['e-mail']}</span>
                </div>
                <div class=modal-profile-column2>
                    <span>${element['name']}</span>
                    <span class="job-position">${element['position']}</span>
                </div>
            </div>`;
    }
}