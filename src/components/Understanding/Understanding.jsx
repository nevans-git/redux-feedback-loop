import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';





class Understanding extends Component {

    state = {
        newEntry: {
            understanding: ''
        }
    }
    componentDidMount(){
        console.log('Understanding is working');
        this.getUnderstanding();

    }

    handleNextBtn = () => {
        console.log('in handleNextBtn ');
    
    
    }

    getUnderstanding = () => {
        console.log('in getUnderstanding');

        axios.get('/prime_feedback').then((response) => {
            console.log('understanding: ', response.feedback);
            this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: response.data})
        }).catch((error) => {
            console.log('error in GET understanding: ', error);
        })
    }

    handleChangeFor = ( propertyName, event) => {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                [propertyName]: event.target.value
            }
        })
    }

    render(){
        return(
            <>
            <form>
            <h5>How well are you understanding the material?</h5>
            <input type="number" placeholder="1 through 5" onChange={(event) => this.handleChangeFor('understanding', event)}/>
            <button onClick={this.handleNextBtn}>Next</button>
            </form>
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