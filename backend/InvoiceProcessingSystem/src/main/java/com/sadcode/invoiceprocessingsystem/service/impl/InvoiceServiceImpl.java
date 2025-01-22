package com.sadcode.invoiceprocessingsystem.service.impl;

import com.sadcode.invoiceprocessingsystem.dao.InvoiceDao;
import com.sadcode.invoiceprocessingsystem.model.Invoice;
import com.sadcode.invoiceprocessingsystem.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceServiceImpl implements InvoiceService {

    @Autowired
    private InvoiceDao invoiceDao;

    @Override
    public Invoice addInvoice(Invoice invoice) {
        return invoiceDao.save(invoice);
    }
}
