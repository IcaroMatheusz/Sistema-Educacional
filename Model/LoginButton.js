function validateFields() {
    const user = document.getElementById("user").value.trim();
    const password = document.getElementById("password").value.trim();
    const enterButton = document.getElementById("enter-button");

    if (user !== "" && password !== "") {
        enterButton.disabled = false;
    } else {
        enterButton.disabled = true;
    }
}