function Verifica(){
    let user = document.getElementById('username').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let Confirmpassword = document.getElementById('Confirmpassword').value

    if(!user || !senha ){
        alert("Campos de preenchimento obrigátorio.")
    } else {
        alert("Campos preenchidos com sucesso")
    }
}
var xPositions = [200];
var yPositions = [0];

draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
    }
    
};
