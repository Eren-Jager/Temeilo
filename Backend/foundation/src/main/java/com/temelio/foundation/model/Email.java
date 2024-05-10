package com.temelio.foundation.model;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Email {
    private Foundation foundation;
    private List<Nonprofit> nonprofits;
}
