import { useContext } from 'react';
import { Book } from '../../domain/books';
import { noop } from '../../utils/noop';
import { useCounter } from '../Counter2';
import { BookListItem } from './BookListItem/BookListItem';
import { OnBookSelected } from './OnBookSelected';

export interface BookListProps {
  books: Book[];
  onBookSelected?: OnBookSelected;
}

export const BookList: React.FC<BookListProps> = ({
  books,
  onBookSelected = noop,
}) => {
  const { count } = useCounter();
  return (
    <div>
      {books.map((book) => (
        <BookListItem
          key={book.id}
          book={book}
          onBookSelected={onBookSelected}
        />
      ))}
      Counter: {count}
    </div>
  );
};
