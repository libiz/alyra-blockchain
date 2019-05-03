const program = require('commander')
const sha256 = require('crypto-js/sha256')

let inputData = []
let tree = []
// let hash_niv1 = []

program
    .version("1.0.0")
    .arguments("<data...>")
    .action(function(data) {
        
        for (value in data) { 

            tree[value]= sha256(data[value]).toString()
        }
        
        for(let i = 0; i <= tree.length; i +=2){

     
            if (i < tree.length){

                // concat + hash niveau 1 
                concat = tree[i] + tree[i+1]
                hash_niv1 = sha256(concat).toString()
                console.log("i ===>",i ,"hash  ", hash_niv1 )
            }



        //e054e5e49cdb1381ee8163ae04b90039940a5f78dbe9a5328da2addadd7caf47 ==> ce056f78e358b8709c120c3fa13b34cb1172ccdc253bd6bec71dcc9b9d796a43
        

    
        }

        //changer la taille du tableau  
     
        // // concat niv 1 
        concat1_niv1 = tree[0] + tree[1]
        concat2_niv1 = tree[2] + tree[3]

        // hash niv 1 
        hash1 = sha256(concat1_niv1).toString()
        hash2 = sha256(concat2_niv1).toString()

        concat_hash_final = hash1 + hash2

        console.log("hash1 :",hash1)
        console.log("hash2 :",hash2)
        // console.log("concat_hash_final ===> :",concat_hash_final)
        // console.log("tree :",tree)
        // console.log("Data :",data)
        // console.log("concat1_niv1 :",concat1_niv1)
        // console.log("concat2_niv1 :",concat2_niv1)
   
    })

    program.parse(process.argv)

    // [0,1,2,3]
    // tab taille = 4 
