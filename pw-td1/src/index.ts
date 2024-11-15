import * as utils from "./hello-funcs.ts";
import type { Human } from "./types.ts";

const Alexandre: Human = {
  firstname:"",
  lastname:"Decourcelle",
  birthyear:2002
};
try {
  console.log(utils.helloYou(""));
} catch (error) {
  console.error("Erreur testée dans helloYou", error.message);
}

try{
  const str = utils.helloHuman(Alexandre);
  console.log(str);
}catch (error){
    console.error("erreur dans helloHuman non reconnue");
}

console.log(utils.repeatHelloYou(10, "Toi"));