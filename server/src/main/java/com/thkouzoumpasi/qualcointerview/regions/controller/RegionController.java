package com.thkouzoumpasi.qualcointerview.regions.controller;

import com.thkouzoumpasi.qualcointerview.regions.model.Region;
import com.thkouzoumpasi.qualcointerview.regions.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/regions")
public class RegionController {

    private final RegionService regionService;

    @Autowired
    RegionController(RegionService regionService) {
        this.regionService = regionService;
    }

    @GetMapping
    public List<Region> getAllRegions() {
        return regionService.getAllRegions();
    }
}
