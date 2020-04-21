import React, { useState, useEffect } from 'react';
import './App.scss';
import { fetchList } from './Services/ListService';
import PeopleList from './Components/PeopleList';
import Filters from './Components/Filters';

// let defaultList = {}

// const results = fetch("https://randomuser.me/api/?results=50")
//   .then((response) => response.json())
//   .then((data) => {
//     defaultList = data;
//   });

function App() {

    const [list, setList] = useState([]);
    const [cities, setCities] = useState();
    // const [loading, setLoading] = useState(true)
    // setTimeout(() => { setList(defaultList); setLoading(false) }, 2000);

    useEffect(() => {
        fetchList().then(data => {
            setList(data.results)
            setCities(data.results.map(result => result.location.city))
        })
    }, []);




    //   const listHtml = results.map(result =>
    //     <Card info={result} key={result.location.postcode} />
    // )

    // const fetchNewList = () => {
    //   fetchList()
    //     .then(data => {
    //       setList(data)
    //     });
    // }

    return (
        <div className="App">
            {/* <button onClick={fetchNewList} className='button'>Reset</button> */}
            <Filters cities={cities} />
            {<PeopleList list={list} />}
        </div>
    );
}


export default App;



