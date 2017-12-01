//function to slide for of use activation

$(".user-activate-slide").on("click", function () {
    $(".activate-user").slideDown(200);
});

//function to check the number that has entered
function checkNumber() {
    let form = document.querySelector(".activate-user");
    let userPhone = document.querySelector("#userPhone");
    let submitBtn = document.querySelector(".submit-btn");
    let contUserPhone = document.querySelector(".cont-userPhone");
    let alarm = document.querySelector(".alarm");
    let messages = ["there is no number with that", "please enter your phone number to move to the next step", "you should enter number starts with 010", "please transfer 50 pounds from your vodafone cash credit to this number:"];
    form.addEventListener("submit", function (event) {
        var st = userPhone.value.toString();
        if (st.length > 11) {
            event.preventDefault();
            alarm.textContent = messages[0];
            alarm.style.visibility = "visible";
        } else if (st.length > 1 && st.length < 11) {
            event.preventDefault();
            alarm.textContent = messages[0];
            alarm.style.visibility = "visible";
        } else if(userPhone.value == "") {
            event.preventDefault();
            alarm.textContent = messages[1];
            alarm.style.visibility = "visible";
        } else if (!userPhone.value.match(/010/gi)) {
            event.preventDefault();
            alarm.textContent = messages[2];
            alarm.style.visibility = "visible";
        } else {
            event.preventDefault();
            alarm.style.visibility = "hidden";
            contUserPhone.style.display = "none";
            alarm.style.backgroundColor = "green";
            alarm.style.visibility = "visible";
            alarm.textContent = messages[3] + " " + "01067851257";
            submitBtn.value = "transferring done";
            this.addEventListener("submit", function () {
                form.submit();
            });
        }
    });
}
checkNumber();