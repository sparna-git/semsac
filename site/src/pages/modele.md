---
layout: content-page.njk
title: Le modèle de données
---

_Un encodage formel et détaillé du modèle de données, exprimé à l'aide du standard SHACL, est disponible [ici](../../shacl/AD31%20SHACL.html). Cet encodage détaillé sert de base à la configuration de l'explorateur et du formulaire sur ce site._

_Cette page documente les principales entités qui entrent en jeu dans la sémantisation en RiC-O du fonds des sacs à procès._

## Procédure
Procédure judiciaire à l’origine des documents. Il s’agit du cœur de la description.

La procédure, qui a eu lieu à une **date** donnée, implique plusieurs **parties**. Il peut s’agir de **personnes morales**, comme de **personnes physiques**. Le rôle de la partie dans la procédure (demandeur ou défenseur) n’est pas relevé. Lorsque cela est possible, la **profession** et le **sexe** supposé des personnes physiques sont relevés. Les personnes morales se caractérisent par un **type de collectivité** et le **lieu** de leur siège.

Chaque procédure repose sur des **faits** qui sont qualifiés en fonction d’une liste d’autorité et du **lieu** où ils sont advenus.

La procédure a été instruite successivement par plusieurs **juridictions**, chacune ayant pu produire des éléments du sac.

Une procédure peut être liée à une autre.

La modélisation détaillée correspondante des procedures en RiC-O est la suivante :

[![](../../assets/images/modele-procedures.png)](../../assets/images/modele-procedures.png)


## Fait
Objet de la procédure. Les faits se sont déroulés dans un **lieu**.

## Lieu
Entité géographique permettant de contextualiser des faits, une juridiction, ou une partie.

La modélisation détaillée correspondante des faits et de leur lieu en RiC-O est la suivante :

[![](../../assets/images/modele-faits-lieux.png)](../../assets/images/modele-faits-lieux.png)


## Agents

### Juridiction
Institution judiciaire ayant instruit la procédure. Chaque juridiction se caractérise par un **type de juridiction** et un **lieu** (généralement le siège, parfois le ressors).

### Partie
Personne physique ou morale impliquée dans la procédure (défenseur ou demandeur). Les personnes morales peuvent être localisées dans un **lieu**. Les personnes physiques peuvent être liées à leur profession

La modélisation détaillée correspondante des Agents en RiC-O est la suivante :

[![](../../assets/images/modele-agents.png)](../../assets/images/modele-agents.png)


## Notice
Contenu intellectuel des documents présents dans le sac.

## Sac
Aspect matériel de l’ensemble documentaire.

Les **sacs** à procès contiennent un ensemble de **documents** réunis dans le cadre d’une **procédure** judiciaire. Il s’agit en réalité d’une chaîne de procédures (depuis la première **instruction** jusqu’à l’arrêt du Parlement), mais décrite comme un ensemble. 

Dans le courant du XIXe siècle, certains sacs ont étés regroupés dans des **liasses** dans le cadre d’une action archivistique de nature pour l’instant inconnue.

La modélisation détaillée correspondante des sacs et des notices est la suivante :

[![](../../assets/images/modele-sacs-notices.png)](../../assets/images/modele-sacs-notices.png)


## Traitement archivistique
Toutes ces informations sont issues du **dépouillement** des sacs à procès depuis plusieurs décennies. Elles ont pu être relevées par des **étudiants**, des **bénévoles**, des **archivistes** ou des **chercheurs**. Si la **saisie** informatique est aujourd’hui concomitante au dépouillement, elle a longtemps été réalisée a posteriori, souvent plusieurs années plus tard.

Une partie des informations relevées par des étudiants ou des bénévoles a été **relue**, voire **validée** par des archivistes.

La modélisation détaillée correspondante est la suivante (on notera l'utilisation de quelques propriétés spécifiques en plus de RiC-O) :

[![](../../assets/images/modele-traitement_archivistique.png)](../../assets/images/modele-traitement_archivistique.png)
