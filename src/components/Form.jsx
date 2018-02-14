import React,{Component} from 'react';
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import NumberInput from "./NumberInput";

export default class Form extends Component {
    constructor(props){
        super(props);

        this.state= {
            formValue : {
                input: '',
                select: '',
                textarea: '',
                inputNumber: ''
            },
            formErrors : {
                input: true,
                select: true,
                textarea: true,
                inputNumber: true
            }

        }; 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateFormValue = this.updateFormValue.bind(this);
    }

    handleSubmit(e){        
        e.preventDefault();
        let canSubmit = true;
        for (let permission in this.state.formErrors){
            if (this.state.formErrors[permission]){
                canSubmit = false;
                return false;
            }
        }
        if (canSubmit){
            console.log(this.state.formValue);
        }
        
    }
    updateFormValue (formItem, value, error){
        let newValue = this.state.formValue;
        let errors = this.state.formErrors;
        newValue[`${formItem}`] = value;
        errors[`${formItem}`] = error;
        this.setState({
            formValue: newValue,
            formErrors: errors
        });
    }

    render(){
        return(
            <form action="#" onSubmit={this.handleSubmit}>
                <Input requireValue={this.updateFormValue} />
                <Select requireValue={this.updateFormValue} />
                <Textarea requireValue={this.updateFormValue} />
                <NumberInput requireValue={this.updateFormValue}/>
                <button>Submit</button>
            </form>
        )
    }
}