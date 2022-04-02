package com.example.motorvogn2;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MotorvognController {

    public final List<Motorvogn> vognregister = new ArrayList<>();

    @PostMapping("/registrer")
    public void regVogn(Motorvogn innVogn) {
        vognregister.add(innVogn);
    }
    @PostMapping("/hentAlle")
    public List<Motorvogn> hentAlle() {
        return vognregister;
    }
    @GetMapping("/slettAlle")
    public void slettAlle() {
        vognregister.clear();
    }
}
