
// let crypto = require('crypto');

// let message = "blablabla"
// let bufMessage = Buffer.from(message);

// let hex  = bufMessage.toString('hex')

// parseInt(bufMessage.toString('hex'),16 )

// let arrayMessage = new Uint8Array(bufMessage)

// console.log(message);
// console.log(hex , "<==> Message");
// console.log(bufMessage);
// console.log(arrayMessage);

// // 626c61626c61626c61
// const buf = crypto.randomBytes(9);
// let arrayMessage2 = new Uint8Array(buf)
// console.log("====> ",buf);
// console.log("====> ",arrayMessage2);

/*
* (chiffrement / déchiffrement syémtrique avec opération xor)
*/
const crypto = require('crypto');

function xor_encrypt(message, chiffre) {
  var result = Buffer.alloc(message.length);
  for (var i = 0; i < message.length; i++) {
    result[i] = message[i] ^ key[i];
  }
  return result;
}

var message = Buffer.from(process.argv[2]);
console.log('message', message);

var key = crypto.randomBytes(message.length);
console.log('key', key);

var message_chiffre = xor_encrypt(message, key);
console.log('message chiffré', message_chiffre);

var message_dechiffre = xor_encrypt(message_chiffre, key);
console.log('message déchiffré', message_dechiffre);

console.log(message_dechiffre.toString());