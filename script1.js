
var form = document.getElementById("regForm");
var count = 0;

form.onsubmit = function (event) {

    event.preventDefault();

    var name = document.getElementById("fullName").value.trim();
    var email = document.getElementById("email").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var department = document.getElementById("department").value;
    var course = document.getElementById("course").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value.trim();

    var gender = "";
    var genderList = document.getElementsByName("gender");

    for (var i = 0; i < genderList.length; i++) {
        if (genderList[i].checked) {
            gender = genderList[i].value;
        }
    }

    var skills = "";
    var skillList = document.querySelectorAll("#skillsGroup input[type='checkbox']");

    for (var i = 0; i < skillList.length; i++) {
        if (skillList[i].checked) {
            skills += skillList[i].value + " ";
        }
    }

    if (
        name == "" ||
        email == "" ||
        mobile == "" ||
        gender == "" ||
        department == "" ||
        course == "" ||
        dob == "" ||
        address == ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    count++;

    document.getElementById("ledgerCount").textContent = count;

    var emptyRow = document.getElementById("emptyRow");
    if (emptyRow) {
        emptyRow.remove();
    }

    var tbody = document.getElementById("ledgerBody");

    var row = document.createElement("tr");

    row.innerHTML =
        "<td>" + count + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + email + "</td>" +
        "<td>" + mobile + "</td>" +
        "<td>" + gender + "</td>" +
        "<td>" + department + "</td>" +
        "<td>" + course + "</td>" +
        "<td>" + skills + "</td>" +
        "<td>" + dob + "</td>" +
        "<td>" + address + "</td>";

    tbody.appendChild(row);

    document.getElementById("successBanner").classList.add("show");

    form.reset();

    setTimeout(function () {
        document.getElementById("successBanner").classList.remove("show");
    }, 3000);
};
var resetBtn = document.getElementById("resetBtn");

resetBtn.onclick = function () {
    form.reset();
    document.getElementById("successBanner").classList.remove("show");
};