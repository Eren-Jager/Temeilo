package com.temelio.foundation.repository;

import com.temelio.foundation.model.Nonprofit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NonprofitRepository extends JpaRepository<Nonprofit, String> {
}
