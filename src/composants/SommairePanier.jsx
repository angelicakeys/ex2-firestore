import './SommairePanier.scss';

export default function SommairePanier({articles}) {
  // On utiliser une fonction utilitaire pour faire le calcul de l'info requise dans le sommaire
  const info = retournerInfoPanier(articles);

  return(
    <div className="SommairePanier">
      <span>Articles différents : {info.nbArticles}</span>
      <span>Total # items : {info.totalItems}</span>
      <span>Sous-total : {info.st}</span>
      <span>TPS : {info.tps}</span>
      <span>TVQ : {info.tvq}</span>
      <span>Total : {info.total}</span>
    </div>
  );
}

function retournerInfoPanier(articles) {
  // le tableau des articles du panier ressemle à ça :
  // [ {nom: 'sdfsd', prix: 15.99, qte: 2}, {nom: 'sdfsd', prix: 9.99, qte: 6}, {nom: 'sdfsd', prix: 23.67, qte: 15}]
  let info = {nbArticles: 0, totalItems: 0, st: 0, tps: 0, tvq: 0, total: 0};
  info.nbArticles = articles.length;
  info.totalItems = articles.reduce((acc, article) => acc + article.qte , 0);
  const st = articles.reduce((acc, article) => acc + (article.prix*article.qte), 0);
  info.st = st.toFixed(2); // Attention : toFixed() transforme le nombre en chaîne de caractères
  const tps = st * 0.05;
  info.tps = tps.toFixed(2)
  const tvq = st * 0.09975;
  info.tvq = tvq.toFixed(2);
  info.total = (st + tps + tvq).toFixed(2);
  return info;
}