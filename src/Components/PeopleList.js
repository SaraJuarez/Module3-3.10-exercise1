import React from 'react';
import Card from './Card';

function PeopleList(props) {

    console.log(props)
    let results = props.list;
    console.log(props.citySelected)
    const listHtml = results
        .filter(result => {
            if (props.citySelected.length === 0) {
                return true;
            } else {
                return props.citySelected.includes(result.location.city)
            }
            // otras maneras de hacerlo
            // return props.citySelected.length === 0 ? true : props.citySelected.includes(result.location.city)
            // return props.citySelected.includes(result.location.city) || props.citySelected.length === 0 

        })
        .filter(result => { return props.sexSelected.length === 0 ? true : props.sexSelected.includes(result.gender) })
        .map((result, index) =>
            <Card info={result} key={index} />
        )



    return (
        <div className='list'>
            {listHtml}
        </div>

    )

}

export default PeopleList;




// <div className='App__box2'>
//     <div className='App__box2--image' >
//         <img className='img' src="https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg" />
//     </div>
//     <div className='App__box2--text'>
//         <h4>Nombre</h4>
//         <p>Ciudad</p>
//         <p>Edad</p>
//     </div>
// </div> */}