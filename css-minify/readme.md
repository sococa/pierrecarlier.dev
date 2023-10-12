Site "one page scroll-snap"

- <nav> a une height de 3vh
- <h2> a une height de 15vh
   - <h2> a une margin-top de 6vh pour ne pas coller à <nav> qui a un position: fixed
- .slider_content contient tout ce qui est en dessous des <h2> et à une height de 85vh
  --> 15vh + 85vh = 100vh pour faire un site 'page scroll'. Le 3vh de <nav> ne sont pas pris en compte à cause de la navigation:fixed
- Ajouté un padding-bottom: 6.5vh à services et aboutMe car la barre de navigation des téléphones fait en moyenne 6.5vh de hauteur
