package com.example.oblig2webprog;

public class Biletter {

    private String film;

    private String fornavn;
    private String etternavn;
    private int antall;
    private String epost;
    private String telefonnr;


    public Biletter(String film, String fornavn, String epost, String etternavn, String telefonnr, int antall){
        this.film =film;
        this.fornavn=fornavn;
        this.etternavn=etternavn;
        this.telefonnr=telefonnr;
        this.antall=antall;
        this.epost=epost;
    }

    public int getAntall() {
        return antall;
    }

    public String getEpost() {
        return epost;
    }

    public String getFornavn() {
        return fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public String getFilm() {
        return film;
    }

    public String getTelefonnr(){
        return  telefonnr;
    }

    public void setAntall(){
        this.antall=antall;
    }

    public void setFilm(){
        this.film=film;
    }

    public void setFornavn(){
        this.fornavn=fornavn;
    }
    public void setEtternavn(){
        this.etternavn=etternavn;
    }
    public void setEpost(){
        this.epost=epost;
    }
    public void setTelefonnr(){
        this.telefonnr=telefonnr;
    }
}
