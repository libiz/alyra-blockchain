define(['jquery','backbone'],function($,backcbone){
    var HexToDec=function(input){
        console.log("input",input)
        var result=parseInt(input,16)
        document.getElementById("result").innerHTML=result
        return result
    };
     var DecToHex=function(input){
        console.log("input",input)
        var result=Number(input).toString(16)
        result="0x"+result
        document.getElementById("result").innerHTML=result
        return result
    };
    
        const HEX = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        const dec2hex = n => {
            let nb = n;
            let result = [];
            do {
                result.push(HEX[n % 16]);
                n = Math.floor(n / 16);
            }while(n > 0);
            if(result.length % 2 !== 0)
                result.push(0);
            result.reverse();
            //group by byte
            let tmp = [];
            for(let i = 0; i < result.length; i += 2)
                tmp.push(result[i] + result[i + 1]);
            let prefix = "";
            let varInt = [...tmp];
            varInt.reverse();
            if(nb > 253) {
                if(nb < 0xffff) {
                    prefix = 'FD';
                    while(varInt.length !== 2)
                        varInt.push("00");
                }
                else if(nb < 0xffffffff) {
                    prefix = 'FE';
                    while(varInt.length !== 4)
                        varInt.push("00");
                }
                else if (nb < 0xffffffffffffffff) {
                    prefix = 'FF';
                    while(varInt.length !== 8)
                        varInt.push("00");
                }
            }
            varInt.unshift(prefix);
            let output =
                `${nb} -> 0x ${tmp.join(' ')} (big endian)\n    -> 0x ${tmp.reverse().join(' ')} (little endian)\n    -> 0x ${varInt.join(' ')} (notation variable)`;
            console.log(output);
            
            document.getElementById("result").innerHTML=output
            return output

        };
    
    function hexaChar(z){
          switch(z){
            case 10:z='a';break;
            case 11:z='b';break;
            case 12:z='c';break;
            case 13:z='d';break;
            case 14:z='e';break;
            case 15:z='f';break;           
        }
        return z
    }

    var convertToLE=function(nombre){
            var hex=16;
            var puissance=nombre.toString().length
            var reste=null;
            //recherche de la plus grande puissance de 16
            let hexaBig=""
            let hexaBigArray=[]
            function decoupe(nombre,puissance){
                let x=nombre/hex**puissance
                if (nombre !=0){
                if(x<1){
                    puissance=puissance-1
                    let reste=nombre%(hex**puissance)
                    let z=(nombre-reste)/(hex**puissance)

                    //conversion des caracteres hexadecimaux
                    z=hexaChar(z)
                    hexaBig=hexaBig+z
                    hexaBigArray.push(z)
                    return decoupe(reste,puissance)

                }else{
                    let reste=nombre%(hex**puissance)
                    let z=(nombre-reste)/(hex**puissance)
                    z=hexaChar(z)
                    //hexa=hexa+z
                    hexaBig=hexaBig+z
                    hexaBigArray.push(z)
                    return decoupe(reste,puissance)
                }}
                else{ 
                    //add 0 to finish octet
                    if(hexaBig.length%2!=0){hexaBig='0'+hexaBig;hexaBigArray.unshift(0)};
                    return [hexaBig,hexaBigArray]}
            }
            function littleEndian(array){
                let paire=0;
                let result="";
                let temp="";
                function tri(array,paire,temp){
                if(array.length>0){
                let last_element=array.pop()
                paire++;
                if (paire==2){result=result+last_element+temp;paire=0;temp="";return tri(array,paire,temp)}
                else{temp=last_element;return tri(array,paire,temp) }
                }
                else{ return result}
                }
                result = tri(array,paire,temp);
                return result
            }      
            //RETURN CONVERSION
            let big= decoupe(nombre,puissance);
            let little=littleEndian(big[1]);
            //FORMATAGE DES RESULTATS
            bigEndianFormat="0x"+big[0]
            littleEndianFormat="0x"+little
            document.getElementById("result").innerHTML=littleEndianFormat
            return [bigEndianFormat,littleEndianFormat]
            }
    var constructionCible =function(coefficient,exposant){
        
        let cible = coefficient*2**(8*(exposant-3))
        console.log("cible",cible)

        //Transformation de la cible sur 256 bits
        let cibleHexa=cible.toString(16)
        console.log("cible hexa: ",cibleHexa)
        //get length of cible hexa:
        let l=cibleHexa.length
        //build Buffer with 256 bits at 0 and fill from cible.lenght 
        let target=new Buffer.allocUnsafe(32).fill(0)
        let cibleBuf=target .fill(cibleHexa,32-l)
        console.log("Cible BUFFER",target)
        let found=target.indexOf("9")
        console.log(found, l)
        let found1=cibleBuf.indexOf("9")
        console.log(found1, l)

        return cibleBuf
    
    }
    
    var calculerDifficulte =function(cible){
    
    let ciblemax=(2**16-1)*2**208
    //lecture d'un entier signé?
    console.log("<<<<<<<<<<MA CIBLE>>>>>>>>>>>>>",typeof(cible),"  ", cible)
    if(typeof cible==='object'){console.log("not  a number in cible");var cibleI=cible.readIntBE()}
    else{var cibleI=cible; console.log("Number in cible:",cibleI)}
    
    console.log("cibleMax",ciblemax,"et", "cible: ",cible,"cible signed integer: ", cibleI)
    if(cibleI!=0){var d=ciblemax/cibleI}
    else{console.log("cible???",parseInt(cible));var d=ciblemax/cible}
    
    console.log("difficulte de: ",d)
    return d
    }
    
    var decodeBitsToCible=function(bits){
        
        let Buf=Buffer.from(bits)
        
    }
    
    //return the tools
    return {
        HexToDec: HexToDec,
        DecToHex: DecToHex,
        convertToLE:convertToLE,
        dec2hex:dec2hex,
        constructionCible:constructionCible,
        difficulte:calculerDifficulte
   }
    
})
