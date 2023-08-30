package com.thkouzoumpasi.qualcointerview.regions.mapper;

import com.thkouzoumpasi.qualcointerview.regions.model.Region;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RegionMapper {
    public List<Region> getAllRegions();
}
