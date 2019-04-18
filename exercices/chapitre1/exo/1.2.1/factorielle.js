function factorielle(nbr){

    if (nbr > 1 ){

        return nbr * factorielle(nbr - 1);

    }else{
        return 1 ;
    }

}
 
let nbr = process.argv[2];
console.log(factorielle(nbr)) 
