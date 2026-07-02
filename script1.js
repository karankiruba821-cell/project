var form = document.getElementById("regForm");
var table = document.getElementById("ledgerBody");
var emptyRow = document.getElementById("emptyRow");
var success = document.getElementById("successBanner");

var count = 1;

form.addEventListener("submit", function (e) {

    e.preventDefault();

    document.querySelectorAll(".error-msg").forEach(function (x) {
        x.innerHTML = "";
    });

    document.querySelectorAll(".field").forEach(function (x) {
        x.classList.remove("invalid");
    });

    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var department = document.getElementById("department").value;
    var course = document.getElementById("course").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;

    var gender = "";
    var genders = document.getElementsByName("gender");

    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender = genders[i].value;
        }
    }

    var skills = [];
    var check = document.querySelectorAll("#skillsGroup input");

    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            skills.push(check[i].value);
        }
    }

    var valid = true;

    if (name == "") {
        document.getElementById("err-fullName").innerHTML = "Enter Name";
        document.getElementById("fullNameField").classList.add("invalid");
        valid = false;
    }

    if (email == "") {
        document.getElementById("err-email").innerHTML = "Enter Email";
        document.getElementById("emailField").classList.add("invalid");
        valid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("err-email").innerHTML = "Invalid Email";
        document.getElementById("emailField").classList.add("invalid");
        valid = false;
    }

    if (mobile == "") {
        document.getElementById("err-mobile").innerHTML = "Enter Mobile";
        document.getElementById("mobileField").classList.add("invalid");
        valid = false;
    } else if (mobile.length != 10 || isNaN(mobile)) {
        document.getElementById("err-mobile").innerHTML = "Enter 10 digits";
        document.getElementById("mobileField").classList.add("invalid");
        valid = false;
    }

    if (gender == "") {
        document.getElementById("err-gender").innerHTML = "Select Gender";
        document.getElementById("genderField").classList.add("invalid");
        valid = false;
    }

    if (department == "") {
        document.getElementById("err-department").innerHTML = "Select Department";
        document.getElementById("departmentField").classList.add("invalid");
        valid = false;
    }

    if (course == "") {
        document.getElementById("err-course").innerHTML = "Select Course";
        document.getElementById("courseField").classList.add("invalid");
        valid = false;
    }

    if (dob == "") {
        document.getElementById("err-dob").innerHTML = "Select DOB";
        document.getElementById("dobField").classList.add("invalid");
        valid = false;
    } else {

        var birth = new Date(dob);
        var today = new Date();

        var age = today.getFullYear() - birth.getFullYear();

        if (age <= 18) {
            document.getElementById("err-dob").innerHTML = "Age must be above 18";
            document.getElementById("dobField").classList.add("invalid");
            valid = false;
        }
    }

    if (address == "") {
        document.getElementById("err-address").innerHTML = "Enter Address";
        document.getElementById("addressField").classList.add("invalid");
        valid = false;
    }

    if (valid == true) {

        if (emptyRow) {
            emptyRow.remove();
            emptyRow = null;
        }

        var row = table.insertRow();

        row.insertCell(0).innerHTML = count++;
        row.insertCell(1).innerHTML = name;
        row.insertCell(2).innerHTML = email;
        row.insertCell(3).innerHTML = mobile;
        row.insertCell(4).innerHTML = gender;
        row.insertCell(5).innerHTML = department;
        row.insertCell(6).innerHTML = course;
        row.insertCell(7).innerHTML = skills.join(", ");
        row.insertCell(8).innerHTML = dob;
        row.insertCell(9).innerHTML = address;

        success.classList.add("show");

        form.reset();

        setTimeout(function () {
            success.classList.remove("show");
        }, 3000);
    }

});
