import '../assets/Cards.css'
import {jokes} from '../Data/data.js';
import '../assets/emoji.scss';
import AngryBtn from '../components/AngryBtn';
import HahaBtn from '../components/HahaBtn';

function Cards(){
    return(
        <div>
        {jokes.map(j=>(
             <div className="jokes-container">
	        <div className="joke">
            <div className="joke-info">
			<h6>{j.id}</h6>
			<p><strong>{j.joke.split("\n").map((i,key) =>{
                return <div key={key}>{i}</div>;
            })}</strong></p>
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