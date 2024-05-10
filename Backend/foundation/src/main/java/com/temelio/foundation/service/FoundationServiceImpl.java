package com.temelio.foundation.service;

import com.temelio.foundation.model.Foundation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class FoundationServiceImpl {
    
    private List<Foundation> foundationList = new ArrayList<>();

    public Foundation saveFoundation(Foundation foundation) {
        System.out.println(foundation.getEmail());
        foundationList.add(foundation);
        return foundation;
    }

    public List<Foundation> getAllFoundations() {
        return foundationList;
    }
}
