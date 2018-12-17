const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const lodashId = require('lodash-id')

const adapter = new FileSync('./database/db.json');
const db = low(adapter);
db._.mixin(lodashId)

db.defaults({ services: [], users: [], clients: [] }).write();

module.exports = db
