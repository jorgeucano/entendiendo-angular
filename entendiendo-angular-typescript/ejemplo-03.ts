var first_name: string= "Jorge";
var last_name: string = "Cano";
var twitter_user: string = "@jorgeucano";
var interpolation:string = `
    <div>
        <p>
            Hola soy <span> ${first_name} ${last_name} </span>
            Y mi twitter es ${twitter_user}
        </p>
    </div>
`;
document.getElementById('result').innerHTML = interpolation;