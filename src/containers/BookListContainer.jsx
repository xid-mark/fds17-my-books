import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/BookList';
import { getBooksPromise } from '../redux/modules/books';

export default function BookListContainer({ token }) {
  // redux 와의 연결고리
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  const dispatch = useDispatch();

  const getBooks = useCallback(async () => {
    dispatch(getBooksPromise(token));
  }, [dispatch, token]);

  return (
    <BookList
      books={books}
      loading={loading}
      error={error}
      getBooks={getBooks}
    />
  );
}
