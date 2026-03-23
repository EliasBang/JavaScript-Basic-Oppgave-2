/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her
function oddOrEven(num) {
  if (num % 2 == 0) {
    // Checks if a number divided by 2 has a remainder of 0. If so, then it's even.
    return "Partall";
  } else {
    // If previous check returns false, then the code must be odd.
    return "Oddetall";
  }
}
/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her
const exclamation = (string) => {
  return string.toUpperCase() + "!";
}; // Returnerer stringen i store bokstaver og legger til utropstegn på slutten.

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her
function greeting(name, time) {
  // Checks the criterias and runs only the code where it matches.
  if (time < 0 || time > 23) return "Ugyldig tid";
  else if (time >= 0 && time <= 5) return `God natt, ${name}`;
  else if (time >= 6 && time <= 11) return `God morgen, ${name}`;
  else if (time >= 12 && time <= 17) return `God dag, ${name}`;
  else if (time >= 18 && time <= 23) return `God kveld, ${name}`;
  else console.error("Feilmelding");
}
/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her
const removeFirstAndLastItem = (array) => {
  array.shift(); // Removes first item
  array.pop(); // Removes last item
  return array;
};
/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her
function stringManipulator(string) {
  string.replace("vanskelig", "gøy"); // Replaces "vanskelig" with "gøy"
  string.trim(); // Removes space in front and at the back
  return string;
}

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her
// Step 1:
items.shift(); // Removes first item

// Step 2:
items.replace("Viskelær", "Linjal"); // Replaces "Viskelær" with "Linjal"

// Step 3:
items.splice(1, 2, "Markeringspenn"); // Replaces "Penn" and "Notatbok" with "Markeringspenn"

// Step 4:
let combinedString = items.join(" | "); // Joins together all items into a single string.

// Bonus step:
let eWords = []; // Sets up an empty array
for (let i = 0; i < items.length(); i++) {
  // Runs as many times as the lenght of the array
  if (items[i].includes("e")) {
    // If the current index in items contains the letter "e", then run the next code
    eWords.push(items[i]); // Adds the word containing "e" to the e_words array
  }
}

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her
function removeOrAddStringFromArray(array, string) {
  const index = array.indexOf(string); // Finds the index of the string

  if (index >= 0) {
    // Checks if the index is more than -1, in other words if the string was found
    array.splice(index, 1); // Removes 1 item at the index
  } else {
    array.push(string); // Adds the string to the end of the array.
  }
}
/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
function typeCheck(p) {
  switch (
    typeof p // Checks the type of p
  ) {
    case "string": // If it's a string, then
      return `😎${p}😎`; // it returns a smiley at each end with p in the middle.

    case "number": // If it's a number, then
      return `😎${String(p * 2)}😎`; // It returns a string with a smiley at each end with a doubled p in the middle.

    case "boolean": // It it's a boolean, then
      if (p) {
        // it checks if p is true, and if it is
        return "😎Ja😎"; // then it returns a string.
      } else {
        // If false, then
        return "😎Slapp av😎"; // It returns a different string.
      }
    default: // If no options are valid, then it returns different string.
      return "😎Kun primitive verdier😎";
  }
}
