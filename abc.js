function verify() {
  console.log("d, a");
  let d = parseInt(elementD.innerText);
  let a = parseInt(elementA.innerText);
  console.log(d, a);

  if ((d) => Math.sqrt(2) * a) {
    result = "Можно";
    document.getElementById("result").innerHTML = result;
  } else {
    result = "Нельзя";
  }
}

const elementD = document.getElementById("d");
const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener("click", verify);
