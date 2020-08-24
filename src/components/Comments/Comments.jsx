import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'


class Comments extends Component {

    state = {
        newEntry: {
            comments: ''
        }
    }
    
    componentDidMount(){
        console.log('Comments is working');
        this.getComments();

    }

    getComments = () => {
        console.log('in getComments');

        axios.get('/prime_feedback').then((response) => {
            console.log('comments: ', response.feedback);
            this.props.dispatch({ type: 'SET_COMMENTS', payload: response.data})
        }).catch((error) => {
            console.log('error in GET comments: ', error);
        })
    }
    }

    handleChangeFor = ( propertyName, event) => {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                [propertyName]: event.target.value
            }
        })
    }

    handleNextBtn = () => {
        console.log('in handleNextBtn ');
    
    
    }



    render(){
        return(
            <>
            <form>
            <h5>Any comments you want to leave?</h5>
            <input required type="text" placeholder="Enter comment here!" onChange={(event) => this.handleChangeFor('comments', event)}/>
            <button onClick={this.handleNextBtn}>Next</button>
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

export default connect(mapPropsToState)(Comments);