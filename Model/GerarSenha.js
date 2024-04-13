function gerarSenha() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const tamanhoSenha = 9;
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indice);
    }
    document.getElementById('senhaTemporaria').innerText = senha;
}