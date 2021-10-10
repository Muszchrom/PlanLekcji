import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Tile from './components/Tile.js';
import Header from './components/Header.js';
import planLekcji from './PlanLekcji';
import Info from './components/Info';

function App() {
  const getCurrentDayName = () => {
    const dniTygodnia = [
      'poniedzialek',
      'wtorek',
      'sroda',
      'czwartek',
      'piatek'
    ]
    const date = new Date();
    if (date.getDay() + 0 <= 5) {
      const dzienTygodnia = dniTygodnia[date.getDay() - 1];
      if (!(dzienTygodnia)) {
        return 'poniedzialek';
      }
      return dzienTygodnia;
    }
    return 'poniedzialek';
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/poniedzialek">
            {planLekcji.poniedzialek.map((item, index) => {
              return (
                <Tile lekcja={item} key={index}/>
              )
            })}
          </Route>
          <Route path="/wtorek">
            {planLekcji.wtorek.map((item, index) => {
              return (
                <Tile lekcja={item} key={index}/>
              )
            })}
          </Route>
          <Route path="/sroda">
            {planLekcji.sroda.map((item, index) => {
              return (
                <Tile lekcja={item} key={index}/>
              )
            })}
          </Route>
          <Route path="/czwartek">
            {planLekcji.czwartek.map((item, index) => {
              return (
                <Tile lekcja={item} key={index}/>
              )
            })}
          </Route>
          <Route path="/piatek">
            {planLekcji.piatek.map((item, index) => {
              return (
                <Tile lekcja={item} key={index}/>
              )
            })}
          </Route>
          <Route>
            <Redirect to={getCurrentDayName()} />
          </Route>
        </Switch>
        <Info />
      </Router>
    </div>
  );
}

export default App;
