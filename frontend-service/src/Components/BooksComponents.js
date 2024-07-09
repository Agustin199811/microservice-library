import React, { useEffect, useState } from "react";
import libraryServiceInstance from "../Service/LibraryService";

export default function BooksComponents() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await libraryServiceInstance.getAllBooks();
      console.log(response.data);
      setBooks(response.data); // Actualiza el estado con los datos recibidos
    } catch (error) {
      setError(error.message); // Maneja el error estableciendo el estado de error
      console.error("Error fetching customers:", error);
    }
  };

  return (
    <div>
      {error && <p>Error fetching books: {error}</p>}
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.author}</li>
        ))}
      </ul>
    </div>
  );
}
