import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {
    render(){
        return(
            <>
            <h5>How well are you being supported?</h5>
            <input required type="number" placeholder="1 through 5"/>
            <button >Next</button>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        reduxState
    }
}

export default connect(mapStateToProps)(Support);