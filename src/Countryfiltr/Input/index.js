import { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
    }
    
   
    handleInput = e => {
        this.props.clearSelected()
        this.setState({ 
            inputValue: e.target.value
             })
        this.props.searchInput(e.target.value);
        
    }

    render() {
        return (
            <input 
            placeholder="input country" 
            className= " inputValue show" 
            value={ this.props.selectedCountry || this.state.inputValue } 
            onChange={this.handleInput} 
            />
        )
    }
}
export default Input;