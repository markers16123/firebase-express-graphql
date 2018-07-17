const people = [{
    id: 1,
    name: 'mark',
    age: 38,
    gender: 'male'
}, {
    id: 2,
    name: 'wish',
    age: 36,
    gender: 'female'
}, {
    id: 3,
    name: 'dahyun',
    age: 0,
    gender: 'female'
}]

const getById = (id) => {
    const filteredItems = people.filter(person => person.id === id)
    return filteredItems[0]
}

module.exports = people;
module.exports.getById = getById;