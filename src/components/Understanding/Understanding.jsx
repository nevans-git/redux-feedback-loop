import React, { Component } from 'react';
import { connect } from 'react-redux';



class Understanding extends Component {
    render(){
        return(
            <>
            <h5>How well are you understanding the material?</h5>
            <input type="number" placeholder="1 through 5"/>
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

export default connect(mapStateToProps)(Understanding);