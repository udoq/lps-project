# Angular Projekt

## Lern- und Prüfungssimulation
Im Rahmen des Angular-Moduls soll eine App entwickelt werden, mit der es möglich ist, sich auf Zertifizierungsprüfungen vorzubereiten.Sie soll nicht nur eine Prüfung simulieren, sondern auch einen Teilprüfungsmodus und auch einen Lernmodus enthalten.
Ziel dieses Projektes ist es, ein Programm zu entwickeln, welches in verschiedenen Prüfungssituationen(Modulen)eingesetzt werden kann. Aufgrund einer auf JSON basierenden API, soll das Programm zuerst eine lokale Datenbank laden, soll dann aber die Daten von einem externen Server laden, so dass die Prüfungsfragen (und Antworten) separat gepflegt und aktualisiert werden können, ohnedie Softwareneu auszuliefern.

## Technische Schnittstellen
Die wichtigste technische Schnittstelle in diesem Projekt ist die Verbindung zur mongoDB-Datenbank.Über eine Anwendungssoftware (MongoDBCompass)
lässt sich eine JSON-Datei 1:1 in die Datenbank übertragen und über eine einfache mongoDB-API (Realm) lassen sich die JSON-Objekte mit einen HTTP-Request (get) abfragen.

## Layout
Das Layout wurde mit Tailwind CSS realisiert.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
