function form01() {
    var fname = document.form.fname.value;
    var lname = document.form.lname.value;
    var city = document.form.city.value;
    var phonenumber = document.form.phonenumber.value;
    var address = document.form.address.value;

    if (fname == null || fname == "") {
        alert("Please enter your first name");
    } else if (lname == null || lname == "") {
        alert("Please enter your last name");
    } else if (city == null || city == "") {
        alert("Please enter your city");
    } else if (phonenumber == null || phonenumber == "") {
        alert("Please enter your phone number");
    } else if (address == null || address == "") {
        alert("Please enter your address");
    } else {
        alert("Thank you for your information");
    }
}