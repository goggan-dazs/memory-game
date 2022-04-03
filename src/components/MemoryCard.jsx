import React from "react"
import './MemoryCard.css';


class MemoryCard extends React.Component {
    render() {
       let memoryCardInnerClass = "MemoryCardInner"
        
       if (this.state.isFlipped) {
          return  memoryCardInnerClass += "flipped";
        }
        
        return (
        <>
        <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
           <div className={!this.props.isFlipped ? memoryCardInnerClass : "MemoryCardInner flipped"}>

                <div className="MemoryCardBack">
                    <img className="image" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="DigitalCrafts Logo"></img>
                </div>
                <div className="MemoryCardFront">
                    ∆
                </div>
            </div>
        </div>
        </>
        );    
    }

    clickHandler() {
        this.setState( {isFlipped: !this.state.isFlipped} )
    };

    constructor() {
        super();
        this.state = { isFlipped: false };
    }
}

export default MemoryCard;