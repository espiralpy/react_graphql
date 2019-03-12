import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './launchItem';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

class Launches extends Component {
    state = {  }
    render() {
        return (
            <Fragment>
                <h4 className="display-4 my-3">Launches chidos</h4>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) console.log(error)
                            console.log(data);

                            return <Fragment>
                                {
                                    data.launches.map(launch => {
                                        return <LaunchItem key={launch.flight_number} launch={launch} />
                                    })
                                }
                            </Fragment>;
                        }
                    }
                </Query>
            </Fragment>
        );
    }
}

export default Launches;