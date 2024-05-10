package com.temelio.foundation.controller;

import com.temelio.foundation.model.Foundation;
import com.temelio.foundation.service.FoundationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/foundations")
public class FoundationController {
    
    @Autowired
    private FoundationServiceImpl foundationService;

    @PostMapping
    public Foundation createFoundation(@RequestBody Foundation foundation) {
        return foundationService.saveFoundation(foundation);
    }

    @GetMapping
    public List<Foundation> getAllFoundations() {
        return foundationService.getAllFoundations();
    }
}
