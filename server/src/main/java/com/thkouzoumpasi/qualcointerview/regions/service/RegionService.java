package com.thkouzoumpasi.qualcointerview.regions.service;

import com.thkouzoumpasi.qualcointerview.regions.mapper.RegionMapper;
import com.thkouzoumpasi.qualcointerview.regions.model.Region;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegionService {

    private final RegionMapper regionMapper;

    @Autowired
    RegionService(RegionMapper regionMapper) {
        this.regionMapper = regionMapper;
    }

    public List<Region> getAllRegions() {
        return regionMapper.getAllRegions();
    }
}
