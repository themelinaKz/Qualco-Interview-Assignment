package com.thkouzoumpasi.qualcointerview.countries.model.dto;

public class CountryLanguage {
    Long id;
    String language;
    Boolean official;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Boolean getOfficial() {
        return official;
    }

    public void setOfficial(Boolean official) {
        this.official = official;
    }
}
