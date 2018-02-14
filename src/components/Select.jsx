import React,{Component} from 'react';

export default class Select extends Component {
    constructor(props){
        super(props);

        this.state= {
            selectValue: ''
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
            <div className="form-group">
                <label>Job</label>
                <select name="job" className="form-control"  value={this.state.selectValue}  onChange={this.handleChange}>
                    <option>Choose your job</option>
                    <option value="Engenier">Engenier</option>
                    <option value="Developer">Developer</option>
                    <option value="QA">QA</option>
                    <option value="HR">HR</option>                    
                </select>
            </div>
        )
    }
}