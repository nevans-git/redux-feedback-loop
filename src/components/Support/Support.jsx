import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Support extends Component {

    state = {
        newEntry: {
            support: ''
        }
    }

    componentDidMount() {
        console.log('Support is working');
        this.getSupport();
    }

    getSupport = () => {
        axios.get('/prime_feedback').then((response) => {
            console.log('support: ', response.data);
            this.props.dispatch({ type: 'SET_SUPPORT', payload: response.data })
        }).catch((error) => {
            console.log('error in GET support: ', error);
        })
    }

    handleNextBtnSupport = () => {
        console.log('in handleNextBtnSupport');


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
            <h5>How well are you being supported?</h5>
            <input required type="number" placeholder="1 through 5" onChange={(event) => this.handleChangeFor('support', event)}/>
            <button onClick={this.handleNextBtnSupport}>Next</button>
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

export default connect(mapStateToProps)(Support);