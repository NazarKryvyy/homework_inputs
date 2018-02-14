import React,{Component} from 'react';

export default class Textarea extends Component {
    constructor(props){
        super(props);

        this.state= {
            value: '',
            errorMessage: true
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e){
        e.preventDefault();
        const value = e.target.value.replace(/  +/g, ' ');
        this.setState({
            value : value
        });
        if (value.length > 99){
            this.setState({
                errorMessage: false
            });
            this.props.requireValue('textarea', value, this.state.errorMessage);
        }else{
            this.setState({
                errorMessage: true
            });
            this.props.requireValue('textarea', value, this.state.errorMessage);
        }
    }

    render(){
        const errorMessage = ()=>{
            if (this.state.errorMessage){
                return(
                    <div className="error">
                        Enter at least 100 symbols.
                    </div>
                )
            }
        }

        return(
            <div className="form-group">
                <textarea value={this.state.value} placeholder='Describe your job' className="form-control" onChange={this.handleChange} />
                {errorMessage()}
            </div>
        )
    }
}