function hideResults() {
  document.getElementById("java").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  document.getElementById("groovy").setAttribute("class", "hidden");
}

window.onload = function () {
  let form = document.querySelector("form#q5");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    hideResults();
    const q1 = document.querySelector("select#q1").value;
    const q3 = document.querySelector("select#q3").value;
    const q4 = document.querySelector("input#meal").value;
    const q5 = document.querySelector("select#q5").value;

    if (q1 === "monstera" && q3 === "true" && q4 === "steak" || "sushi") {
      java.removeAtribute("class");
    } else if (q1 === "ponytailPalm" && q3 === "false" && q5 === "morning") {
      rust.removeAtribute("class");
    } else if (q1 === "spider" && q3 === "false" && q5 === "night") {
      java.removeAtribute("class");
    } else {
      groovy.removeAtribute("class");
    }

  })
}