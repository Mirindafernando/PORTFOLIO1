function validar() {

    // variavel de interação com o DOM
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var menssagem = document.getElementById("menssagem");


    // expressões regulares que validam o e-mail o numero de celular
    var reg_email = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (nome.value == "") {
        alert("Campo nome não preenchido!!!")
        nome.focus()
    }
    if (email.value == "" || !reg_email.test(email.value)) {
        if (email.value == "") {
            alert("Campo email  não prenchido")
            email.focus()
        }
        if (!reg_email.test(email.value)) {
            alert("Email inválido!!!")
            email.focus()
        }

    }

}
