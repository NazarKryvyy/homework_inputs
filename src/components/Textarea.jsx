import React,{Component} from 'react';

export default class Textarea extends Component {
    constructor(props){
        super(props);

        this.state= {
            value: 'Choose your job'
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e){
        e.preventDefault();
        const value = e.target.value;
        this.setState({
            value : value
        });
    }

    render(){
        return(
            <div>
               <textarea value={this.state.value} onChange={this.handleChange} />
            </div>
        )
    }
}