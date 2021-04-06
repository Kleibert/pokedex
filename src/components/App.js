import '../styles/sass/aplication.sass';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import {Router,Switch, Route, Redirect} from 'react-router-dom';
import history from '../history';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Router history={history}>
      <Header/>
      
      <main className="content main">        
        <Switch>
          <Route path={"/"} exact component={PokemonList} />
          <Route path={"/pokemon/:pokemon"} component={PokemonDetails} />
          <Redirect to={"/"} />
        </Switch>       
      </main>
      </Router >
    </div>
  );
}

export default App;
