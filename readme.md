# Calcolo del prezzo del biglietto del treno

## Traccia

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
2. va applicato uno sconto del 20% per i minorenni
3. va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Istruzioni

Chiedo all'utente i valori

- Quanti km devi viaggiare
- Scrivi la tua età

Creo valore "_Km inseriti dall'utente da viaggiare_":

- equivale al valore di km indicato dall'utente

Creo un valore "_Età utente_":

- equivale all'età indicata dall'utente

Dopo creo una costante:

- Prezzo biglietto per Km = 0,21 €

Creo un valore "_Biglietto standard_":

- "_Prezzo biglietto per Km_" x "_Km inseriti dall'utente da viaggiare_"

Creo valore "_sconto over 65_":

- = 0,4

Creo un valore "_Biglietto scontato over 65_"

- **SE** "_Età utente_" >= a 65

  - "_Biglietto scontato over 65_" = "_biglietto standard_" x "_sconto over 65_"

Creo valore "_sconto under 20_":

- = 0,2

Creo un valore "_Biglietto minorenni_"

- **SE** "_Età utente_" < a 18

  - "_Biglietto minorenne_" = "_biglietto standard_" x "_sconto under 20_"

**SE** "_Età utente_" >= a 65

- "_Biglietto finale_" = "_Biglietto scontato over 65_"

**Altrimenti SE** "_Età utente_" < a 18

- "_Biglietto finale_" = "_Biglietto minorenne_"

**Altrimenti**

- "_Biglietto finale_" = "_Biglietto standard_"
