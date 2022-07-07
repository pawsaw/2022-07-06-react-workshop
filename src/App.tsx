import { useState } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { CounterContextProvider } from './components/Counter2';
import { BooksScreen } from './screens/BooksScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';
// import { books } from './data/books';

const AppNavigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/playground" activeClassName="active">
          Playground
        </NavLink>
      </li>
      <li>
        <NavLink to="/books" activeClassName="active">
          Books
        </NavLink>
      </li>
    </ul>
  </nav>
);

function App() {
  // ...

  const [count, setCount] = useState(0);

  return (
    <CounterContextProvider
      counter={{
        count,
        increment: () => {
          setCount((count) => count + 1);
        },
        decrement: () => {
          setCount((count) => count - 1);
        },
      }}
    >
      <AppNavigation />
      <Switch>
        <Route path="/playground" component={PlaygroundScreen} />
        <Route path="/books" component={BooksScreen} />
        <Redirect to="/books" />
      </Switch>
    </CounterContextProvider>
  );
}

export default App;
