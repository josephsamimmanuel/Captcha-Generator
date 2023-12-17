var captcha;
var alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
var stat = document.getElementById('status');
stat.innerText = "Verification Required";

generate = () => {
    var first = alphabets[Math.floor(Math.random() * alphabets.length)];
    var second = Math.floor(Math.random() * 10);
    var third = Math.floor(Math.random() * 10);
    var fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    var fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    var sixth = Math.floor(Math.random() * 10);
    captcha = first.toString() + second.toString() + third.toString() + fourth.toString() + fifth.toString() + sixth.toString();
    document.getElementById('generated-captcha').value = captcha;
    document.getElementById("entered-captcha").value = '';
    stat.innerText = "Verification Required";
}

verify = () => {
    var userValue = document.getElementById("entered-captcha").value;
    console.log("CAPTCHA:", captcha);
    console.log("USER INPUT:", userValue);
    if (userValue == captcha) {
        stat.innerText = "Correct. Verified!"
        alert("CAPTCHA Verified Sucessfully!")
    } else {
        stat.innerText = "Incorrect. Try again."
        alert("CAPTCHA Verification Failed. Please try again!")
        document.getElementById("entered-captcha").value = '';
    }
}
