# Migration des campagnes

La migration des campagnes a été faite par une technique différente de la migration des notices initiale. Elle a été réalisée à l'aide de l'outil [SPARQL Anything](https://sparql-anything.cc/)

## Prérequis

Ce script demande à avoir SPARQL Anything installé:
  - Télécharger et dézipper le jar depuis https://github.com/SPARQL-Anything/sparql.anything/releases/tag/v1.1.0
  - Mettre à jour le chemin du jar dans run-convert-campagnes.sh

Il faut également que Jena soit installé:
  - Installer les outils de command line de Jena : https://jena.apache.org/documentation/tools/index.html

Il faut que les données des notices soient accessibles dans un service SPARQL
  - Noter l'URL du service SPARQL
  - Mettre à jour cette URL dans le fichier construct-cote-lot.rq, ligne 40

## Lancement

Lancer le script run-convert-campagnes.sh.
Les fichiers finaux sont:
  - campagnes-clean.ttl
  - cote-lot.ttl



## 
