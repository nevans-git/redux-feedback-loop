import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';



class Feeling extends Component {

    state = {
        newEntry: {
            feeling: ''
        }
    }

    // getting data on page load
    componentDidMount(){
        console.log('Feeling is working');
        this.getFeeling();
    }

    handleNextBtn = () => {
        console.log('in handleNextBtn ');

    }

    // made to handle inputs
    handleChangeFor = ( propertyName, event) => {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                [propertyName]: event.target.value
            }
        })
    }

    // getting feeling data
    getFeeling = () => {
        axios.get('/prime_feedback').then((response) => {
            console.log('feeling: ', response.data);
            this.props.dispatch({ type: 'SET_FEELING', payload: response.data});

        }).catch((error) => {
            console.log('error in GET feeling', error);
        })
    }

    render(){
        return(
            <>
            <form>
            <h5>How are you feeling today?</h5>
            <input required type="number" placeholder="1 through 5" onChange={(event) => this.handleChangeFor('feeling', event)}/>
            <button >Next</button>
            </form>
            </>
        )
    }
}


const mapPropsToState = (reduxState) => {
    return{
        reduxState
    }
} 


export default connect(mapPropsToState)(Feeling);