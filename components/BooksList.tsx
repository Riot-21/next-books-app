"use client";

import { LoadingPage } from "./LoadingPage";
import { ErrorPage } from "./ErrorPage";
import { useBooks } from "./customHooks/useBooks";

export default function BooksList() {
  const { books, loading, error } = useBooks();

  if (loading) return <LoadingPage></LoadingPage>;

  if (error) return <ErrorPage error={error}></ErrorPage>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Lista de Libros ({books.length})
      </h2>

      <div className="grid gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {book.title}
            </h3>
            <p className="text-gray-600">
              <span className="font-medium">Autor: </span>
              {book.authors.length > 0
                ? book.authors[0].name
                : "Autor desconocido"}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              ID: {book.id} | Descargas: {book.download_count.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
