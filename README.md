# Assessment Hellozon

Het assessment is te runnen door eerst de server op te starten. Ga naar de map van de server met het commando cd hellozonServer en voer vervolgens npm start uit. Zodra er in de terminal staat "Server is now running on port 3001 (http://localhost:3001/)" is het succesvol.

Open vervolgens een tweede terminal en navigeer naar de source map door cd hellozon in te voeren in de terminal. Ook daar kun je het starten met npm start. Deze zal openen op http://localhost:3000/

# vragen

1.  Wat als er dusdanig veel kaartjes zijn dat het niet meer op de pagina past? - Momenteel is het zo dat er bij een overflow een scrollbar komt. Dit kan aangepast worden in de CSS van de searchbar. Bij card-container staat momenteel overflow: inherit; dit kan aangepast worden naar bijvoorbeeld scroll om een eigen scrollbar te krijgen.
2.  Is het mogelijk om de kaartjes op de front-end meteen bij te werken wanneer er een nieuwe is ingediend? - Ja, dit kan. Door een aanpassing te maken aan de state van de component wordt de pagina automatisch geüpdatet. En de componenten worden opnieuw gerenderd.
3.  Wat als de server offline is? - Als de server offline is dan kan er geen data worden opgehaald. Het eerste blokje blijft dus in de laden... fase staan. Ook zal de OK-knop niets doen.
4.  Hoe zouden we de tekstjes ook opgeslagen houden na het herstarten van de server? - Dit kan je op meerdere manieren oplossen. Je kan de data opslaan in een database. Of je kan de data lokaal opslaan in een bestand en deze vervolgens bij het herstarten van de server weer inladen.
