import { Auto } from "./auto.ts";

const farben = ["rot", "blau", "grün", "gelb"];
const automarken = ["BMW", "Mercedes", "Audi", "VW", "Opel"];

// --- Dein Originalcode ---
const auto = new Auto(automarken[Math.floor(Math.random() * automarken.length)], 890, farben[Math.floor(Math.random() * farben.length)]);
auto.printdata();

let anzahlAutos = 1000;
const autos: Auto[] = [];
for (let i = 0; i < anzahlAutos; i++) {
    autos.push(new Auto(automarken[Math.floor(Math.random() * automarken.length)], Math.floor(Math.random() * 350) + 1, farben[Math.floor(Math.random() * farben.length)]));
}

// --- NEU: Suchfunktion ---
function sucheAutosNachMarke(autos: Auto[], gesuchteMarke: string): Auto[] {
    return autos.filter(auto => auto.marke.toLowerCase() === gesuchteMarke.toLowerCase());
}

function sucheAutosNachFarbe(autos: Auto[], gesuchteFarbe: string): Auto[] {
    return autos.filter(auto => auto.farbe.toLowerCase() === gesuchteFarbe.toLowerCase());
}

// --- Beispielaufruf ---
const gefundeneBMWs = sucheAutosNachMarke(autos, "BMW");
console.log(`Gefundene BMWs: ${gefundeneBMWs.length}`);

const gefundeneRoteAutos = sucheAutosNachFarbe(autos, "rot");
console.log(`Gefundene rote Autos: ${gefundeneRoteAutos.length}`);

// --- Rest deines Codes ---
for (let i = 0; i < autos.length; i++) {
    autos[i].printdata();
}
autos.forEach((auto) => {
    auto.printdata();
});