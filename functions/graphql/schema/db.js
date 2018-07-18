const fetch = require('node-fetch')
const API_URL = "https://yts.am/api/v2/list_movies.json";

module.exports.getMovies = (limit, rating) => {
    let params = [];
    if (limit > 0) {
        params.push(`limit=${limit}`);
    }
    if (rating > 0) {
        params.push(`rating=${rating}`);
    }

    let url = API_URL;
    if (params.length > 0) {
        url += '?' + params.join("&");
    }

    return fetch(url)
        .then(res => res.json())
        .then(json => json.data.movies);
}