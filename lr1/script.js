
function showMessage() {
    alert("Натисніть OK, щоб продовжити!");
    document.write("Hello, Lubeshko Nazar! ");
}
showMessage()

 function showMessage2() {
    let result = confirm("Привіт! Натисніть Ок або скасувати.");
    if (result) {
        document.write("Ви натиснули ОК");
    } else {
        document.write("Ви натиснули скасувати");
    }
}
showMessage2()
function showMultiplicationTable() {
    let number = 10;
    document.write("<h2>Таблиця множення для числа " + number + ":</h2>");
    for (let i = 1; i <= 10; i++) {
        document.write(number + " × " + i + " = " + (number * i) + "<br>");
    }
}
showMultiplicationTable()