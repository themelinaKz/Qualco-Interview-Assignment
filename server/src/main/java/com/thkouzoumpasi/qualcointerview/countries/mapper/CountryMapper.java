package com.thkouzoumpasi.qualcointerview.countries.mapper;

import com.thkouzoumpasi.qualcointerview.countries.model.Country;
import com.thkouzoumpasi.qualcointerview.countries.model.dto.CountryLanguage;
import com.thkouzoumpasi.qualcointerview.countries.model.dto.CountryWithStats;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CountryMapper {
    List<Country> getAllCountries();
    List<CountryWithStats> getAllCountriesWithStats();
    List<CountryLanguage> getAllLanguagesForACountry(Long countryId);
}
