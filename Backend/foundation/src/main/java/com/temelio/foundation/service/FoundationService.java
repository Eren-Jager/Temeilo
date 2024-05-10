package com.temelio.foundation.service;

import com.temelio.foundation.model.Foundation;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FoundationService {

    Foundation saveFoundation(Foundation foundation);

    List<Foundation> getAllFoundations();

} 
