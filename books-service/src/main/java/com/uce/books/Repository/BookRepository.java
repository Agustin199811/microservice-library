package com.uce.books.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uce.books.Model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{
    
}
