import { Link } from 'react-router-dom';
import { Book } from '../../../../domain/books';
import { OnBookSelected } from '../OnBookSelected';

export interface BookListItemProps {
  book: Book;
  onBookSelected: OnBookSelected;
}

export const BookListItem: React.FC<BookListItemProps> = ({
  book,
  onBookSelected,
}) => {
  return (
    // <div onClick={() => onBookSelected(book)}>
    <div>
      {book.title} - <span onClick={() => onBookSelected(book)}>details</span>
    </div>
  );
};
