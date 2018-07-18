const axios = require('axios');
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

/**
 * 영화 목록을 가져옵니다.
 * @param {Int} limit 결과 수 제한
 * @param {Float} rating 평점
 */
module.exports.getMovies = (limit, rating) => {
  return new Promise((resolve, reject) => {
    axios(LIST_MOVIES_URL, {
        params: {
          limit,
          minimum_rating: rating
        }
      })
      .then(res => res.data)
      .then(data => data.data.movies)
      .then(movies => resolve(movies))
      .catch(err => reject(err))
  });
}

/**
 * 아이디를 사용하는 영화 정보를 가져옵니다.
 * @param {Int} id 영화 아이디
 */
module.exports.getMovie = id => {
  return new Promise((resolve, reject) => {
    axios(MOVIE_DETAILS_URL, {
        params: {
          movie_id: id
        }
      })
      .then(res => res.data)
      .then(data => data.data.movie)
      .then(movie => resolve(movie))
      .catch(err => reject(err))
  })
};

/**
 * 아이디를 사용하는 영화와 관련된 추천 영화 목록을 가져옵니다.
 * @param {Int} id 영화 아이디
 */
module.exports.getSuggestions = id => {
  return new Promise((resolve, reject) => {
    axios(MOVIE_SUGGESTIONS_URL, {
        params: {
          movie_id: id
        }
      })
      .then(res => res.data)
      .then(data => data.data.movies)
      .then(movies => resolve(movies))
      .catch(err => reject(err))
  });
};