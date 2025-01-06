/**var click = document.getElementById("btnGet").value;
click.addEventListener("click", insertName);

function insertName() {
    const msg = document.getElementById = "Bill Farmer"   
    document.getElementById("midtermMessage2").innerHTML = msg;   
}
addEventListener("click", insertName)
**/
var button = document.getElementById("btnGet");

function insertName() {
    const con  = document.getElementById("container");
    const msg2 = con.getElementById("midtermMessage2");

    msg2.innerHTML += "This is the submission for Bill Farmer";
  }
  