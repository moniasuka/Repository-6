/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien1 = ["Mi", "La", "Mi", "Los"];
  let quien2 = ["perro", "gata", "hermana", "vecinos"];
  let hizo1 = ["se", "se", "se", "se"];
  let hizo2 = ["vomito", "durmio", "desmayo", "fueron"];
  let textoh1 = document.querySelector("#generador");

  let placeholder = "";
  placeholder =
    "<p>" +
    quien1[Math.floor(Math.random() * quien1.length)] +
    " " +
    quien2[Math.floor(Math.random() * quien2.length)] +
    " " +
    hizo1[Math.floor(Math.random() * hizo1.length)] +
    " " +
    hizo2[Math.floor(Math.random() * hizo2.length)] +
    "</p>";
  textoh1.innerHTML = placeholder;
  console.log(textoh1);

  /*
  for (let i = 0; i < quien1.length; i++) {
    for (let j = 0; j < quien2.length; j++) {
      for (let k = 0; k < hizo1.length; k++) {
        for (let l = 0; l < hizo2.length; l++) {
          console.log(
            quien1[i] + " " + quien2[j] + " " + hizo1[k] + " " + hizo2[l]
          );
          placeholder +=
            "<p>" +
            quien1[i] +
            " " +
            quien2[j] +
            " " +
            hizo1[k] +
            " " +
            hizo2[l] +
            "</p>";
        }
      }
    }
  }
  textoh1.innerHTML = placeholder;
*/
};
