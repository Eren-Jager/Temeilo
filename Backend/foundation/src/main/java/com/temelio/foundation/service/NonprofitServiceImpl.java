package com.temelio.foundation.service;

import com.temelio.foundation.model.Nonprofit;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class NonprofitServiceImpl implements NonprofitService {
    
    private List<Nonprofit> nonprofitList = new ArrayList<>();

    @Override
    public Nonprofit createNonprofit(Nonprofit nonprofit) {
        nonprofitList.add(nonprofit);
        return nonprofit;
    }

    @Override
    public List<Nonprofit> findAllNonprofits() {
        return nonprofitList;
    }
}
