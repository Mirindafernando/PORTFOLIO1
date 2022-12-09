class ForSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this)
    }


    displaySucess() {
        this.form.innerHTML = this.settings.sucess;
    }


    displayError() {
        this.form.innerHTML = this.settings.error;
    }


    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelector("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }


    onSubmission(event) {
        event.target.disabled = true;
        event.target.innerText = "Enviando...";
    }


    async sendForm() {
        try {
            this.onSubmission(event);
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(this.getFormObject()),
            });
            this.displaySucess();
        } catch (error) {
            this.displayError();
            throw new Error(error);
        }
    }

    init() {
        if (this.form) this.formButton.addEventlistener("click", this.sendForm);
        return this;
    }
}

const forSubmit = new ForSubmit({
    form: "[form-data]",
    button: "[form-data]",
    sucess: "<h1 class='sucess'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>"
});
forSubmit.init();
