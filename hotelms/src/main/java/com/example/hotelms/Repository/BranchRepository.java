package com.example.hotelms.Repository;

import com.example.hotelms.Entities.Branch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BranchRepository  extends JpaRepository<Branch,Integer> {
}
