package com.example.oblig2webprog;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;
@RestController
public class FilmKontroller {

    private final List<Biletter> billetterList = new ArrayList<>(); //oppretter arraylist av type biletter

    @PostMapping("/lagre")
    public void lagreBiletter(Biletter innBillett){billetterList.add(innBillett);} //legger billetter inn arraylisten

    @GetMapping("/hentBiletter")
    public List<Biletter> hentBiletter(){return billetterList;} // returnerer bilettene i listen

    @GetMapping("/slettBiletter")
    public void slettBiletter(){billetterList.clear();} //sletter bilettene i listen







}
