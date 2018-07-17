const db = require(__dirname + '/db.js')
module.exports = {
    Query: {
        people: () => db,
        // query { person(id:3) { ... } }
        person: (_, args) => db.getById(args.id)
    }
}