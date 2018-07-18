let people = [{
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
module.exports.getPeople = () => people;
module.exports.getById = (id) => {
    const filteredItems = people.filter(person => person.id === id)
    return filteredItems[0]
}
module.exports.deletePerson = id => {
    const cleanedPersons = people.filter(person => person.id !== id);
    console.log('deletePerson', cleanedPersons)
    if (people.length > cleanedPersons.length) {
        people = cleanedPersons;
        return true;
    } else {
        return false;
    }
}
module.exports.addPerson = (name, age, gender) => {
    const newPerson = {
        id: `${people.length + 1}`,
        name,
        age,
        gender
    }
    people.push(newPerson);
    return newPerson;
}