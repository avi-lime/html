const studentDiv = document.getElementById("students")
console.log(studentDiv);

fetch("../json/sample.json")
    .then((response) => response.json())
    .then((students) => {
        students = students.students
        console.log(students)
        students.forEach(student => {
            studentDiv.innerText += `${student.name}`
        })
    })

    