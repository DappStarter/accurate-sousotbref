require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remind hospital install opinion tackle shift'; 
let testAccounts = [
"0x68420640fcea157c9c3056e343f8679e62cf4d62505e49aaa0f1b5e02d25676e",
"0x385769741da3bbc3e004dbf94f7da026f748095257647fbd3b3d05939ad99515",
"0xc088eed901b4d07d038ff7291441df38fdd38a2ae970d61d417d213c5ffc9047",
"0x77fd2d288193bccd90fe4c504080205d369329f096d8edcac840b43cf5323813",
"0x2b6a838cd0a20cbddbfa7d28df7d0cb6f09ee5a67efcf945ff4abec047043356",
"0x6ff0cea4e4084d388623e4443e1bbf9c580efc382b7e734d28c5cb2f3622a06d",
"0x2195cc83e77b66146591b08fcc5f1947f700ca286d7743091a9f4f177caa9471",
"0xd8cec657a7056dadd36b5fef3836e6764e4233dc7abcde6435be2647e723a77f",
"0xd46463de0caa748e7027c16f82b32500c3b51f020167ba9ec61927a6106c654d",
"0xa0401de0290adf7413bd9baf80c618cd5939186fd4f098766749dfffa8d010e6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

