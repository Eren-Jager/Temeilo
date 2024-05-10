package com.temelio.foundation.service;

import com.temelio.foundation.model.Nonprofit;

import java.util.List;

public interface NonprofitService {
    
        Nonprofit createNonprofit(Nonprofit nonprofit);
        List<Nonprofit> findAllNonprofits();
}
