import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props){
        super(props);

        this.state={
            inputValue: ''
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e){
        this.setState({
            inputValue : e.target.value
        })
    }

    render() {
        return(
            <div>
                <input type="text" placeholder='Enter your name' value={this.state.inputValue} onChange={this.handleChange}/>
            </div>
        )
    }
}