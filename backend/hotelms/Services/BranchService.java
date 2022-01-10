package com.example.hotelms.Services;

import com.example.hotelms.Entities.Branch;
import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class BranchService {

    private BranchRepository branchRepository;

    @Autowired
    public BranchService (BranchRepository branchRepository) {
        this.branchRepository = branchRepository;
    }

    public List<Branch> getbranchs() {
        return branchRepository.findAll();
    }

    public Optional<Branch> getBranch(Integer branchId) {
        return branchRepository.findById(branchId);

    }

    public void addNewBranch(Branch branch) {
        branchRepository.save(branch);

    }


    public void deleteAdmin(Integer branchId) {
        branchRepository.deleteById(branchId);
    }


    public void deleteBranch(Integer branchId) {
        branchRepository.deleteById(branchId);

    }

}


