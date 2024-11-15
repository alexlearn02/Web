export function helloYou(name:string): string{
    if (verifChaine(name)){
        return `Hello, ${name}!`
    }
    else{
        throw new Error(": le nom n'a pas été renseigné");
    }
}

export function repeatHelloYou (n:number, name:string): string{
    let chaine ="";
    for (let i=0; i<n; i++){
        chaine+=helloYou(name)+`\n`;
    }
    return chaine;
}

export function helloHuman(human:Human){
    const currentYear = new Date().getFullYear()
    return `Hello, ${human.firstname} ${human.lastname}! You are ${currentYear-human.birthyear} years old`;
}

function verifChaine(chaine:string):boolean{
    if (chaine === ""){
        console.log("le nom ou prénom n'est pas renseigné. Veuillez y remédier !");
        return false;
    }
    else{
        return true;
    }
}
