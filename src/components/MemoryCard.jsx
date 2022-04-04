import React from "react"
import './MemoryCard.css';


class MemoryCard extends React.Component {
    constructor() {
        super()
        this.state = { isFlipped: false };
    }

    clickHandler() {
        this.setState( {
            isFlipped: !this.state.isFlipped
        } )
    };

    render() {
       let memoryCardInnerClass = "MemoryCardInner"
        
        
        return (
        <>
        <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
           <div className={
               !this.state.isFlipped
                ? memoryCardInnerClass 
                : "MemoryCardInner flipped"}
                >

                <div className="MemoryCardBack">
                    <img 
                    className="image" 
                    src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" 
                    alt="DigitalCrafts Logo">
                    </img>
                </div>
                
                <div className="MemoryCardFront">
                    ∆
                </div>
            </div>
        </div>
        </>
        );  
          
    }

    

    
}

export default MemoryCard;