//prend le premier element li qu'il trouve dans le container
const firstLi=document.querySelector('body div.container ul >li')
//prendre toutes les balises 'li'
const allLi=document.querySelectorAll('li')
//prendre tout le body
const body=document.querySelector('body')
function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    return color;

}
//changer la couleur du texte en inverse pour le texte
function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}
function padZero(str, len) {
        len = len || 2;
        var zeros = new Array(len).join('0');
        return (zeros + str).slice(-len);
}

//changer la couleur sur click
body.addEventListener('click', function(event){
    var hex=getRandomColor()
    body.style.backgroundColor=hex
    const inverted=invertColor(hex,true)
    body.style.color=inverted
    console.log(event)
    document.querySelector('ul li').style.color=inverted
})