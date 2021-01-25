import { render } from '@testing-library/react';
import react from 'react';
import Cards from './Cards';
import '../assets/Jokes.css';

function Jokes(){
    return(
        <div>
        <h1>JavaScript jokes</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt="js logo"></img>
        <Cards/>
        </div>
    )
}
export default Jokes