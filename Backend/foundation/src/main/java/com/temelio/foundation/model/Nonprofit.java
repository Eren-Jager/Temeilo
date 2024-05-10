package com.temelio.foundation.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
public class Nonprofit {
    @Id
    private String email;
    private String name;
    private String address;
} 
