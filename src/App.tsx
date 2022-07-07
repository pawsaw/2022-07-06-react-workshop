import { useState } from 'react';
import './App.css';
import { BookList } from './components/BookList';
import { Counter2, CounterContextProvider } from './components/Counter2';
import { useBooks } from './domain/books/useBooks';
// import { books } from './data/books';

function App() {
  // ...

  const { books, reload } = useBooks();

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
      <div className="App">
        {books !== null ? (
          <BookList
            books={books}
            onBookSelected={(book) => alert(book.price)}
          />
        ) : (
          <span>Loading...</span>
        )}
      </div>
      <Counter2 />
      <button onClick={() => reload()}>Reload</button>
    </CounterContextProvider>
  );
}

export default App;
