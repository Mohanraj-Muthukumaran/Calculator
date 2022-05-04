import React from 'react';
import Exception from './Exception';

class Display extends React.Component{

    warn = (type) => {
        return(
            <div className='display'>
                <span className='warning'>{type}</span>
            </div>
        )
    }

    display = () => {
        return(
            <div className = 'display'>
                { this.props.result ? <span id='subdisplay'>({this.props.result})</span> : '' }
                { this.props.calc || "0"} 
            </div>
        )
    }
    
    render(){
        if(this.props.multipleDots){
            return(this.warn(Exception.MULTIPLE_DOTS_WARNING))
        }
        else if(this.props.invalidOperatorUsage){
            return(this.warn(Exception.INVALID_OPERATOR_USAGE))
        }
        else{
            return(this.display())
        }
    }

}

export default Display;
