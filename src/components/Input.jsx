import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props){
        super(props);

        this.state={
            inputValue: '',
            errorMessage : false
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e){
        const value = e.target.value;
        if (!/[0-9_\-=+]/.test(value)){
            this.setState({
                inputValue: value,
                errorMessage: false
            });

            this.props.requireValue('input', value, this.state.errorMessage);

        } else{
            this.setState({
                errorMessage: true
            });
            this.props.requireValue('input', value, this.state.errorMessage);
        }        
    }

    render() {
        const errorMessage  = () =>{
            if(this.state.errorMessage){
                return (
                    <div className='error'>
                        Only Text
                    </div>
                )
            }else {
                return (
                    <div className='succes'>
                    </div>
                )
            }
        } 
        
        return(
            <div className="form-group">
                <label htmlFor="text">Name</label>
                <input type="text" className="form-control" placeholder='Enter your name' value={this.state.inputValue} onChange={this.handleChange}/>
                {errorMessage()}
            </div>
        )
    }
}