let solution = Math.floor(Math.random()*100+1);
console.log("la solution :", solution);
let entree;

do
{ 
     entree = prompt("Le nombre à deviner est compris entre 1 et 100");
    
     if(entree > solution){
       
        alert("c'est moins");
       
     }else if(entree < solution){
       
        alert("c'est plus");
    }
}
while(entree != solution) 

console.log("Féliciation tu as trouvé le chiffre ", solution) 