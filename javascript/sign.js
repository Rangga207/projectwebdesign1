$(document).ready(function () {

    // a. Click Event - Submit Validation
    $(".btn").click(function () {
        let user = $("input[type='text']").val();
        let pass = $(".password").val(); // disesuaikan
        let email = $(".email").val();

        if (user === "" || pass === "" || email === "") {
            alert("All fields must be filled out!");
        } else {
            alert("Sign Up Succesful!");
        }
    });

    // Show/Hide Password (Eye Icon)
    $(".toggle-pass").click(function () {

        let input = $(".password");

        if (input.attr("type") === "password") {
            input.attr("type", "text");
            $(this).attr("name", "eye-outline");  // icon mata terbuka
        } else {
            input.attr("type", "password");
            $(this).attr("name", "eye-off-outline"); // icon mata tertutup
        }
    });


    // b. Change Event - Username minimum 5 karakter
    $("input[type='text']").change(function () {
        let val = $(this).val();
        if (val.length < 5) {
            $(".username-warning").text("Username must be at least 5 characters");
        } else {
            $(".username-warning").text("");
        }
    });

    // Change Event - Email must end with @gmail.com
    $("input[type='email']").change(function () {

        let email = $(this).val();

        if (!email.endsWith("@gmail.com")) {
            $(".email-warning").text("Email must end with @gmail.com");
        } else {
            $(".email-warning").text("");
        }
    });

    // c. Mouse Move Event - Cursor Custom
    $(".wrapper").mouseleave(function () {
        $("body").css("cursor", "progress");
    }).mouseenter(function () {
        $("body").css("cursor", "default");
    });

    // d. Keypress Event - Password must have 1 uppercase & 1 number
    $(".password").on("keypress", function () {

        let pass = $(this).val();

        let hasUppercase = /[A-Z]/.test(pass);
        let hasNumber = /[0-9]/.test(pass);

        if (!hasUppercase || !hasNumber) {
            $(".password-warning").text("Password must contain 1 uppercase & 1 number");
        } else {
            $(".password-warning").text("");
        }
    });

    // e. Focus Event - Highlight Inputs
    $("input").focus(function () {
        $(this).css({
            "box-shadow": "0 0 8px rgba(255, 175, 97, 0.5)"
        });

        $(this).siblings("label").css({
            "color": "#FFAF61"
        });
    });

    $("input").blur(function () {
        $(this).css({
            "border-color": "transparent",
            "box-shadow": "none"
        });

        $(this).siblings("label").css({
            "color": "#e6cbb4"
        });
    });

});
