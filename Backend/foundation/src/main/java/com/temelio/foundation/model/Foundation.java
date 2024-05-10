package com.temelio.foundation.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Foundation {
    @Id
    private String email;
    private String name;
}
