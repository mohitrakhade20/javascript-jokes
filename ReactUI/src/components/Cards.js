import react from 'react';
import '../assets/Cards.css'
import {jokes} from '../Data/data.js';
import '../assets/emoji.scss';
import AngryBtn from '../components/AngryBtn';
import HahaBtn from '../components/HahaBtn';

function Cards() {
    return(
        <div class="jokes-container">
            {jokes.map(j=>(
                <div className="joke">
                    <div className="joke-info">
                        <h6>{j.id}</h6>
                        <p><strong>{j.joke.split("\n").map((i,key) =>{
                            return <div key={key}>{i}</div>;
                        })}</strong></p>
                        <div className="emoji-container">
                            <HahaBtn/>
                            <AngryBtn/>
                        </div>
                    </div>
                </div>
            ))};
        </div>
    )
}
export default Cards;
