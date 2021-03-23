import './Appli.scss';
import useLocalStorageState from '../hooks/useLocalStorageState';
import Entete from './Entete.jsx';
import ListeProduits from './ListeProduits';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import PiedDePage from './PiedDePage';
import { Switch,Route } from 'react-router-dom';

export default function Appli() { 
  // État du panier
  const etatPanier = useState(
    () => window.localStorage.getItem('panier-4pa') ? JSON.parse(window.localStorage.getItem('panier-4pa')) : {}
  );
  // Variable d'état qui contient le panier
  const [panier] = etatPanier;
  // Sauvegarde du panier dans localStorage (à chaque fois que l'état du panier change)
  useEffect(
    () => window.localStorage.setItem('panier-4pa', JSON.stringify(panier))
    , [panier]
  );
  return (
    <div className="Appli">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
        {/* Le routeur va s'occuper d'inclure le composant correspondant au chemin (route) requis */}
        <Switch>
          {/* Notez qu'on peut spécifier une route avec un élément vide, en utilisant l'attribut 'component'... */}
          <Route path="/" component={Accueil} exact/>
          {/* ... ou un élément conteneur en spécifiant le composant comme enfant de 'Route'  */}
          <Route path="/nos-produits">
            <ListeProduits etatPanier={etatPanier} exact />
          </Route>
          <Route path="/a-propos-de-nous" exact>
            <Apropos />
          </Route>
          <Route path="/contactez-nous" component={Contact} exact />
        </Switch>
      </section>
      <PiedDePage />
    </div>
  );
}