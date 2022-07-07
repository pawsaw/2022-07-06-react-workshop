import { useState } from 'react';
import { NavLink, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { CounterContextProvider } from './components/Counter2';
import { BookDetailsScreen } from './screens/BookDetailsScreen';
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
  const history = useHistory();

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
        <Route path="/books/:isbn" component={BookDetailsScreen} />
        <Route
          path="/books"
          render={() => (
            <BooksScreen
              onBookSelected={(book) => {
                history.push(`/books/${book.id}`);
              }}
            />
          )}
        />
        <Redirect to="/books" />
      </Switch>
    </CounterContextProvider>
  );
}

export default App;
