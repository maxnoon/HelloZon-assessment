# Assessment Hellozon

    het assessent is te runnen door eerst de server op te starten door naar de map van de server te gaan met cd hellozonServer en vervolgens npm start uit te voeren. zodra er in de terminal staat Server is now running on port 3001 (http://localhost:3001/)is het succesvol.

    Open vervolgens een tweede terminal en navigeer naar de source map door cd hellozon in te voeren in de terminal. Ook daar kan je hem starten met npm start. Deze zal openen op http://localhost:3000/

# vragen

1.  Wat als er dusdanig veel kaartjes zijn dat het niet meer op de pagina past? - Momenteel is het zo dat er bij een overflow een scrollbar komt. Dit kan aangepast worden in de css van de searchbar. Bij card-container daar staat momenteel overflow: inherit dit kan aangepast worden door bijvoorbeeld scroll om zijn eigen scrollbar te krijgen.
2.  Is het mogelijk om de kaartjes op de front-end meteen bij te werken wanneer er een
    nieuwe is ingediend? - Ja dit kan. Door een aanpassing te maken aan de state van de component wordt de pagina automatisch geupdate. En de componenten worden opnieuw gerenderd.
3.  Wat als de server offline is? - Als de server offline is dan kan er geen data worden opgehaald.Het eerste blokje blijft dus op de laden... fase staan. ook zal de OK knop niets doen.
4.  Hoe zouden we de tekstjes ook opgeslagen houden na het herstarten van de server? - Dit kan je op meerdere manieren oplossen. Je kan de data opslaan in een database. Of je kan de data lokaal opslaan in een file en deze vervolgens bij het herstarten van de server weer inladen.
