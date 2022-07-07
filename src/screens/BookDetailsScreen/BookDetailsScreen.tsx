import { useParams } from 'react-router-dom';

export interface BookDetailsScreenParams {
  isbn: string;
}

export const BookDetailsScreen: React.FC = () => {
  const { isbn } = useParams<BookDetailsScreenParams>();

  return (
    <div>
      <h2>Book Details for {isbn}</h2>
    </div>
  );
};
