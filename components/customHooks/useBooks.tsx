import { Book, BooksResponse } from "@/types/book";
import { useEffect, useState } from "react";

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://gutendex.com/books/?page=1");
        console.log("response: ", response)
        if (!response.ok) {
        //   throw new Error(`Error: ${response.status} - ${response.statusText}`);
            setError(`Error ${response.status} - ${response.statusText}`)
            setLoading(false);
            return;
    }

        const data: BooksResponse = await response.json();

        setBooks(data.results.slice(0, 10));
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(e instanceof Error ? e.message : "Error interno del servidor");
        console.log("error: ", e);
      }
    };
    fetchBooks();
  }, []);

  return{
    books,
    loading,
    error
  }
};
