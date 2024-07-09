package com.uce.loan.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uce.loan.Model.Loan;
import com.uce.loan.Repository.LoanRepository;

@Service
public class LoanService {
    @Autowired
    private LoanRepository loanRepository;

    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    public Loan createLoan(Loan loan) {
        return loanRepository.save(loan);
    }

    public Loan returnLoan(Long id) {
        Loan loan = loanRepository.findById(id).orElse(null);
        if (loan != null) {
            loan.setReturned(true);
            loanRepository.save(loan);
        }
        return loan;
    }
}
