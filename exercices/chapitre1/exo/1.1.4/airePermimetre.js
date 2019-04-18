
class Cercle{

    constructor(rayon){

         this.rayon = rayon;
    }

    aire(){

        let aire = (this.rayon * this.rayon) * Math.PI;
        return aire; 
    }
    perimetre(){
        
        let perimetre = 2 * Math.PI * this.rayon;
        return perimetre;
    }

}

let rayon = process.argv[2];
let c = new Cercle(rayon);
let a = c.aire();
let p = c.perimetre();

console.log("aire = ", a, " périmetre = ", p )
