import BtnAjoutPanier from './BtnAjoutPanier';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './Produit.scss';

export default function Produit({etatPanier, id, nom, prix, image}) {
  const [panier, setPanier] = etatPanier;

  /**
   * Ajouter un article au panier (en faisant la mutation de l'état)
   */
  function ajouterPanier() {
    if(panier[id]) {
      // panier[id].qte++; // Ancien code : pas une bonne pratique : il ne faut pas modifier la variable d'état
      setPanier({...panier, [id]:{...panier[id], qte: panier[id].qte + 1}});
    }
    else {
      // panier[id] = {nom: nom, prix: prix, qte: 1} // Idem comme ci-dessus
      setPanier({...panier, [id]:{nom, prix, qte: 1}});
    }
    // On a plus besoin de la ligne suivante puisque setPanier est maintenant utilisée directement ci-dessus
    // setPanier(JSON.parse(JSON.stringify(panier))); // {...panier}
  } 

  // État du bouton (remarquez l'utilisation de la décomposition de tableau)
  let [qte, texte, classeCss]  = 
        panier[id] 
          ? [panier[id].qte, <AddCircleOutlineIcon />, "rouge"] 
          : [0, "Ajouter au panier", ""];
  
  return(
    <li className="Produit">
      <img src={'images-produits/' + image + '.webp'} alt=""/>
      <div className="info">
        <p className="nom">{nom}</p>
        <p className="prix">{prix}</p>
      </div>
      <BtnAjoutPanier onClick={ajouterPanier} qte={qte} texte={texte} classeCss={classeCss} />
    </li>
  );
}
