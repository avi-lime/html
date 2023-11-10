const studentDiv = document.getElementById("students")


fetch("../json/sample.json")
    .then((response) => response.json())
    .then((students) => {
        students = JSON.stringify(students)
        console.log(students)
        for (const student in students) {
            studentDiv.innerHTML = student["name"] + "\n"; 
        }
    })