import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FavCoffee2 from './components/FavCoffee2'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />

            </Route>
            <Route exact path='/favorite'>
              <FavCoffee2 />

            </Route>

          </Switch>
        </BrowserRouter>




      </div>
    )
  }
}

export default App

