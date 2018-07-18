const {
    getById,
    getPeople,
    addPerson,
    deletePerson
} = require(__dirname + '/db.js')
module.exports = {
    Query: {
        people: () => getPeople(),
        // query { person(id:3) { ... } }
        person: (_, args) => getById(args.id)
    },
    Mutation: {
        addPerson: (_, {
            name,
            age,
            gender
        }) => addPerson(name, age, gender),
        deletePerson: (_, {
            id
        }) => deletePerson(id)
    }
}