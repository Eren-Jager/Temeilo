package com.temelio.foundation.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.temelio.foundation.model.Email;
import com.temelio.foundation.model.EmailHistory;
import com.temelio.foundation.model.Nonprofit;
import com.temelio.foundation.service.EmailService;

@CrossOrigin
@RestController
@RequestMapping("/api/emails")
public class EmailController {
    @Autowired
    private EmailService emailService;

    @PostMapping
    public String sendEmails(@RequestBody Email email) {
        for (Nonprofit nonprofit : email.getNonprofits()) {
            emailService.sendEmail(email.getFoundation(), nonprofit);
        }
        return "Emails sent successfully";
    }

    @GetMapping
    public List<EmailHistory> getEmailHistory() {
        return emailService.getEmailHistory();
    }
}
