import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Entete({etatPanier}) {
  // Nous avons besoin uniquement de la variable d'état, et pas du mutateur (setPanier)
  const [panier] = etatPanier;
  
  // On extrait le tableau des valeurs de l'objet 'panier' 
  // (cette variable est utilisée pour afficher le nombre d'articles dans le badge sur l'icône du panier)
  const articles = Object.values(panier);

  // État d'affichage du sommaire (un 'toggle' : donc true ou false fonctionne bien ici)
  const [afficherSommaire, setAfficherSommaire] = useState(false);

  return (
    <header className="Entete">
      <div className="logo">
        <Link to="/">
          Magasin
        </Link>
      </div>
      <ul className="navPrincipale">
        <li><NavLink to="/nos-produits" activeClassName="navActive">Produits</NavLink></li>
        <li><NavLink to="/a-propos-de-nous" activeClassName="navActive">À propos de nous</NavLink></li>
        <li><NavLink to="/contactez-nous" activeClassName="navActive">Contactez-nous</NavLink></li>
      </ul>
      <ul className="navUtilisateur">
        <li>
          <Badge onClick={() => setAfficherSommaire(!afficherSommaire)} badgeContent={articles.reduce((accumulateur, eltCourant) => accumulateur + eltCourant.qte, 0)} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          { afficherSommaire && 
            <SommairePanier articles={articles} />
          }
        </li>
        <li>Mon compte</li>
      </ul>
    </header>
  )
}