package com.thkouzoumpasi.qualcointerview.continents.controller;

import com.thkouzoumpasi.qualcointerview.continents.model.dto.ContinentInfo;
import com.thkouzoumpasi.qualcointerview.continents.service.ContinentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/continents")
public class ContinentController {
    private final ContinentService continentService;

    @Autowired
    public ContinentController(ContinentService continentService) {
        this.continentService = continentService;
    }

    @GetMapping("/info")
    public List<ContinentInfo> getAllContinentsInfo(
            @RequestParam(value = "regionName", required = false) String regionName,
            @RequestParam(value = "fromYear", required = false) Integer fromYear,
            @RequestParam(value = "toYear", required = false) Integer toYear
    ) {
        if (fromYear == null) {
            fromYear = -1;
        }
        if (toYear == null) {
            toYear = -1;
        }
        return continentService.getAllContinentsInfo(regionName, fromYear, toYear);
    }
}
