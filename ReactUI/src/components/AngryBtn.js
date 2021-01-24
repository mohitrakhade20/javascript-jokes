import react from 'react';
import '../assets/emoji.scss';
import '../assets/Cards.css'

//var counter = 0;
class AngryBtn extends react.Component{
    constructor(){
        super();
        this.state = {
            unclicked:true,
            counter:0
        }
    }

    changeButtonState = ()=>{
        this.setState({unclicked: !this.state.unclicked})
        this.setState({counter: Number(!this.state.counter)})
    }
    render(){
        return(
                <button className="btn" onClick = { () => {this.changeButtonState()}}>
                    <div className="emoji  emoji--angry">
                        <div className="emoji__face">
                                <div className="emoji__eyebrows"></div>
                                <div className="emoji__eyes"></div>
                                <div className="emoji__mouth"></div>
                                {this.state.counter}
                        </div>
                    </div> 
                    </button>
		
            
            
        )
    }
}

export default AngryBtn;