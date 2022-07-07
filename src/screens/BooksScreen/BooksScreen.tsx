import { useBooks } from '../../domain/books/useBooks';
import { noop } from '../../utils/noop';
import { BookList, OnBookSelected } from './BookList';

export interface BooksScreenProps {
  onBookSelected?: OnBookSelected;
}

export const BooksScreen: React.FC<BooksScreenProps> = ({
  onBookSelected = noop,
}) => {
  const { books, reload } = useBooks();
  return (
    <div>
      <h2>Books</h2>
      {books !== null ? (
        <BookList books={books} onBookSelected={onBookSelected} />
      ) : (
        <span>Loading...</span>
      )}
      <button onClick={() => reload()}>Reload</button>
    </div>
  );
};
