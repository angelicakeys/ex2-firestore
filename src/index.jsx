import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import Appli from './composants/Appli';

/******* Ex#3 - Étape I ********************************/ 
// Ajuster la valeur de la constante suivante pour qu'elle reflète le nom exact de *votre* dépôt GitHub de solution
const nomDepotGitHub = "ex2-firestore";


// Ne rien modifier aux lignes suivantes 
const baseName = (window.location.href.search(/github\.io/) !== -1) ? `/${nomDepotGitHub}` : "";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={baseName}>
      <Appli />
    </Router>
  </React.StrictMode>,
  document.getElementById('racine')
);