
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function showGreeting(fullName, age) {
    alert(`Hello, ${fullName}! You are ${age} years old.`);
}
function prog1() {
    let firstName = prompt("Введіть ваше ім’я:");
    let lastName = prompt("Введіть ваше прізвище:");
    let age = prompt("Введіть ваш вік:");

    let fullName = getFullName(firstName, lastName);
    showGreeting(fullName, age);
}
prog1()

function getStudentInfo() {
    let name = prompt("Введіть ім’я студента:");
    let score = parseInt(prompt("Введіть бал студента (0–12):"));
    return { name, score };
}

function checkGrade(score) {
    if (score >= 10 && score <= 12) {
        return "Excellent";
    } else if (score >= 7 && score <= 9) {
        return "Good";
    } else if (score >= 4 && score <= 6) {
        return "Satisfactory";
    } else {
        return "Fail";
    }
}

function showResult(name, grade) {
    alert(`Student: ${name}\nGrade: ${grade}`);
}

function prog2() {
    let student = getStudentInfo();
    let grade = checkGrade(student.score);
    showResult(student.name, grade);
}
prog2()

 function calculateTip(Bill, percent = 10) {
    return Bill * percent / 100;
}

function showResult2(Bill, tip, percent = 10) {
    let total = Bill + tip;
    alert(`Bill: ${Bill} грн\nTip (${percent}%): ${tip} грн\nTotal: ${total} грн`);
}

function prog3() {
    let Bill = parseFloat(prompt("Введіть загальну суму рахунку (грн):"));
    let percent = prompt("Введіть відсоток чайових (за замовчуванням 10):");

    if (percent === "" || percent === null) {
        percent = 10;
    } else {
        percent = parseFloat(percent);
    }

    let tip = calculateTip(Bill, percent);
    showResult2(Bill, tip, percent);
}
prog3()