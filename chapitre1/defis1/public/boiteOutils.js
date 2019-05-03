define(['backbone'],function(backcone){
    var HexToDec=function(input){
        console.log("input",input)
        var result=parseInt(input,16)
        var affiche=document.getElementById("result").innerHTML=result
        return result
    };
    return {
        HexToDec: HexToDec,
   }
    
})
