package com.temelio.foundation.controller;

import com.temelio.foundation.model.Nonprofit;
import com.temelio.foundation.service.NonprofitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/nonprofits")
public class NonprofitController {

    @Autowired
    private NonprofitService nonprofitService;

    @PostMapping
    public Nonprofit createNonprofit(@RequestBody Nonprofit nonprofit) {
        return nonprofitService.createNonprofit(nonprofit);
    }

    @GetMapping
    public List<Nonprofit> getAllNonprofits() {
        return nonprofitService.findAllNonprofits();
    }
}
