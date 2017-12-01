function validationFor(form, fields) {
    form.addEventListener("submit", function (event) {
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].value == "") {
                event.preventDefault();
                let alarm = document.querySelector(".alarm");
                alarm.textContent = "you should enter all fields";
                alarm.style.visibility = "visible";

            }
        }
    });
}
validationFor(document.querySelector(".form-sign"), [document.querySelector(".form-sign input[name=email]"), document.querySelector(".form-sign input[name=password]")]);