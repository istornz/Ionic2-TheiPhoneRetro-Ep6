<p align="center">
  <img src="http://dimitridessus.fr/img/logo_circle.png" width="140px" alt="TheiPhoneRetro-Subscribe">
</p>

# Ionic 2 - Episode 6

La serie te plait ?

Alors n'hésite pas à t'abonner ! Merci :blush:

<a href="https://www.youtube.com/subscription_center?add_user=theiphoneretro">
  <img src="http://www.pngall.com/wp-content/uploads/2016/03/Subscribe-PNG-12.png" width="100px" alt="TheiPhoneRetro-Subscribe">
</a>

Dans cette épisode je vous montre comment intégrer un web-service/API au sein de son application. Pour cela, la vidéo est scindée en 2 étapes distinctes : l'analyse et le choix de l'API et enfin son utilisation.

Suite à votre demande lors de l'épisode précèdent (épisode 5), nous utiliserons le web-service : [**News API**](https://newsapi.org/)

Bien entendu, il est parfaitement possible de suivre cet épisode sous Windows, Mac ou Linux =)

## Au programme 

#### Partie 1
- Comment bien choisir une API ? (pièges, dangers etc.).
- Présentation de [**News API**](https://newsapi.org/)
- Étude et analyse de la documentation du web-service.
- Création et tests des requêtes HTTP via PostMan.

#### Partie 2
- Création d'un service injectable.
- Définition d'un model complet.
- Utilisation & explication des promesses (promise).
- Utilisation d'un ngFor sur l'élément ion-card.

## Vidéo

<p align="center">
  <a href="https://www.youtube.com/watch?v=hQ-QjZezhLc"><img src="https://img.youtube.com/vi/hQ-QjZezhLc/0.jpg" alt="Ionic2-TheiPhoneRetro-Episode6"></a>
</p>

## Instructions

Pour utiliser ce projet il vous suffit de suivre les étapes ci dessous :

- Installer tout les modules requis.
```{r, engine='sh', count_lines}
npm install 
```

- Ajouter les plateformes de votre choix.
```{r, engine='sh', count_lines}
cordova platform add android
cordova platform add ios
```

- Compilez et lancez le projet.
```{r, engine='sh', count_lines}
ionic run <PLATFORM>
```

- Profitez :tada:
