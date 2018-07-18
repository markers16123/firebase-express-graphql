import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
const Home = () => (
    <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
            if (loading) return <span>loading</span>;
            if (error) return <span>something hanppened with error</span>;
            if (data) {
                return data.movies.map((movie, index) => (
                    <div key={index}>
                        {movie.title} / {movie.rating}
                    </div>
                ));
            }
        }}
    </Query>
);
export default Home;
