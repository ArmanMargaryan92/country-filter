import { Component } from "react";

class Country extends Component{
    constructor(props){
        super(props)
    }
    onClick= ()=>{
        this.props.selectCountry(this.props.name)
    }
    render(){
        return(
            <div onClick={this.onClick} className= "show CountryItem" >
                <img  className="flag show" src={this.props.flag} alt={this.props.name}/>
                <span className="countryName show">{this.props.name}</span>
            </div>
        )
    }
}

export default Country
