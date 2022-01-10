package com.example.hotelms.controller;

import com.example.hotelms.Entities.Branch;
import com.example.hotelms.Services.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping (path ="api/branch")
public class BranchController {
    private BranchService branchService;

    @Autowired
    public BranchController(BranchService branchService) {
        this.branchService = branchService;
    }

    @GetMapping
    public List<Branch> getBranchs() {
        return branchService.getbranchs();
    }

    @GetMapping(path = "{branchId}")
    public Optional<Branch> getBranch(@PathVariable(name = "branchId") Integer branchId) {
        return branchService.getBranch(branchId);
    }

    @PostMapping(path = "add")
    public void registerNewBranch(@RequestBody Branch branch) {
        branchService.addNewBranch(branch);
    }

    @DeleteMapping(path = "delete/{branchId}")
    public void deleteBranch(@PathVariable ("branchId") Integer branchId){
        branchService.deleteBranch(branchId);
    }
}

