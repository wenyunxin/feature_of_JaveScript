"use strict";   // this module need to be digged deeper
const crypto = require('crypto');
const hash = crypto.createHash('md5');  // this is a kind of hash algorithms
/* Hmac is a kind of hash algorithms, and it require a secret-key. */ 
const hmac = crypto.createHmac('sha256', 'secret-key'); 

// use method update
hash.update('Hello, World!');
hash.update('Hello, Node.js');
console.log(hash.digest('hex'));

hmac.update('Hello, bryant!');
hmac.update('Hello, Python');
console.log(hmac.digest('hex'));

// AES crypto algorithm(对称加密算法？)
function aesEncrypto(data, key){
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDencrypto(crypted, key){
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(crypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

var data = 'Hello, this is a secret message';
var key = 'Password';
var encrypto = aesEncrypto(data, key);
var decrypto = aesDencrypto(encrypto, key);

console.log('Plain text: ' + data);
console.log('Encryto text: ' + encrypto);
console.log('Decrypto text: ' + decrypto);

// Diffie-Hellman algorithm
// xiaoming's keys:
var ming = crypto.createDiffieHellman(10); /* It must be an Int and greater than 1 */
var ming_keys = ming.generateKeys();

var prime = ming.getPrime();    // it get a prime randomlly
var generate = ming.getGenerator(); // use it to generate hong's algorithm, it's 02

console.log('Prime: ' + prime.toString('hex')); // it can't get prime's plain string?
console.log('Generate: ' + generate.toString('hex'));

// xiaohong's keys:
var hong = crypto.createDiffieHellman(prime, generate);
var hong_keys = hong.generateKeys();

// exchange and generate secret:
var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

// print secrets:
console.log('xiaoming\'s secret key: ' + ming_secret.toString('hex'));
console.log('xiaohong\'s secret key: ' + hong_secret.toString('hex'));