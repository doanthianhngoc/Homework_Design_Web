
function calculate(operator) {
    // Lấy giá trị người dùng nhập
    let a = Number(document.getElementById("numberA").value);
    let b = Number(document.getElementById("numberB").value);

    let result;

    // Kiểm tra phép tính
    switch (operator) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            if (b === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = a / b;
            break;
    }

    // Hiển thị kết quả
    document.getElementById("result").value = result;
}
