const fs = require("fs")
const wallet = require("ethereumjs-wallet")

const privateKeyString = process.argv[2];
const password = process.argv[3];

const pk = new Buffer.from(privateKeyString, 'hex')
const account = wallet.fromPrivateKey(pk)
const content = JSON.stringify(account.toV3(password))

const address = account.getAddress().toString('hex')
const file = `UTC--${new Date().toISOString().replace(/[:]/g, '-')}--${address}.json`
fs.writeFileSync(file, content)