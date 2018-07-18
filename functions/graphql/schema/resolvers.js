const {
    getMovies
} = require(__dirname + '/db.js')
module.exports = {
    Query: {
        movies: (_, {
            limit,
            rating
        }) => getMovies(limit, rating)
    }
}