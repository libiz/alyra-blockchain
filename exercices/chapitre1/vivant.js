let solution = process.argv[2]; // prendre le 3 éléments de la ligne de commande cela vas me permettre de saisire le chiffre à trouver 
let guess = 50
let essai = 1 

while (guess != solution){
  
    guess = Math.floor(Math.random()*100+1);
    essai ++ ;
    console.log("guess",guess, "essai n° ",essai);

}
console.log(">> la réponse etait : ", solution,"trouvé en ", essai);
