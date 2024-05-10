package com.temelio.foundation.service;

import java.util.List;
import com.temelio.foundation.model.Nonprofit;
import com.temelio.foundation.model.EmailHistory;
import com.temelio.foundation.model.Foundation;

public interface EmailService {
    void sendEmail(Foundation foundation, Nonprofit nonprofit);

    List<EmailHistory> getEmailHistory();
}
