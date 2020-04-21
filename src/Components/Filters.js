import React from 'react';

function Filters(props) {
    let filtredCities = Array.from(new Set(props.cities))
    let filtredSex = Array.from(new Set(props.sex))


    const citiesHtml = filtredCities.map((city, index) =>
        <label >
            <input value={city} onClick={props.cityFunction} key={index} type='checkbox' /> {city}
        </label>
    )
    const sexHtml = filtredSex.map((sex, index) =>
        <label>
            <input value={sex} onClick={props.sexFunction} key={sex} type='checkbox' />{sex}
        </label>
    )




    return (
        <div className='App__box1'>
            <h3>Filtros</h3>
            <h4>Sexo</h4>
            {sexHtml}
            <h4>Ciudad</h4>
            {citiesHtml}
        </div>
    )
}

export default Filters;