//Chargement des dépendances front
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/public',
    packages: [],
    paths: {
          //'crypto-js': 'path-to/bower_components/crypto-js/crypto-js'
            'backbone':'/backbone-min',
            'underscore':'/underscore-min',
            'jquery':'/jquery-3.4.0.min',
            'boiteOutils':'/boiteOutils' 
    },
    shim: {
        'backbone':{
            deps : ['jquery','underscore'],
            exports : 'Backbone'
            }}
});

// Main app logic.
requirejs(['jquery','backbone','underscore','boiteOutils'],
function($,backbone,_,boiteOutils) {
    console.log("Transition HEXHEHX up")
    backbone.Events.on('submitHex', function(){ 
        let input =  document.getElementById("inputHex").value;
        let calc= boiteOutils.HexToDec(input);
        let result=calc;
        console.log(result);
            
    });
    
$(document).on('click', '#submitHex', function(event){
    console.log("Event")
    Backbone.Events.trigger('submitHex');
});
    
    
    
    
})