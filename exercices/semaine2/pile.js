

let str ="suis je Bonjour AFFICHE pile une rien SUPPRIME"
let words = str.split(' ');

let pile = []

for (i=0; i < words.length; i++ ){


    pile.push(words[i])
 
    if (words[i] == "AFFICHE" ){

        pile.pop()
        Affiche(pile)

    }else if (words[i] == "SUPPRIME"){

        pile.pop()
        pile.pop()
        Supprime(pile)
    }

}

function Affiche(pile){

    let chaine = ""
    let tab = pile.length
    console.log(pile)
    for ( i= 0; i < tab; i++ ){
      
        chaine = chaine + " " + pile.pop()
     
    }
    console.log(chaine)
}

function Supprime(pile){

    // let chaine = ""
    // let tab = pile.length

    // for ( i= 0; i < tab; i++ ){
      
    //     chaine = chaine + " " + pile.pop()
     
    // }
    // console.log(chaine)
    console.log(pile)
   
}

/*Pile affiche :.pop() jusqu'a la fin de la pile affiche
SUPPRIME : .pop()
Mot -> .push()
"suis je Bonjour AFFICHE pile une rien SUPPRIME AFFICHE"
Bonjour je suis une pile */