import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LaunchItem = ({
    launch: {
        flight_number,
        mission_name,
        launch_date_local,
        launch_success
    }
}) => {
    console.log(flight_number)
    return (
        <div className='card card-body mb-3'>
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission: <span className={classNames({
                        'text-success': launch_success,
                        'text-danger': !launch_success,
                    })}>
                            {mission_name}
                        </span>
                    </h4>
                    <p>Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment></p>
                    {launch_success ? <span class="dot-green"></span> : <span class="dot-red"></span>
                  
                }
                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
                        Launch details
                    </Link>
                    <Link to={`/site/${flight_number}`} className="btn btn-secondary">
                        Site details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LaunchItem;