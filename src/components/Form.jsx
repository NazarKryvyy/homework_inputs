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
            },
            canSubmit : false

        }; 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateFormValue = this.updateFormValue.bind(this);
    }

    handleSubmit(e){        
        e.preventDefault();
        let canSubmit = this.state.canSubmit;
        for (let permission in this.state.formErrors){
            if (this.state.formErrors[permission]){
                canSubmit = false;
                return false;
            }
            canSubmit = true;
        }
        this.setState({
            canSubmit: canSubmit
        })
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
        const canSubmit = this.state.canSubmit
        const formError = () => {
            if (canSubmit){
                return (
                    <div className="success">Validate succesfully</div>
                )
            }else{
                return (
                    <div className="error">Enter all fields</div>
                )
            }
        }

        return(
            <form action="#" onSubmit={this.handleSubmit}>
                <Input requireValue={this.updateFormValue} />
                <Select requireValue={this.updateFormValue} />
                <Textarea requireValue={this.updateFormValue} />
                <NumberInput requireValue={this.updateFormValue}/>
                <button>Submit</button>
                {formError()}
            </form>
        )
    }
}