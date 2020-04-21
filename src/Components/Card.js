import React from 'react';
import { Link } from "react-router-dom";

function Card(props) {

    return (

        <div className='App__box2'>
            <div className='App__box2--image' >
                <img alt='foto de perfil' className='img' src={props.info.picture.medium} />
            </div>
            <div className='App__box2--text'>
                <h4>{props.info.name.first} {props.info.name.last}</h4>
                <p>{props.info.location.city}</p>
                <p>{props.info.dob.age}</p>
                <Link to={`/PersonDetail/` + props.info.login.uuid}>Más info</Link>
            </div>
        </div>

    )
}

export default Card;