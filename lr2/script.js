function HelloUser() {
    let userName = prompt("Введіть ваше ім’я:");
    alert(`Hello, ${userName}! Welcome to JavaScript`);
}
HelloUser()
function BirthYear() {
    let age = prompt("Введіть ваш вік:");
    let currentYear = new Date().getFullYear();
    let birthYear = currentYear - age;
    alert(`You were born in ${birthYear}`);
}
BirthYear()
function showFullName() {
    let firstName = prompt("Введіть ваше ім’я:");
    let lastName = prompt("Введіть ваше прізвище:");

    console.log("Your full name is " + firstName + " " + lastName);

    console.log(`Your full name is ${firstName} ${lastName}`);
}
showFullName()