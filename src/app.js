/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function excuseGenerator() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let numeroAletorioWho = Math.floor(Math.random() * who.length);
    let numeroAletorioAction = Math.floor(Math.random() * action.length);
    let numeroAletorioWhat = Math.floor(Math.random() * what.length);
    let numeroAletorioWhen = Math.floor(Math.random() * when.length);

    return `${who[numeroAletorioWho]} ${action[numeroAletorioAction]} ${what[numeroAletorioWhat]} ${when[numeroAletorioWhen]}`;
  }
  let result = excuseGenerator();
  console.log(result);

  let excuseParagraph = document.getElementById("excuse");
  console.log({ excuseParagraph });
  excuseParagraph.innerText = result;
};
