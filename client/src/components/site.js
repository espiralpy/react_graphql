import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
            launch_site {
                site_id
                site_name
                site_name_long
            }
        }
    }
`;

export class Site extends Component {
    render() {
        let { flight_number } = this.props.match.params;
        flight_number = parseInt(flight_number);

        return (
            <Fragment>
                <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) console.log(error);
                            console.log(data)
                            const {
                                flight_number,
                                mission_name,
                                launch_year,
                                launch_success,
                                launch_date_local,
                                rocket: {
                                    rocket_id,
                                    rocket_name,
                                    rocket_type
                                },
                                launch_site: {
                                  site_id,
                                  site_name,
                                  site_name_long
                                }
                            } = data.launch;
                            return <div>
                                <h4 className="my-3">Site details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Site ID: {site_id}
                                    </li>

                                    <li className="list-group-item">
                                        Site name: {site_name}
                                    </li>

                                    <li className="list-group-item">
                                        Site name long: {site_name_long}
                                    </li>
                                </ul>
                                <hr/>
                                <Link to="/" className="btn btn-secondary">
                                        Back
                                </Link>
                            </div>;
                        }
                    }
                </Query>
            </Fragment>
        );
    }
}

export default Site;
