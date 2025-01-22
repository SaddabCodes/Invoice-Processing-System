package com.sadcode.invoiceprocessingsystem.dao;

import com.sadcode.invoiceprocessingsystem.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice, Long> {
}
