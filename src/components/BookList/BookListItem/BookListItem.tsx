import { Book } from '../../../domain/books';

export interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  return <div>{book.title}</div>;
};
