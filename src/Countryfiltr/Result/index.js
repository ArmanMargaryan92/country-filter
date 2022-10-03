import { Component } from "react";
import Country from "../country";
import country from "../country";


class Result extends Component{
   
    render(){
        return(
            <div className= {this.props.hideclass + "show resultClass"}>
                {this.props.data.map(item=>{
                    return <Country
                            selectCountry={this.props.selectCountry} 
                            key={item.name} 
                            name={item.name} 
                            flag={item.img}/>
                })}
            </div>
        )
    }
}
export default Result;