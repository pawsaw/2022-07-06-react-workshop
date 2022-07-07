import { useBooks } from '../../domain/books/useBooks';
import { BookList } from './BookList';

export const BooksScreen: React.FC = () => {
  const { books, reload } = useBooks();
  return (
    <div>
      <h2>Books</h2>
      {books !== null ? (
        <BookList books={books} onBookSelected={(book) => alert(book.price)} />
      ) : (
        <span>Loading...</span>
      )}
      <button onClick={() => reload()}>Reload</button>
    </div>
  );
};
