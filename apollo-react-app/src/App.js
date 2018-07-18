import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import Home from './Home';
import Details from './Details';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charset="utf-8" />
                    <title>My Title</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <ApolloProvider client={client}>
                    <Router>
                        <React.Fragment>
                            <Route exact={true} path={'/'} component={Home} />
                            <Route
                                path={'/details/:movieid'}
                                component={Details}
                            />
                        </React.Fragment>
                    </Router>
                </ApolloProvider>
            </React.Fragment>
        );
    }
}

export default App;
