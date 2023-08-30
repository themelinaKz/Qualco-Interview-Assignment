package com.thkouzoumpasi.qualcointerview.continents.service;

import com.thkouzoumpasi.qualcointerview.continents.mapper.ContinentMapper;
import com.thkouzoumpasi.qualcointerview.continents.model.dto.ContinentInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class ContinentService {
    @Autowired
    private final ContinentMapper continentMapper;

    public ContinentService(ContinentMapper continentMapper) {
        this.continentMapper = continentMapper;
    }

    public List<ContinentInfo> getAllContinentsInfo(String regionName, int fromYear, int toYear) {
        return continentMapper.getAllContinentsInfo(regionName, fromYear, toYear);
    }

}
