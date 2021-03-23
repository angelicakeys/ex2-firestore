import './ListeProduits.scss';
import Produit from "./Produit";
import { useEffect, useState } from 'react';
/******* Ex#3 - Étape D ********************************/ 
// Importer l'objet bd du fichier firebase.js


export default function ListeProduits(props) {
  /******* Ex#3 - Étape E ********************************/ 
  // Créer un "état" React pour les produits (utiliser useState)
  
    
  useEffect(() => {
      // On initialise un tableau pour contenir les produits extraits de Firestore
      const tabProduits = [];
      
      /******* Ex#3 - Étape F ********************************/ 
      // Faire une requête à la collection de produits sur Firestore et remplir les tableau tabProduits avec les données de produits 
      // retournées par Firestore (ne pas oublier d'ajouter l'identifiant)

      
      /******* Ex#3 - Étape G ********************************/ 
      // Modifier l'état des produits (initialisé ci-dessus avec useState) en utilisant le mutateur et le tableau tabProduits
      

  }, []); // Ne modifiez surtout pas le tableau des dépendances à gauche : vous risquez un appel récurent sans fin à Firebase !!

  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul>        
        {/*
          ******* Ex#3 - Étape H ******************************** 
          Utiliser la variable d'état qui contient les produits pour générer les composants 'Produit' ci-dessous (avec la méthode map()).
          Remarque : Vous pouvez si vous voulez reproduire la solution déjà faite en classe (c'est un trivial copier-coller).
          Attention : les composants Produit s'attendent à recevoir l'état du panier dans leurs 'props', donc vous devez
          avoir l'attribut "etatPanier={props.etatPanier}" quand vous les générer ici : encore une fois, regardez 
          le code de l'exercice de classe. Vous pouvez aussi regarder le code du composant Produit pour vérifier ce qu'il 
          a besoin de recevoir en 'props'.
        */}
        
      </ul>
    </div>
  );
}