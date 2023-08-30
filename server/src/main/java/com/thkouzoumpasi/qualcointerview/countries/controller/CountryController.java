package com.thkouzoumpasi.qualcointerview.countries.controller;

import com.thkouzoumpasi.qualcointerview.countries.model.Country;
import com.thkouzoumpasi.qualcointerview.countries.model.dto.CountryLanguage;
import com.thkouzoumpasi.qualcointerview.countries.model.dto.CountryWithStats;
import com.thkouzoumpasi.qualcointerview.countries.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {
    private final CountryService countryService;

    @Autowired
    CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping
    public List<Country> getAllCountries() {
        return countryService.getAllCountries();
    }

    @GetMapping("/withStats")
    public List<CountryWithStats> getAllCountriesWithStats() {
        return countryService.getAllCountriesWithStats();
    }

    @GetMapping("/languages")
    public List<CountryLanguage> getAllLanguagesForACountry(
            @RequestParam(value = "countryId") Long countryId
    ) {
        return countryService.getAllLanguagesForACountry(countryId);
    }
}
