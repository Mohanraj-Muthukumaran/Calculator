import React from 'react';

class Display extends React.Component{
    
    multipleDotsWarning = () => {
        return(
            <div className='display'>
                <span className='warning'>MUTIPLE DOTS WARNING</span>
            </div>
        )
    }

    invalidOperaterUsageWarning = () => {
        return(
            <div className='display'>
                <span className='warning'>INVALID OPERATOR USAGE</span>
            </div>
        )
    }

    regularDisplay = () => {
        return(
            <div className = 'display'>
                { this.props.result ? <span id='subdisplay'> ({this.props.result}) </span> : '' }
                { this.props.calc || "0"} 
            </div>
        )
    }
    
    render(){
        if(this.props.multipleDots){
            return(this.multipleDotsWarning())
        }
        else if(this.props.invalidOperatorUsage){
            return(this.invalidOperaterUsageWarning())
        }
        else{
            return(this.regularDisplay())
        }
    }

}

export default Display;
