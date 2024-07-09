package com.uce.loan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uce.loan.Model.Loan;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {
    
}
