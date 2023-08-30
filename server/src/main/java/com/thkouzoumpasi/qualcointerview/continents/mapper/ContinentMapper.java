package com.thkouzoumpasi.qualcointerview.continents.mapper;

import com.thkouzoumpasi.qualcointerview.continents.model.dto.ContinentInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ContinentMapper {
    List<ContinentInfo> getAllContinentsInfo(String regionName, int fromYear, int toYear);
}
