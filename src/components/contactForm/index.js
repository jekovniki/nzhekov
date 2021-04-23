import React, {useState, useCallback} from 'react';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {feedback: '', name: 'Name', email:'jekovniki95@gmail.com'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return(
            <form>
                <h1></h1>
            </form>
        )
    }
}