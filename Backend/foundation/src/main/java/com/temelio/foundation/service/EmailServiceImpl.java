package com.temelio.foundation.service;

import com.temelio.foundation.model.EmailHistory;
import com.temelio.foundation.model.Foundation;
import com.temelio.foundation.model.Nonprofit;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);

    private List<EmailHistory> emailHistoryList = new ArrayList<>();

    @Override
    public void sendEmail(Foundation foundation, Nonprofit nonprofit) {
        String emailBody = String.format(
    "Sending money to nonprofit %s (%s) at %s on %s from %s (%s)",
    nonprofit.getName(),
    nonprofit.getEmail(),
    nonprofit.getAddress(),
    Instant.now(),
    foundation.getName(),
    foundation.getEmail()
);
        EmailHistory emailHistory = new EmailHistory();
        emailHistory.setNonprofit(nonprofit);
        emailHistory.setMessage(emailBody);
        logger.info(emailBody);
        emailHistoryList.add(emailHistory);
    }

    @Override
    public List<EmailHistory> getEmailHistory() {
        return emailHistoryList;
    }
}
