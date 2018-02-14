import React,{Component} from 'react';
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import NumberInput from "./NumberInput";

export default class Form extends Component {
    constructor(props){
        super(props);

        this.state= {
            value: 'Choose your job'
        }
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <form action="#" onSubmit={this.handleSubmit}>
                <Input />
                <Select />
                <Textarea />
                <NumberInput />
                <button>Submit</button>
            </form>
        )
    }
}