import React, { Component } from 'react';

export default class NumberInput extends Component {
    constructor(props){
        super(props);

        this.state={
            inputValue: '',
            errorMessage: true
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e){
        let value = e.target.value;
        if (/[0-9$.,]/.test(value) && !/[^0-9$.,]/.test(value)) {
            value = value.replace(/[\D]/g, '').split('');
            let pointPosition = 3;
            for (let i = 0; i < value.length; i++){
                if (i === pointPosition){
                    value.splice((-pointPosition), 0 , '.');
                    pointPosition += 4;
                    i++;
                }
            }
            value = value.join('');
            if (value.indexOf('$') === (-1)) {
                value = "$" + value;
            } else if (value.indexOf('$') !== 0) {
                value = '$' + value.replace("$", '');
            } 
            this.setState({
                inputValue: value,
                errorMessage: false
            });
            this.props.requireValue('inputNumber', value, this.state.errorMessage);

        } else {
            this.setState({
                errorMessage: true
            });
            this.props.requireValue('inputNumber', value, this.state.errorMessage);
        }        
    }

    render() {
        const errorMessage = () => {
            if (this.state.errorMessage) {
                return (
                    <div className='error'>
                        Only Numbes
                    </div>
                )
            } else {
                return (
                    <div className='succes'>
                        
                    </div>
                )
            }
        } 
        return(
            <div className="form-group">
                <label htmlFor="text">Salary</label>
                <input type="text" className="form-control" placeholder='Enter salary' value={this.state.inputValue} onChange={this.handleChange}/>
                {errorMessage()}
            </div>
        )
    }
}