import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

// import { FETCH_SMURF } from '../actions';
import { getSmurf, postSmurf } from '../actions ';

 const Smurf = props => {
//    const handleChanges = e => {
        
//       };
    
    return (
        <div>
        <h1>What's a Smurf?</h1>
        {!props.smurf && !props.isFetching && <p> Go Smurf Ya self!</p> }
        {props.isFetching && (
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
        {props.smurf && <p>{props.smurf.smurf}</p>}
        <button onClick={props.getSmurf}>Get it.</button>
            <div>
            <input
          type="text"
          value={props.newSmurf}
          placeholder="Add new smurf"
        />
        <button onClick={postSmurf}>Add smurf</button>
            
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { getSmurf }
)(Smurf);