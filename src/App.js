import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import allCountries from './countries.json';
import React from 'react';


class App extends React.Component {
  state = {
    countries: allCountries
  }

  render () {
    return (
    <div className="App">
      <Navbar />
      <CountriesList countries={this.state.countries}/>
      <main className="content">
          <Switch>
            <Route path="/:cca3" render={(props) => <CountryDetails {...props} countries={this.state.countries} />  }/>
          </Switch>
        </main>
    </div>
  )}
}

export default App;
