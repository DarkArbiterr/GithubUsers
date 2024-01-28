# GithubUsers - Listing użytkowników Githuba.

Strona internetowa napisana w języku **JavaScript** i **Java** wyświetlająca listę repozytoriów danego użytkownika.
Do stworzenia strony korzystano z **node.js** i **React**.

## Instrukcja uruchomienia:

	1. Uruchomić terminal
	2. Przejść do pobranego katalogu
	3. W terminalu uruchomić komendę "npm install" i "npm start"
	4. Strona internetowa uruchomi się od razu, będzie działać na porcie 3000

## Założenia:

	1. Lista repozytoriów użytkownika jest wyswietlana od razu posortowana po liczbie gwiazdek
	2. Jeżeli wprowadzony uzytkownik nie posiada publicznych repozytoriów zostanie wyswietlony
	   komunikat o braku repozytoriów publicznych.
	3. Jeżeli wprowadzony użytkownik nie istnieje na Githubie zostanie wyswietlony komunikat
	   o braku użytkownika

## Uproszczenia:

	1. Przycisk przy pustym formularzu pozostaje zablokowany by nie wysłać pustego zapytania do API

node.js v14.16.1
React Bootstrap v1.5.2
React v17.0.2
