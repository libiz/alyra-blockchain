
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

let c = new Cercle(5);
console.log({aire: c.aire(), perimetre: c.perimetre()});
