import React,{Component} from 'react';

export default class Select extends Component {
    constructor(props){
        super(props);

        this.state= {
            selectValue: 'Choose your job'
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e){
        const value = e.target.value;
        this.setState({
            selectValue : value
        });
    }

    render(){
        return(
            <div>
                <select name="job" value={this.state.selectValue}  onChange={this.handleChange}>
                    <option value="Engenier">Engenier</option>
                    <option value="Developer">Developer</option>
                    <option value="QA">QA</option>
                    <option value="HR">HR</option>                    
                </select>
            </div>
        )
    }
}