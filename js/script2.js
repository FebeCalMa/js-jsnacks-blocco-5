/*
Crea 10 oggetti che rappresentano una zucchina. 
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

let zucchinePiccole = [
  {
    varieta: "Zucchina Nera",
    peso: 200,
    lunghezza: 13,
  },
  {
    varieta: "Zucchino Fiorentino",
    peso: 300,
    lunghezza: 10,
  },
  {
    varieta: "Zucchine trombetta",
    peso: 500,
    lunghezza: 11,
  },
  {
    varieta: "Zucchino Romanesco",
    peso: 250,
    lunghezza: 15,
  },
  {
    varieta: "Zucchina napoletana",
    peso: 250,
    lunghezza: 8,
  },
];

let zucchineGrandi = [
  {
    varieta: "Zucchine tonde",
    peso: 100,
    lunghezza: 16,
  },
  {
    varieta: "Zucchina pâtisson",
    peso: 320,
    lunghezza: 18,
  },
  {
    varieta: "Zucchino giallo",
    peso: 250,
    lunghezza: 20,
  },
  {
    varieta: "Zucchino rugoso friulano",
    peso: 350,
    lunghezza: 19,
  },
  {
    varieta: "Zucchina Crookneck",
    peso: 450,
    lunghezza: 22,
  },
];
console.log(zucchineGrandi, zucchinePiccole);

//calcolare individualmente il peso di ogni array di zucchine
