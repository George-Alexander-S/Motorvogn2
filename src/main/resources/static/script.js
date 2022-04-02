function registrer () {
    const motorvogn = {
        navn : $("#navn").val(),
        personnr : $("#personnr").val(),
        adresse : $("#adresse").val(),
        kjennetegn : $("#kjennetegn").val(),
        merke : $("#merke").val(),
        type : $("#type").val(),
    };
    $.post("registrer", motorvogn, function () {
        hentAlle();
    });
    document.getElementById("motorvogn").reset();
}

function hentAlle() {
    $.post("/hentAlle", function(data) {
        formaterData(data);
    });
}

function formaterData(vogner) {
    let ut ="<table><tr><th>Navn</th><th>Personnr</th><th>Adresse</th><th>Kjennetegn</th><th>Merke</th><th>Type</th></tr>";
    for (const motorvogn of vogner) {
        ut += "<tr><td>"+motorvogn.navn+"</td><td>"+motorvogn.personnr+"</td><td>"+motorvogn.adresse+"</td><td>"+motorvogn.kjennetegn+"</td><td>"+motorvogn.merke+"</td><td>"+motorvogn.type+"</td></tr>";
    }
    ut += "</table>"; //Remember the closing tag
    $("#vogner").html(ut); //Sends it to the html element id#
}

function slettAlle() {
    $.get("slettAlle", function() {
        hentAlle();
    });
}