import { Badge } from '@material-ui/core';

import './BtnAjoutPanier.scss';

export default function BtnAjoutPanier({onClick, qte, texte, classeCss}) {
  return (
    <Badge badgeContent={qte} color="primary">
      <button onClick={onClick} className={`BtnAjoutPanier ${classeCss}`}>
        {texte}
      </button>
    </Badge>
  );
} 

