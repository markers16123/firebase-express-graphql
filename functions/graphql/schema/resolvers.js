const {
    getMovies,
    getMovie,
    getSuggestions
} = require(__dirname + '/db.js')

module.exports = {
    Query: {
        movies: (_, {
            rating,
            limit
        }) => getMovies(limit, rating),
        movie: (_, {
            id
        }) => getMovie(id),
        suggestions: (_, {
            id
        }) => getSuggestions(id)
    }
}