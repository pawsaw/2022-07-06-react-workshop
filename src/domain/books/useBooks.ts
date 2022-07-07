import { useState, useEffect, useCallback } from 'react';
import { useBaseUrl } from '../../api/ContextApi';
import { Book } from './Book';

export interface UseBooksResult {
  books: Book[] | null;
  reload: () => Promise<void>;
}

export const useBooks = (): UseBooksResult => {
  const [books, setBooks] = useState<Book[] | null>(null);
  const baseUrl = useBaseUrl();
  const url = `${baseUrl}/books`;
  const reload = useCallback(async () => {
    const response = await fetch(url);
    const _books = await response.json();
    setBooks(_books);
  }, [url]);

  useEffect(() => {
    reload();
  }, [reload]);

  return {
    books,
    reload: () => reload(),
  };
};
