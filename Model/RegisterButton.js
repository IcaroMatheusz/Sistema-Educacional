function validateFields() {
    const user = document.getElementById("user").value.trim();
    const password = document.getElementById("pass").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const date = document.getElementById("date").value.trim();
    const email = document.getElementById("email").value.trim();
    const conpassword = document.getElementById("conpass").value.trim();
    const createButton = document.getElementById("create-button");

    if (user !== "" && password !== "" && cpf !== "" && date !== "" && email !== "" && conpassword !== "") {
        createButton.disabled = false;
    } else {
        createButton.disabled = true;
    }
}