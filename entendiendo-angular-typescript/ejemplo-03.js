var first_name = "Jorge";
var last_name = "Cano";
var twitter_user = "@jorgeucano";
var interpolation = "\n    <div>\n        <p>\n            Hola soy <span> " + first_name + " " + last_name + " </span>\n            Y mi twitter es " + twitter_user + "\n        </p>\n    </div>\n";
document.getElementById('result').innerHTML = interpolation;
