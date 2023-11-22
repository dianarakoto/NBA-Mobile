// EquipeListItem.tsx

import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import { Equipe } from '../data/equipes';
import './EquipeListItem.css'; // Import the CSS file

interface EquipeListItemProps {
  equipe: Equipe;
}

const EquipeListItem: React.FC<EquipeListItemProps> = ({ equipe }) => {
  return (
    <IonItem routerLink={`/equipe/${equipe.id_equipe}`} detail={false}>
      <IonLabel className="ion-text-wrap ion-item-content">
        <img src="/favicon.png" alt="My Image" />
        <h2>
          {equipe.nom_equipe}
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default EquipeListItem;
