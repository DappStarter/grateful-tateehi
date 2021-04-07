require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'guess narrow fringe skull guard render remind method inner clinic foam stadium'; 
let testAccounts = [
"0xe8d392e3a7b0b18fb7571c0c6293aa3ee6abdfa79126cfe339e9249d24b49dcd",
"0xb2af149dde304da1fb88f76979af5da8a11ba60a5d2286e16ff986427bb34ab4",
"0x21b22f96c2e040e488d70908feccb22253f0d00e64eda23967fb0702f7e4674f",
"0xcc73d5773f18e022ab1a2ec9cb0ac578cdb00df171db447be46cd37b1dd4e30e",
"0x75d9659941e7bd99eb04b9b7623b1cd613bb994974495bf7b2801bb3646acf89",
"0x311ac79e3363fba98010142e7b894034cedaaf3773914d8d3dca0526e3de136a",
"0x0f3255f4b59948397229e090406e37d261ec24b55ba837a5f7736e8d35d8bb03",
"0x8fac2cdfaf82ba6d6e9b09f81ade9e2df309ca672398b18178f56ef38f8e56d8",
"0x1b289025f6fa57d22ff1cc8f8d512ddc3888aebe1005adb0c46e4d671b4b889b",
"0x32c844ed73b25b72aff6c4a6937550c9da410b3e40910e0033c5b0e918b424a5"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

