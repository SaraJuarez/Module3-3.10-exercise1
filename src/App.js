import React, { useState, useEffect } from 'react';
import './App.scss';
import { fetchList } from './Services/ListService';
import PeopleList from './Components/PeopleList';
import Filters from './Components/Filters';
import { Link, Route, Switch } from 'react-router-dom';
import PersonDetail from './Components/PersonDetail';


function App() {
  // en el primer estado list ponemos un useState vacío porque el map del PeopleList no funciona con un objeto no definido pero si con un array vacío hasta que recogemos los datos.
  const [list, setList] = useState([]);
  const [cities, setCities] = useState([]);
  const [sex, setSex] = useState([]);
  const [cityFilter, setCityFilter] = useState([])
  const [sexFilter, setSexFilter] = useState([])

  useEffect(() => {
    fetchList().then(data => {
      setList(data.results)
      setCities(data.results.map(result => result.location.city))
      setSex(data.results.map(result =>
        result.gender))
    })
  }, []);

  const filterCities = (ev) => {
    let selectedCity = ev.target.value;
    let checked = ev.target.checked;
    let indexofCities = cityFilter.indexOf(selectedCity)
    checked === true ? cityFilter.push(selectedCity) : cityFilter.splice(indexofCities, 1)
    setCityFilter([...cityFilter])
  }
  const filterSex = (ev) => {
    let selectedSex = ev.target.value;
    let checked = ev.target.checked;
    let indexofSex = sexFilter.indexOf(selectedSex)
    checked === true ? sexFilter.push(selectedSex) : sexFilter.splice(indexofSex, 1)
    setSexFilter([...sexFilter])
  }

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </nav>


      </header>
      <main>
        <Switch>
          <Route exact path='/' render={() =>
            < div className="App">
              <Filters cities={cities} sex={sex} cityFunction={filterCities} sexFunction={filterSex} />
              {<PeopleList sexSelected={sexFilter} citySelected={cityFilter} list={list} />}
            </div>
          }></Route>
          <Route
            path='/PersonDetail/:id'
            render={routerProps => (
              <PersonDetail list={list} match={routerProps.match}
              />
            )}
          ></Route>
        </Switch >
      </main>
    </div>
  );
}


export default App;



