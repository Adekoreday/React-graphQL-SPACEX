import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import LaunchDetails from './launchDetails';
import gql from 'graphql-tag';

const LAUNCH_QUERY=gql`
query LaunchQuery($flight_number: Int!){
launch(flight_number: $flight_number){
    flight_number
    mission_name
    launch_year
    launch_success
    rocket{
        rocket_id
        rocket_name
        rocket_type
        }        
    }
}`

 const Launch = (props) => {
    let {flight_number} = props.match.params;
    flight_number = parseInt(flight_number);
    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: { flight_number },
        pollInterval: 500
      });

    if (loading) return 'Loading...';
    if (error) {
        console.log(`Error! ${error.message}`);
    }
    console.log(data, "this is our data");
    return (
        data !== undefined ? <LaunchDetails launch={data.launch}/>
     : "oops something went wrong well try again !!"
    )
}

export default Launch;