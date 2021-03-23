import './PiedDePage.scss';

// Nous avons besoin de cette valeur une seule fois dans le cycle de vie de l'appli.
// Donc, on la calcule en dehors du code du composant.
const annee = new Date().getFullYear();

export default function PiedDePage(props) {  
  return (
    <footer className="PiedDePage">
      &copy;{annee} - TIM - Tous droits réservés.
    </footer>
  );
}