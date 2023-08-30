package com.thkouzoumpasi.qualcointerview.countries.service;

import com.thkouzoumpasi.qualcointerview.countries.mapper.CountryMapper;
import com.thkouzoumpasi.qualcointerview.countries.model.Country;
import com.thkouzoumpasi.qualcointerview.countries.model.dto.CountryLanguage;
import com.thkouzoumpasi.qualcointerview.countries.model.dto.CountryWithStats;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    private final CountryMapper countryMapper;

    @Autowired
    CountryService(CountryMapper countryMapper) {
        this.countryMapper = countryMapper;
    }

    public List<Country> getAllCountries() {
        return countryMapper.getAllCountries();
    }

    public List<CountryWithStats> getAllCountriesWithStats() {
        return countryMapper.getAllCountriesWithStats();
    }

    public List<CountryLanguage> getAllLanguagesForACountry(Long countryId) {
        return countryMapper.getAllLanguagesForACountry(countryId);
    }
}
